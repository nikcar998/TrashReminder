<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use  Illuminate\Database\Eloquent\Collection;

class RequirementsController extends Controller
{
    public function index($giorno)
    {
        $result = auth()->user()->UserGarbage()->where('giorno',$giorno)->get();
        if ($result) {
            return $result;
        } else {
            return response('Not found.', 404);
        }
    }
}
