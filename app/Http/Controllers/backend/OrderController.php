<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index()
    {
        $list=Order::where('status','!=',0)
        ->orderBy('created_at','DESC')
        ->get();
        
        return view("backend.order.index",compact('list'));
    }
}
