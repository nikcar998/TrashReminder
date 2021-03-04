<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GarbageController;
use App\Http\Controllers\RequirementsController;
use App\Http\Controllers\UserController;

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

// // // Route::middleware('auth:api')->get('/user', function (Request $request) {
// // //     return $request->user();
// // // });

Route::group(['middleware' => 'auth:api'], function () {
    //All secure URL's
    Route::apiResource("garbage", GarbageController::class);
    Route::post("logout", [UserController::class, 'logout']);

    //route made for requirements -> only purpose: get all the "garbage" of a certain day
    Route::get("index/{giorno}", [RequirementsController::class, 'index']);
});

Route::post("login", [UserController::class, 'login']);

Route::post("register", [UserController::class, 'register']);

Route::get('/error', function (Request $request) {
    return response('Unauthenticated.', 401);
})->name('accessError');
