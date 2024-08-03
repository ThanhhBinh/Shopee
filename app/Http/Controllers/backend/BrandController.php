<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    public function index()
    {
        $list=Brand::where('status','!=',0)
        ->orderBy('created_at','DESC')
        ->get();
        
        return view("backend.brand.index",compact('list'));
    }
}
