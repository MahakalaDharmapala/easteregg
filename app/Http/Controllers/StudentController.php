<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Student;
use App\Models\Program;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //$students = DB::table('students')->get();
        //return $students;

        /*
        foreach ($students as $student) {
            echo $student->name;
        }
        */
        
        $students = DB::table('students')->where('name', $request->name)->get();
        //$students = DB::table('students')->where('name', $request->name)->value('name');
        //$students = DB::table('students')->where('name', $request->name)->pluck('name');

        return $students;
    }

    public function create_token()
    {
        return csrf_token();
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
        $validator=Validator::make($request->all(),[
            "email"=> "required|unique:students|max:255",
            "last_name"=> "required",
        ]);
        if($validator->fails()){
            return $validator->errors();
        }
        
        $student = Student::create([
            /*
            'name' => 'Theodore',
            'last_name' => 'Gericault',
            'semester' => 9,
            'email' => 'theodore@gmail.com',
            'control'=> 18181551,
            */
            'control'=>$request->control,
            'name' => $request->name,
            'last_name' => $request->lastName,
            'semester'=> $request->semester,
            'email'=>$request->email,
            'program_id'=>$request->prog_id
        ]);
        echo $request->name;
        }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        //$program = Program::find(1)->student;
        //$student = Student::find(1)->program;
        $program = Student::find($request->student_id)->program;
        return $program;
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
        $student = Student:: find ($request->id);
        $student->name =$request->name;
        $student->last_name =$request->last_name;
        $student->semester =$request->semester;
        $student->email =$request->email;
        $student->control =$request->control;
        $student->program_id =$request->program_id;
        $student-> save();
        $student = Student:: all ();
        return $student;

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $student = Student::find($request->id);
        $student->delete();
        $student = Student::all();
        return $student;
    }
}