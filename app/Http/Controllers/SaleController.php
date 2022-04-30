<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sale;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class SaleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sale = Sale::join('users','users.id', '=', 'sales.user_id')
        ->join('tickets','tickets.id', '=', 'sales.ticket_id')
        ->join('games','games.id', '=', 'tickets.game_id')
        ->select('sales.id as id', 'tickets.id as ticket_id',  'tickets.date_purchase as Año de salida', 'users.name as Usuario','sales.quantity as copias','games.title as Juego', 'sales.mount as MontoTotal', 'sales.ticket_id', 'sales.created_at' )
        ->get();
        return $sale->toJson();

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
        $validator = Validator::make($request->all(),[
        'user_id'=>'required',
        'ticket_id'=>'required',
        'quantity'=>'required|int',
        'mount'=>'required|int'
    ]);

    if($validator->fails()){
        return $validator->errors();
    }

    $sale = Sale::create([
        'user_id'=>$request->user_id,
        'ticket_id'=>$request->ticket_id,
        'quantity'=>$request->quantity,
        'mount'=>$request->mount,
    ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $sale = Sale::where('id',$request->id)->first();
        return $sale->toJson();
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
        $validator = Validator::make($request->all(),[
            'user_id'=>'required',
            'ticket_id'=>'required',
            'quantity'=>'required|int',
            'mount'=>'required|int'
        ]);
    
        if($validator->fails()){
            return $validator->errors();
        }
    
            $sale = Sale::find($request->id);
            $sale->user_id=$request->user_id;
            $sale->ticket_id=$request->ticket_id;
            $sale->quantity=$request->quantity;
            $sale->mount=$request->mount;
            $sale -> save();
            $sale = Sale::all();
            return $sale;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $sale = Sale::where('id',$request->id)->first();
        $sale->delete();
    }
    
    public function showToken(){
        echo csrf_token();
    }
}
