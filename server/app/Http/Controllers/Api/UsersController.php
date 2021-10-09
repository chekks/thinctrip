<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\UserRoles;
use Illuminate\Support\Facades\Hash;
use Validator;

class UsersController extends Controller
{
    public function getUserUsers()
    {
        $users = User::get();
        //print_r(phpinfo());
        return response($users, 200);
    }

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
                    $user->access_token = $token;

                    $userrole = UserRoles::find($user->user_role_id);
                    $user->user_role = $userrole['key'];

                    return response($user, 200);
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

            return response(['user' => $user, "user_email", $request->email]);
        }
    }
}
