<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Ticket;

class TicketSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ticket = new Ticket();
        $ticket->game_id = 1;
        $ticket->date_purchase = "2022-02-03";
        $ticket->batch = 50;

        $ticket->save();

        $ticket2 = new Ticket();
        $ticket2->game_id = 2;
        $ticket2->date_purchase = "2022-02-03";
        $ticket2->batch = 50;

        $ticket2->save();

        $ticket3 = new Ticket();
        $ticket3->game_id = 3;
        $ticket3->date_purchase = "2022-02-03";
        $ticket3->batch = 50;

        $ticket3->save();

        $ticket4 = new Ticket();
        $ticket4->game_id = 4;
        $ticket4->date_purchase = "2022-02-03";
        $ticket4->batch = 50;

        $ticket4->save();

        $ticket5 = new Ticket();
        $ticket5->game_id = 5;
        $ticket5->date_purchase = "2022-02-03";
        $ticket5->batch = 50;

        $ticket5->save();

        $ticket6 = new Ticket();
        $ticket6->game_id = 6;
        $ticket6->date_purchase = "2022-02-03";
        $ticket6->batch = 50;

        $ticket6->save();

        $ticket7 = new Ticket();
        $ticket7->game_id = 7;
        $ticket7->date_purchase = "2022-02-03";
        $ticket7->batch = 50;

        $ticket7->save();

        $ticket8 = new Ticket();
        $ticket8->game_id = 8;
        $ticket8->date_purchase = "2022-02-03";
        $ticket8->batch = 50;

        $ticket8->save();

        $ticket9 = new Ticket();
        $ticket9->game_id = 9;
        $ticket9->date_purchase = "2022-02-03";
        $ticket9->batch = 50;

        $ticket9->save();

        $ticket10 = new Ticket();
        $ticket10->game_id = 10;
        $ticket10->date_purchase = "2022-02-03";
        $ticket10->batch = 50;

        $ticket10->save();

        $ticket11 = new Ticket();
        $ticket11->game_id = 11;
        $ticket11->date_purchase = "2022-02-03";
        $ticket11->batch = 50;

        $ticket11->save();

        $ticket12 = new Ticket();
        $ticket12->game_id = 12;
        $ticket12->date_purchase = "2022-02-03";
        $ticket12->batch = 50;

        $ticket12->save();
    }
}
