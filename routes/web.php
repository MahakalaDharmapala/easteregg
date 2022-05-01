<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\SaleController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});




Route::post('/create_student', [StudentController::class, 'store']);
Route::get('/student', [StudentController::class, 'index']);
Route::post('/student/show', [StudentController::class, 'show']);
Route::get('/create_token', [StudentController::class, 'create_token']);
Route::post('/student_delete', [StudentController::class, 'destroy']);
Route::post('/student_update', [StudentController::class, 'update']);

//Game CONTROLLER
Route::post('/game/create_game',[GameController::class,'store']);
Route::post('/game/update',[GameController::class,'update']);
Route::get('/game',[GameController::class,'index']);
Route::post('/game/show', [GameController::class, 'show']);
Route::post('/game/delete', [GameController::class, 'destroy']);

//USER CONTROLLER
Route::get('/user', [UserController::class, 'index']);//Regresa un cliente
Route::post('/user/create_user', [UserController::class, 'store']); //Guarda un nuevo cliente
Route::post('/user/show', [UserController::class, 'show']); //Encuentra a un cliente
Route::post('/user/delete', [UserController::class, 'destroy']); //Borra un cliente
Route::post('/user/update', [UserController::class, 'update']); //Actualiza a un cliente

//SALE CONTROLLER
Route::post('/sale/create_sale',[SaleController::class,'store']);
Route::post('/sale/update',[SaleController::class,'update']);
Route::get('/sale',[SaleController::class,'index']);
Route::post('/sale/show', [SaleController::class, 'show']);
Route::post('/sale/delete', [SaleController::class, 'destroy']);



//TICKET CONTROLLER

Route::get('/ticket', [TicketController::class, 'index']);
Route::post('/ticket/create_ticket', [TicketController::class, 'store']);
Route::post('/ticket/show', [TicketController::class, 'show']);
Route::post('/ticket/delete', [TicketController::class, 'destroy']);
Route::post('/ticket/update', [TicketController::class, 'update']);




//RUTAS DE LOS TOKEN Postman
Route::get('/user/create_token', [UserController::class, 'showToken']); //Crea un token
Route::get('/ticket/create_token', [TicketController::class, 'showToken']); //Crea un token
Route::get('/game/create_token', [GameController::class, 'showToken']); //Crea un token
Route::get('/sale/create_token', [SaleController::class, 'showToken']); //Crea un token


//Rotas para mostrarRoute::get('/RegisterForm', function () {
    Route::get('/RegisterForm', function () {
        return view('welcome');
    });
    Route::get('/SalesTable', function () {
        return view('welcome');
    });
    Route::get('/LogInScreen', function () {
        return view('welcome');
    });
    Route::get('/EditGame', function () {
        return view('welcome');
    });

    Route::get('/CatalogScreen', function () {
        return view('welcome');
    });

    Route::get('/AddGame', function () {
        return view('welcome');
    });