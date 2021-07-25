<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Validator;

class UsersController extends Controller
{
    public function getAdminUsers()
    {
        $users = User::get();
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

            $to = "japto123@gmail.com";
            $subject = "HTML email";

            $message = "
        <!DOCTYPE html>
        <html>
        <head>
            <title>Newsletter</title>
        </head>
        <body style=\"background-color: #f1f1f1; margin: 0; padding: 0;\">
                <div style=\"max-width: 600px; margin: 0 auto; \">
                    <table align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" style=\"margin: auto; background-color: #fff;\">
                        <tbody>
                            <tr align=\"center\">
                                <td style=\"padding: 1em 2.5em; background-color: #fff\"> <img style=\"width: 30%;\" src=\"https://staging.thinctrip.com/wp-content/uploads/2019/07/ThincTrip.png\"></td>
                            </tr>
                            <tr>
                                <td valign=\"middle\" style=\"background-image: url(https://staging.thinctrip.com/wp-content/uploads/2019/09/bg_1.jpg); background-size: cover; height: 400px; position: relative; z-index: 0;\">
                                    
                                    
        
                                    <table width=\"100%\"; style=\"background-color: #0000004d; height: 400px;\">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div style=\"text-align: left; color: rgba(255,255,255,.8); padding: 0 4em; \">
                                                        <h2 style=\"color: #ffffff; font-size: 35px; margin-bottom: 0; line-height: 1.2; font-weight: 900; font-family: 'Nunito Sans', sans-serif; margin: 0;\">Philippines.</h2>
                                                        <p style=\"color: #ffffff; font-size: 23px; margin-bottom: 0; line-height: 1.2; font-weight: 900; font-family: 'Nunito Sans', sans-serif; margin: 0;\">7000 Islands. 7000 ways to explore.</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td style=\"text-align:center; background: rgba(0,0,0,.8); padding: 20px;\">
                                    <div style=\"color: rgba(255,255,255,.8);\">
                                        <h3 style=\" color: #00d8ca; font-family: 'Nunito Sans', sans-serif; font-weight: 400; line-height: 1.8; margin: 0;\">Thank you for signing up! <br> Your account will be approve in 24 hours.</h3>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </body>
        </html>
";

            // Always set content-type when sending HTML email
            $headers = "MIME-Version: 1.0" . "\r\n";
            $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

            // More headers
            $headers .= 'From: <francheskarivano@gmail.com>' . "\r\n";
            $headers .= 'Cc: francheskarivano@gmail.com' . "\r\n";

            $mail_ = mail($request->email, $subject, $message, $headers);




            return response(['user' => $user, "mail" => $mail_, "user_email", $request->email]);
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
