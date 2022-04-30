<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Game;

class GameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $game = new Game();
        $game->title = "Blasphemous";
        $game->platform = "XBOX ONE, PC";
        $game->classification = "M+17";
        $game->developer = "The Game Kitchen";
        $game->releaseDay = "2019-09-10";
        $game->sinopsis = "Una terrible maldición conocida como el Milagro ha caído sobre la tierra de Cvstodia y sus habitantes. Eres el Penitente, el único superviviente de la masacre de la hermandad del Lamento Mudo.";
        $game->genre = "Pixel, Metroidvania";
        $game->price = 299.00;
        $game->image = "https://cdn.cloudflare.steamstatic.com/steam/apps/774361/header.jpg?t=1643276814";

        $game->save();


        $game2 = new Game();
        $game2->title = "DARK SOULS: REMASTERED";
        $game2->platform = "PC, PS4, XBOXONE";
        $game2->classification = "M+17";
        $game2->developer = "FromSoftware, Bandai Namco";
        $game2->releaseDay = "2018-05-23";
        $game2->sinopsis = "Then, there was fire. Re-experience the critically acclaimed, genre-defining game that started it all. Beautifully remastered, return to Lordran in stunning high-definition detail running at 60fps.";
        $game2->genre = "Action";
        $game2->price = 769.00;
        $game2->image = "https://cdn.cloudflare.steamstatic.com/steam/apps/570940/header.jpg?t=1649298610";
        $game2->save();

        $game3 = new Game();
        $game3->title = "DARK SOULS II";
        $game3->platform = "PS4, XBOXONE, PC";
        $game3->classification = "T";
        $game3->developer = "FromSoftware, Inc";
        $game3->releaseDay = "2014-04-25";
        $game3->sinopsis = "DARK SOULS™ II is the highly anticipated sequel to the gruelling 2011 breakout hit Dark Souls. The unique old-school action RPG experience captivated imaginations of gamers worldwide with incredible challenge and intense emotional reward.";
        $game3->genre = "Action";
        $game3->price = 225.99;
        $game3->image = "https://cdn.cloudflare.steamstatic.com/steam/apps/236430/header.jpg?t=1588788015";
        $game3->save();

        $game4 = new Game();
        $game4->title = "DARK SOULS III";
        $game4->platform = "PS4, PC, XBOXONE";
        $game4->classification = "M+17";
        $game4->developer = "FromSoftware, Bandai Namco";
        $game4->releaseDay = "2016-04-11";
        $game4->sinopsis = "Dark Souls continues to push the boundaries with the latest, ambitious chapter in the critically-acclaimed and genre-defining series. Prepare yourself and Embrace The Darkness!";
        $game4->genre = "Action";
        $game4->price = 1099.00;
        $game4->image = "https://cdn.cloudflare.steamstatic.com/steam/apps/374320/header.jpg?t=1644436409";
        $game4->save();

        $game5 = new Game();
        $game5->title = "DARK SOULS II: Scholar of the First Sin";
        $game5->platform = "PS4, XBOXONE, PC";
        $game5->classification = "T";
        $game5->developer = "FromSoftware, Bandai Namco";
        $game5->releaseDay = "2015-04-01";
        $game5->sinopsis = "The definitive edition of DARK SOULS™ II. DARK SOULS™ II: Scholar of the First Sin includes all the DARK SOULS™ II content released to-date in one package and much more!";
        $game5->genre = "Action";
        $game5->price = 439.99;
        $game5->image = "https://cdn.cloudflare.steamstatic.com/steam/apps/335300/header.jpg?t=1644436414";
        $game5->save();

        $game6 = new Game();
        $game6->title = "ELDEN RING";
        $game6->platform = "PC, PS4, XBOXONE";
        $game6->classification = "M+17";
        $game6->developer = "FromSoftware, Bandai Namco";
        $game6->releaseDay = "2022-02-24";
        $game6->sinopsis = "Levántate, tiznado, y déjate guiar por la gracia para esgrimir el poder del Anillo de Elden y convertirte en un Señor de Elden en las Tierras Intermedias.";
        $game6->genre = "Action, RPG";
        $game6->price = 1200.00;
        $game6->image = "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg?t=1649774637";
        $game6->save();

        $game7 = new Game();
        $game7->title = "Tom Clancy's Splinter Cell";
        $game7->platform = "PC";
        $game7->classification = "T";
        $game7->developer = "Ubisoft";
        $game7->releaseDay = "2003-02-18";
        $game7->sinopsis = "Infiltrate terrorists' positions, acquire critical intelligence by any means necessary, execute with extreme prejudice, and exit without a trace! You are Sam Fisher, a highly trained secret operative of the NSA's secret arm: Third Echelon.";
        $game7->genre = "Action";
        $game7->price = 199.00;
        $game7->image = "https://cdn.cloudflare.steamstatic.com/steam/apps/13560/header.jpg?t=1447351280";
        $game7->save();

        $game8 = new Game();
        $game8->title = "Tom Clancy’s Splinter Cell Blacklist";
        $game8->platform = "PC";
        $game8->classification = "M+17";
        $game8->developer = "Ubisoft";
        $game8->releaseDay = "2013-08-20";
        $game8->sinopsis = "USA has a military presence in two-thirds of countries around the world, and some of them have had enough. A group of terrorists calling themselves The Engineers initiate a terror ultimatum called the Blacklist";
        $game8->genre = "Action";
        $game8->price = 599.00;
        $game8->image = "https://cdn.cloudflare.steamstatic.com/steam/apps/235600/header.jpg?t=1617126226";
        $game8->save();

        $game9 = new Game();
        $game9->title = "Tom Clancy's Splinter Cell Chaos Theory";
        $game9->platform = "PC";
        $game9->classification = "M+17";
        $game9->developer = "Ubisoft";
        $game9->releaseDay = "2005-03-29";
        $game9->sinopsis = "The year is 2008. Citywide blackouts ... stock exchange sabotage ... electronic hijacking of national defense systems ... this is information warfare.";
        $game9->genre = "Action";
        $game9->price = 199.00;
        $game9->image = "https://cdn.cloudflare.steamstatic.com/steam/apps/13570/header.jpg?t=1617126499";
        $game9->save();

        $game10 = new Game();
        $game10->title = "Tom Clancy's Splinter Cell Conviction";
        $game10->platform = "PC";
        $game10->classification = "M+17";
        $game10->developer = "Ubisoft";
        $game10->releaseDay = "2010-04-29";
        $game10->sinopsis = "An investigation into his daughter’s death unwittingly leads former agent Sam Fisher to discover he’s been betrayed by his prior agency, the Third Echelon.";
        $game10->genre = "Action";
        $game10->price = 399.00;
        $game10->image = "https://cdn.cloudflare.steamstatic.com/steam/apps/33229/header.jpg?t=1579096325";
        $game10->save();

        $game11 = new Game();
        $game11->title = "Little Nightmares";
        $game11->platform = "PS4, XBOXONE, PC";
        $game11->classification = "T";
        $game11->developer = "Bandai Namco";
        $game11->releaseDay = "2017-04-27";
        $game11->sinopsis = "Immerse yourself in Little Nightmares, a dark whimsical tale that will confront you with your childhood fears! Help Six escape The Maw";
        $game11->genre = "Adventure";
        $game11->price = 369.00;
        $game11->image = "https://cdn.cloudflare.steamstatic.com/steam/apps/424840/header.jpg?t=1650895425";
        $game11->save();

        $game12 = new Game();
        $game12->title = "Little Nightmares II";
        $game12->platform = "PC, PS4, XBOXONE";
        $game12->classification = "T";
        $game12->developer = "Bandai Namco";
        $game12->releaseDay = "2021-02-10";
        $game12->sinopsis = "Little Nightmares II is a suspense adventure game in which you play as Mono, a young boy trapped in a world that has been distorted by an evil transmission.";
        $game12->genre = "Adventure";
        $game12->price = 600.00;
        $game12->image = "https://cdn.cloudflare.steamstatic.com/steam/apps/860510/header_latam.jpg?t=1650897258";
        $game12->save();
    }
}
