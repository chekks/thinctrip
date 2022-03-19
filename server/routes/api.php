<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::prefix('user/users')->group(function () {
//     Route::post('/register', 'Api\UsersController@register');
//     Route::post('login', ['as' => 'login', 'uses' => 'Api\UsersController@login']);
// });


Route::get('/verify-email', 'Api\UsersController@verifyEmail');
Route::post('/register', 'Api\UsersController@register');
Route::post('/register-contributor', 'Api\UsersController@contributorRegister');
Route::post('login', ['as' => 'login', 'uses' => 'Api\UsersController@login']);
//Route::get('/users', 'Api\UsersController@getUserUsers');

Route::prefix('users')->group(function () {
    Route::get('', 'Api\UsersController@getUserUsers');
    Route::get('/country', 'Api\UsersController@getCountries');
    // Route::get('/users', function () { });
});

Route::prefix('enquiries')->group(function () {
    Route::post('', 'Api\EnquiriesController@postEnquiries');
    Route::get('', 'Api\EnquiriesController@getEnquiries');
    // Route::get('/users', function () { });
});

Route::prefix('destination')->group(function () {
    //Route::post('', 'Api\EnquiriesController@postEnquiries');
    Route::get('', 'Api\DestinationController@getAllDestination');
    // Route::get('/users', function () { });
});

Route::prefix('menu')->group(function () {
    Route::get('', 'Api\MenuController@getMenu');
    // Route::get('/users', function () { });
});

Route::prefix('tour')->group(function () {
    Route::post('', 'Api\ToursController@postTours');
    Route::get('/get_all', 'Api\ToursController@getAllTours');
});

Route::get('/storage/{filename}', function ($filename) {
    $path = storage_path('app/public/' . $filename);

    if (!File::exists($path)) {
        abort(404);
    }

    $file = File::get($path);
    $type = File::mimeType($path);

    $response = Response::make($file, 200);
    $response->header("Content-Type", $type);

    return $response;
});
