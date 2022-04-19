<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Game;
use Illuminate\Support\Facades\Validator;

class GameController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $games = Game::all();
        return $games->toJson();
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
            'title' => 'required|unique:games|max:255',
            'platform' => 'required|max:20',
            'classification' => 'required|max:5',
            'developer' => 'required|max:255',
            'releaseDay' => 'required|max:255',
            'sinopsis' => 'required|max:500',
        ]);
        if($validator->fails()){
            return $validator->errors();
        }

        $game = Game::create(['title' => $request->title,
        'platform' => $request->platform,
        'classification' => $request->classification,
        'developer' => $request->developer,
        'releaseDay' => $request->releaseDay,
        'sinopsis' => $request->sinopsis/*,
    'image' => $request->image*/]);
        
    }
    

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $game = Game::where('id',$request->id)->first();
        return $game->toJson();
    
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
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required|exists:games,id',
            'title' => 'required|unique:games|max:255',
            'plataform' => 'required|max:20',
            'classification' => 'required|max:5',
            'developer' => 'required|max:255',
            'releaseDay' => 'required|max:255',
            'sinopsis' => 'required|max:500',
        ]);
        if($validator->fails()){
            return $validator->errors();
        }


        Game::where('id',$request->id)
        ->update(['title'=> $request->title,
                          'plataform'=> $request->plataform,
                          'classification'=> $request->classification,
                          'developer'=> $request->developer,
                          'releaseDay'=> $request->releaseDay,
                          'sinopsis'=> $request->sinopsis/*,
                        'image'=> $request->image*/]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $game = Game::where('id',$request->id)->first();
        $game->delete();
    }

    public function showToken(){
        echo csrf_token();
    }
}
