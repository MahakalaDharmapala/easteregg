<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class PassportAuthController extends Controller
{
    public function register(Request $request)
    {
        echo $request->name;
        echo $request->password;
        $this->validate($request, [
            'name'=> 'required|min:4',
            'lastName'=>'required|string',
            'email'=> 'required|email',
            'password'=> 'required|min:8',
        ]);
        $user = User:: create([
            'name'=> $request->name,
            'lastName'=> $request->lastName,
            'email'=> $request->email,
            'password'=> bcrypt($request->password)
        ]);
        $token = $user->createToken('LaravelAuthApp')->accessToken;
        return response()->json(['token'=> $token], 200);

    }
    public function login(Request $request)
    {

        $data =[
            'email'=> $request -> email,
            'password' =>$request-> password
        ];
        if (auth()->attempt($data)){
            $token =auth()->user()->createToken('LaravelAuthApp')->accessToken;
            return response()->json(['token'=> $token],200);
        }else{
            return response()->json(['error'=>'Unauthorised'],401);
        }
    }

    public function logout()
    {
        $access_token = auth()->user()->token();

        // logout from only current device
        $tokenRepository = app(TokenRepository::class);
        $tokenRepository->revokeAccessToken($access_token->id);

        // use this method to logout from all devices
        // $refreshTokenRepository = app(RefreshTokenRepository::class);
        // $refreshTokenRepository->revokeRefreshTokensByAccessTokenId($$access_token->id);

        return response()->json([
            'success' => true,
            'message' => 'User logout successfully.'
        ], 200);
    }
}
