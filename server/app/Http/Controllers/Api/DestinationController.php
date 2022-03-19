<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Destination;

class DestinationController extends Controller
{
    //
    public function getAllDestination()
    {
        $destination = Destination::orderBy("name", "DESC")
            ->get();
        return response()->json(['data' => $destination]);
    }
}
