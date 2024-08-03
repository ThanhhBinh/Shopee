<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Models\Shipping;
use Illuminate\Http\Request;

class ShippingController extends Controller
{
    public function index()
    {
        $list=Shipping::where('status','!=',0)
        ->orderBy('created_at','DESC')
        ->get();
        
        return view("backend.shipping.index",compact('list'));
    }
}
