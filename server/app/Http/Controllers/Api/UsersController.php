<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Validator;

class UsersController extends Controller
{
    public function login(Request $request)
    {
        // $loginData = $request->validate([
        //     'email' => 'email|required',
        //     'password' => 'required',
        // ]);


        $validation = Validator::make($request->all(), [
            'email' => 'email|required|max:255',
            'password' => 'required|max:255',
        ]);

        if ($validation->passes()) {
            $user = User::where('email', $request->email)->first();
            if ($user) {
                if (Hash::check($request->password, $user->password)) {
                    //$request->user()->token()->revoke();
                    $token = $user->createToken('Laravel Password Grant Client')->accessToken;
                    $response = ['access_token' => $token, 'user' => $request->email];
                    return response($response, 200);
                } else {
                    $response = ["message" => "Username or password is incorrect"];
                    return response($response, 400);
                }
            } else {
                $response = ["message" => 'User does not exist'];
                return response($response, 400);
            }
        } else {
            $response = ["errors" => $validation->errors()];
            //return response($response, 400);
            return response($response, 400);
        }
    }

    public function register(Request $request)
    {
        $validation = Validator::make($request->all(), [
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'email|required|max:255',
            'password' => 'required|max:255',
        ]);
        // $validate_data = $request->validate([
        //     'firstname' => 'required',
        //     'lastname' => 'required',
        //     'email' => 'email|required|unique:users',
        //     'password' => 'required|confirmed',
        // ]);

        //$validate_data['password'] = app('hash')->make($request->password);

        if ($validation->passes()) {
            $user = new User;
            $user->firstname = $request->firstname;
            $user->lastname = $request->lastname;
            $user->email = $request->email;
            $user->password = app('hash')->make($request->password);
            $user->save();
            return response(['user' => $user]);
            //$validate_data['password'] = app('hash')->make($request->password);
        }
        //print_r($validate_data);
        //die();
        // $user = User::create($validate_data);

        // $accessToken = $user->createToken('authToken')->accessToken;


        // return response(['user' => $user, 'access_token' => $accessToken]);
        //$$accessToken = $user->createToken('Laravel Password Grant Client')->accessToken;



    }
}
