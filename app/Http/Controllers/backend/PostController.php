<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $list=Post::where('status','!=',0)
        ->orderBy('created_at','DESC')
        ->get();
        
        return view("backend.post.index",compact('list'));
    }
}
