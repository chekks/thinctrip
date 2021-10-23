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

    public function curlLink($link)
    {
        if ($link == "") {
            return [];
        }

        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, $link);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $server_output = curl_exec($ch);

        curl_close($ch);

        // $new = simplexml_load_string($server_output);
        // $con = json_encode($new);
        // $newArr = json_decode($con, true);
        return json_decode($server_output);
    }

    public function getCountries()
    {
        $url = "https://countriesnow.space/api/v0.1/countries/flag/images";
        $response = $this->curlLink($url);
        return response()->json(['countries' => $response->data]);
    }
}
