<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PassportAuthController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SaleController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\GameController;

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




Route::middleware('auth:api')->group(function () {
    Route::post('/ticket/create_ticket', [TicketController::class, 'store']);
    Route::post('/sale/create_sale', [SaleController::class, 'store']);
});
Route::post('/logout', [PassportAuthController::class, 'logout']);
Route::post('/create_student', [StudentController::class, 'store']);
Route::post('/user/create_user', [UserController::class, 'store']);

Route::post('/register', [PassportAuthController::class, 'register']);
Route::post('login', [PassportAuthController::class, 'login']);
Route::get('sales', [SaleController::class, 'index']);
Route::get('/saleDestroy', [SaleController::class, 'destroy']);
Route::get('ticket', [TicketController::class, 'index']);
Route::post('game',[GameController::class,'store']);
Route::post('/game/update',[GameController::class,'update']);
Route::get('user', [UserController::class, 'index']);
Route::post('user/update', [UserController::class, 'update']);
Route::get('/ticket/getBatch/{id}', [TicketController::class, 'getBatch']);
Route::get('ticket', [TicketController::class, 'index']);

Route::get('/game/haveId',[GameController::class,'haveId']);