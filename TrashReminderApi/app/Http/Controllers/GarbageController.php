<?php

namespace App\Http\Controllers;

use App\Models\Garbage;
use Illuminate\Http\Request;

class GarbageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Garbage::all();
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
        $garbage = new Garbage;
        $garbage->tipo = $request->tipo;
        $garbage->ora_inizio = $request->ora_inizio;
        $garbage->ora_fine = $request->ora_fine;
        $garbage->giorno = $request->giorno;
        $result = $garbage->save();
        if ($result) {
            return ["Result" => "Data has been saved"];
        } else {
            return ["Result" => "opertation failed"];
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
        return Garbage::find($id);
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
        $rules=array(
            "tipo"=>"required",
            "ora_inizio"=>"required|min:5|max:5",
            "ora_fine"=>"required|min:5|max:5",
            "giorno"=>"required|min:6|max:9",
        );
        $validator= Validator::make($request->all(), $rules);
        if($validator->fails())
        {
            return response()->json($validator->errors(),401);
        }
        else
        {
            $garbage = new Garbage;
            $garbage->name = $request->name;
            $garbage->description = $request->description;
            $result = $garbage->save();
            if($result)
            {
                return ["result"=>"data has been created"];
            }
            else
            {
                return ["result"=>"operation failed"];
            }
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
        $garbage= Garbage::find($id);
        $result=$garbage->delete();
        if($result)
        {
            return ["result"=>"data has been deleted"];
        }
        else
        {
            return ["result"=>"operation failed"];
        }
    }
}
