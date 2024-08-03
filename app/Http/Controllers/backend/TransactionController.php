<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function index()
    {
        $list=Transaction::where('status','!=',0)
        ->orderBy('created_at','DESC')
        ->get();
        
        return view("backend.transaction.index",compact('list'));
    }
    public function show(string $transaction_id)
    {
        $transaction = Transaction::where('transaction_id', $transaction_id)->first();
        if($transaction ==  null)
        {
            return redirect()->route('admin.transaction.index');
        }

        return view("backend.transaction.show",compact('transaction'));
    }
}
