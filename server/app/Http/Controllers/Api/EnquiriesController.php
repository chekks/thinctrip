<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Enquiries;
use Illuminate\Http\Request;
use Validator;

class EnquiriesController extends Controller
{
    //
    public function addEnquiries(Request $request)
    {
        $validation = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'email' => 'email|required|max:255',
            'message' => 'required|max:255',
        ]);

        if ($validation->passes()) {
            $enquiry = new Enquiries();
            $enquiry->name = $request->post('name');
            $enquiry->email = $request->post('email');
            $enquiry->message = $request->post('message');
            $enquiry->save();
            return $enquiry;
        } else {
            $response = ["errors" => $validation->errors()];
            return response($response, 400);
        }
    }
}
