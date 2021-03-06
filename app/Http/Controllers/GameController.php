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
        return $games;
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
            'genre' => 'required|max:500',
            'price' => 'required',
            'image'=> 'required',
        ]);
        if($validator->fails()){
            return $validator->errors();
        }

        $game = Game::create(['title' => $request->title,
        'platform' => $request->platform,
        'classification' => $request->classification,
        'developer' => $request->developer,
        'releaseDay' => $request->releaseDay,
        'sinopsis' => $request->sinopsis,
        'genre' => $request->genre,
        'price' => $request->price,
    'image' => $request->image]);
        
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
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required|exists:games,id',
            'title' => 'required|unique:games|max:255',
            'platform' => 'required|max:20',
            'classification' => 'required|max:5',
            'developer' => 'required|max:255',
            'releaseDay' => 'required|max:255',
            'sinopsis' => 'required|max:500',
            'genre' => 'required|max:500',
            'price' => 'required',
            'image' => 'required',
        ]);
        if($validator->fails()){
            return $validator->errors();
        }
        $game = Game::find($request->id);
        $game -> title =$request ->title;
        $game -> platform =$request ->platform;
        $game -> classification =$request ->classification;
        $game -> developer =$request ->developer;
        $game -> releaseDay =$request ->releaseDay;
        $game -> sinopsis =$request ->sinopsis;
        $game -> genre =$request ->genre;
        $game -> price =$request ->price;
        $game -> image=$request->image;
        $game-> save();
        $game = Game::all();
        return $game;
    }
    public function haveId(){
        $game=Game::orderBy('id', 'desc')->first();
        return $game; 
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
