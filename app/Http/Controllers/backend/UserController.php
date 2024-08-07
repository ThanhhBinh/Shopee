<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $list=User::where('status','!=',0)
        ->orderBy('created_at','DESC')
        ->get();
        
        return view("backend.user.index",compact('list'));
    }
    public function show(string $id)
    {
        $user = User::find($id);
        if($user ==  null)
        {
            return redirect()->route('admin.user.index');
        }

        return view("backend.user.show",compact('user'));
    }
    public function status (string $id)
    {
        $user = User::find($id);
        if ($user == null) {
            return redirect()->route('admin.user.index');
        }
        $user->status = ($user->status == 1) ? 2: 1;
        $user->updated_at = date('Y-m-d H:i:s');
        $user->save();
        return redirect()->route('admin.user.index');
    }
}
