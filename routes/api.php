<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post('auth/sign-in', [AuthController::class, 'signIn']);

Route::middleware('auth:api')->group(function () {
    Route::get('auth/user', [AuthController::class, 'user']);
    Route::post('auth/sign-out', [AuthController::class, 'signOut']);
});
