<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\GameController;

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

Route::get('/hello', function () {
    return ('welcome');
});

Route::post('/create_student', [StudentController::class, 'store']);
Route::post('/student', [StudentController::class, 'index']);
Route::post('/student/show', [StudentController::class, 'show']);
Route::get('/create_token', [StudentController::class, 'create_token']);
Route::post('/student_delete', [StudentController::class, 'destroy']);
Route::post('/student_update', [StudentController::class, 'update']);
Route::post('register',[UserController::class,'store']);
Route::get('registerr',[UserController::class,'showToken']);
Route::post('registerGame',[GameController::class,'store']);