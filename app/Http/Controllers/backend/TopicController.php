<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Models\Topic;
use Illuminate\Http\Request;

class TopicController extends Controller
{
    public function index()
    {
        $list=Topic::where('status','!=',0)
        ->orderBy('created_at','DESC')
        ->get();
        
        return view("backend.topic.index",compact('list'));
    }
}
