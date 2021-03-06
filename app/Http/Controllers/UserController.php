<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        return $users;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'lastName' => 'required|max:255',
            'email' => 'required|unique:users|max:255',
            'password' => 'required',
           
        ]);
        if($validator->fails()){
            return $validator->errors();
        }

        $user = User::create(['name' => $request->name,
        'lastName' => $request->lastName,
        'email' => $request->email,
        'password' => bcrypt($request->password)]);
        $token = $user->createToken('LaravelAuthApp')->accessToken;
        return response()->json(['token'=> $token], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $users = User::where('name',$request->name)->first();
        return $users;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'lastName' => 'required|max:255',
            'email' => 'required|unique:users|max:255',
            'password' => 'required',
            
        ]);
        if($validator->fails()){
            return $validator->errors();
        }
        $user = User::find($request->id);
        $user ->name = $request->name;
        $user ->lastName = $request->lastName;
        $user ->email = $request->email;
        $user-> password=$request->password;
        $user -> save();
        $user = User::all();
        return $user;

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::where('name',$request->name)->first();
        $user->delete();
    }
    public function userSales(Request $request)
    {
        Show::find(1)->user;
        $user = User::find(1);
        return $user->sale;
    }
    public function gettingUserInfo(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        return $user;
    }

    public function showToken(){
        echo csrf_token();
    }
 
}
