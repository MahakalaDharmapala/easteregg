<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ticket;
use Illuminate\Support\Facades\Validator;

class TicketController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $ticket = Ticket::join('games','games.id', '=', 'tickets.game_id')
        ->select('tickets.id as id','games.title as Juego','games.sinopsis as Sinopsis','games.platform as plataforma','games.classification as clasificacion','games.developer as Desarrolladora','games.releaseDay as salida_de_juego',
        'games.genre as genero','games.price as precio','games.image as portada','tickets.batch as existencia')
        
        ->orderBy('existencia', 'asc')
       
        
        ->get();
        return $ticket;

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
            'game_id' => 'required',
            'date_purchase' => 'required|date',
            'batch' => 'required|int|max:50'
        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $ticket = Ticket::create([
            'game_id' => $request->game_id,
            'date_purchase' => $request->date_purchase,
            'batch' => $request->batch
        ]);

        echo $ticket;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $ticket = Ticket::find($request->id);
        return $ticket;
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
            'game_id' => 'required',
            'date_purchase' => 'required|date',
            'batch' => 'required|int|max:50'
        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $ticket = Ticket::find($request->id);
        $ticket -> game_id = $request->game_id;
        $ticket -> date_purchase = $request->date_purchase;
        $ticket -> batch = $request->batch;
        $ticket -> save();
        $ticket = Ticket::all();
        return $ticket;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $ticket = Ticket::find($request->id);
        $ticket -> delete();
        $ticket = Ticket::all();
        return $ticket;
    }
    public function getBatch(Request $request)
    {

        //$gameId = $request->id;
        $ticket = Ticket::join('games', 'games.id', '=', 'tickets.game_id')
            ->select(
                'tickets.id as ticket_id',
                'games.title as game_title',
                'tickets.batch as ticket_batch'
            )
            ->where('games.id', $request->id)
            ->orderBy('batch', 'asc')->first();

        return $ticket;
    }


    public function showToken(){
        echo csrf_token();
    }
}
