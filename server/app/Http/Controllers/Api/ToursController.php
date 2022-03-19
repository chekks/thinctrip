<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Destination;
use Illuminate\Http\Request;
use App\Models\Tours;

class ToursController extends Controller
{
    public function postTours(Request $request)
    {
        // $validation = Validator::make($request->all(), [
        //     'name' => 'required|max:255',
        //     'email' => 'email|required|max:255',
        //     'message' => 'required|max:255',
        // ]);

        // if ($validation->passes()) {
        //     $enquiry = new Enquiries();
        //     $enquiry->name = $request->post('name');
        //     $enquiry->email = $request->post('email');
        //     $enquiry->message = $request->post('message');
        //     $enquiry->save();
        //     return $enquiry;
        // } else {
        //     $response = ["errors" => $validation->errors()];
        //     return response($response, 400);
        // }
        //return ;

        $departure = Destination::where('name', $request->post('departure'))->first();
        $arrival = Destination::where('name', $request->post('arrival'))->first();

        $tour = new Tours();
        $tour->title = $request->post('title');
        $tour->destination_from = $departure->id;
        $tour->destination_to = $arrival->id;
        $tour->availability = "December 31, 2019";
        $tour->package_num = "ADD098";
        $tour->details = json_encode($request->post('details'));
        $tour->itinerary = json_encode($request->post('itinerary'));
        $tour->status = "Draft";
        $tour->save();
        return $tour;
    }

    public function getAllTours()
    {
        $tours = Tours::get();



        foreach ($tours as $key => $value) {
            $departure = Destination::where('id', $value['destination_from'])->first();
            $arrival = Destination::where('id', $value['destination_to'])->first();
            $value['departure'] = $departure['name'];
            $value['arrival'] = $arrival['name'];
            $value['details'] = json_decode($value['details']);
            $value['itinerary'] = json_decode($value['itinerary']);
        }

        return $tours;
    }
}
