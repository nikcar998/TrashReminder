<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GarbageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('garbages')->insert([
            'tipo' => 'organico',
            'ora_inizio' => '10:00',
            'ora_fine' => '19:00',
            'giorno' => 'lunedì'
        ]);
        DB::table('garbages')->insert([
            'tipo' => 'plastica',
            'ora_inizio' => '18:00',
            'ora_fine' => '19:00',
            'giorno' => 'lunedì'
        ]);
        DB::table('garbages')->insert([
            'tipo' => 'organico',
            'ora_inizio' => '17:00',
            'ora_fine' => '19:00',
            'giorno' => 'mercoledì'
        ]);
        DB::table('garbages')->insert([
            'tipo' => 'indifferenziato',
            'ora_inizio' => '18:00',
            'ora_fine' => '21:00',
            'giorno' => 'mercoledì'
        ]);
        DB::table('garbages')->insert([
            'tipo' => 'carta',
            'ora_inizio' => '10:00',
            'ora_fine' => '19:00',
            'giorno' => 'venerdì'
        ]);
        DB::table('garbages')->insert([
            'tipo' => 'vetro',
            'ora_inizio' => '10:00',
            'ora_fine' => '13:00',
            'giorno' => 'venerdì'
        ]);
        DB::table('garbages')->insert([
            'tipo' => 'organico',
            'ora_inizio' => '10:00',
            'ora_fine' => '19:00',
            'giorno' => 'venerdì'
        ]);
    }
}
