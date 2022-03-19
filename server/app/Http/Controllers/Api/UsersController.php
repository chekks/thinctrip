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

    public function contributorRegister(Request $request)
    {

        $validation = Validator::make($request->all(), [
            'firstname' => 'required',
            // 'lastname' => 'required',
            // 'email' => 'email|required|max:255',
            // 'password' => 'required|max:255',
            // 'confirm_password' => 'required|max:255',
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
            $user->username = $request->username;
            $user->email = $request->email;
            $user->password = app('hash')->make($request->password);
            $user->avatar = $request->avatar;
            $user->country_from = $request->country_from;
            $user->places_travelled = $request->places_travelled;
            $user->user_role_id = 2;
            $user->save();

            $to = $request->email;
            $subject = "Thinctrip - Verify your email";

            $message = "
            <!DOCTYPE html>
<html>

<head>
    <title>Thinctrip - Verify your email</title>
</head>

<body style='background-color: #f1f1f1; margin: 0; padding: 0;'>
    <div style='max-width: 600px; margin: 0 auto; '>
        <table align='center' cellpadding='0' cellspacing='0' border='0' width='100%'
            style='margin: auto; background-color: #fff;'>
            <tbody>
                <tr align='center'>
                    <td style='padding: 1em 2.5em; background-color: #fff'> <img style='width: 30%;'
                            src='https://staging.thinctrip.com/wp-content/uploads/2019/07/ThincTrip.png'></td>
                </tr>
                <tr>
                    <td valign='middle'
                        style='background-image: url(https://staging.thinctrip.com/wp-content/uploads/2019/09/bg_1.jpg); background-size: cover; height: 400px; position: relative; z-index: 0;'>



                        <table width='100%' ; style='background-color: #0000004d; height: 400px;'>
                            <tbody>
                                <tr>
                                    <td>
                                        <div style='text-align: left; color: rgba(255,255,255,.8); padding: 0 4em; '>
                                            <h2
                                                style='color: #ffffff; font-size: 35px; margin-bottom: 0; line-height: 1.2; font-weight: 900; font-family: 'Nunito Sans', sans-serif; margin: 0;'>
                                                Philippines.</h2>
                                            <p
                                                style='color: #ffffff; font-size: 23px; margin-bottom: 0; line-height: 1.2; font-weight: 900; font-family: 'Nunito Sans', sans-serif; margin: 0;'>
                                                7000 Islands. 7000 ways to explore.</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td style='text-align:center; background: rgba(0,0,0,.8); padding: 20px;'>
                        <div style='color: rgba(255,255,255,.8);'>
                            <h3
                                style=' color: #00d8ca; font-family: 'Nunito Sans', sans-serif; font-weight: 400; line-height: 1.8; margin: 0;'>
                                Thank you for signing up! <br> Kindly, verify your email by clicking <a
                                    href='http://127.0.0.0:8000/api/verify-email?email=" . $to . "'><b>here</b></a></h3>
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
            $headers .= 'From: <thinctrip@no-reply.com>' . "\r\n";
            // $headers .= 'Cc: myboss@example.com' . "\r\n";

            if (mail($to, $subject, $message, $headers)) {
                echo "Email successfully sent to $to...";
            } else {
                echo "Email sending failed...";
            }


            //return response(['user' => $user, "user_email", $request->email]);
        } else {
            return response(['errors' => $validation->errors()]);
        }
    }

    public function verifyEmail()
    {
        ini_set('memory_limit', '256M');
        $user = User::where('email', $_GET['email'])->first();
        if ($user) {
            $user->is_verified = 1;
            $user->save();
?>
            <script type="text/javascript">
                window.location.href = "http://localhost:3003/login";
            </script>

<?php
            //return redirect()->to('http://localhost:3003/login')->send();
        } else {
            $response = ["message" => 'User does not exist'];
            return response($response, 400);
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
