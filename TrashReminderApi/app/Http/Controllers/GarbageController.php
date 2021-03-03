<?php

namespace App\Http\Controllers;

use App\Models\Garbage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class GarbageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return auth()->user()->UserGarbage();
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
        $rules = array(
            "tipo" => "required",
            "ora_inizio" => "required|min:5|max:5",
            "ora_fine" => "required|min:5|max:5",
            "giorno" => "required|min:6|max:9",
        );
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 401);
        } else {
            $garbage = new Garbage;
            $garbage->tipo = $request->tipo;
            $garbage->ora_inizio = $request->ora_inizio;
            $garbage->ora_fine = $request->ora_fine;
            $garbage->giorno = $request->giorno;
            $garbage->user_id = auth()->user()->id;
            $result = $garbage->save();
            if ($result) {
                return ["Result" => "Data has been saved"];
            } else {
                return ["Result" => "opertation failed"];
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Garbage  $garbage
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $result = auth()->user()->UserGarbage()->find($id);
        if($result)
        {
            return $result;
        }else{
            return response('Not found.', 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Garbage  $garbage
     * @return \Illuminate\Http\Response
     */
    public function edit(Garbage $garbage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Garbage  $garbage
     * @return \Illuminate\Http\Response
     */

    /////////////////////////////////////////////////
    public function update(Request $request, $id)
    {
        $garbage = Garbage::find($id);
        if (auth()->user()->id == $garbage->user_id) {
            $rules = array(
                "tipo" => "required",
                "ora_inizio" => "required|min:5|max:5",
                "ora_fine" => "required|min:5|max:5",
                "giorno" => "required|min:6|max:9",
            );
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                return response()->json($validator->errors(), 401);
            } else {
                $garbage->name = $request->name;
                $garbage->description = $request->description;
                $result = $garbage->save();
                if ($result) {
                    return ["result" => "data has been created"];
                } else {
                    return ["result" => "operation failed"];
                }
            }
        } else {
            return response('Unauthenticated.', 401);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Garbage  $garbage
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $garbage = Garbage::find($id);
        if (auth()->user()->id == $garbage->user_id) {
            $result = $garbage->delete();
            if ($result) {
                return ["result" => "data has been deleted"];
            } else {
                return ["result" => "operation failed"];
            }
        } else {
            return response('Unauthenticated.', 401);
        }
    }
}
