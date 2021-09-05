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

// Route::prefix('admin/users')->group(function () {
//     Route::post('/register', 'Api\UsersController@register');
//     Route::post('login', ['as' => 'login', 'uses' => 'Api\UsersController@login']);
// });


Route::post('/register', 'Api\UsersController@register');
Route::post('login', ['as' => 'login', 'uses' => 'Api\UsersController@login']);
Route::get('/users', 'Api\UsersController@getAdminUsers');
// Route::post('/register', 'Api\UsersController@register');
// Route::post('login', ['as' => 'login', 'uses' => 'Api\UsersController@login']);

Route::prefix('enquiries')->group(function () {
    Route::post('', 'Api\EnquiriesController@postEnquiries');
    Route::get('', 'Api\EnquiriesController@getEnquiries');
    // Route::get('/users', function () { });
});

Route::prefix('menu')->group(function () {
    Route::get('/{user_role}', 'Api\MenuController@getMenu');
    // Route::get('/users', function () { });
});
