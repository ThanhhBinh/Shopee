<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBannerRequest;
use App\Models\Banner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BannerController extends Controller
{
    public function index()
    {
        $list=Banner::where('status','!=',0)
        ->orderBy('created_at','DESC')
        ->get();
        
        return view("backend.banner.index",compact('list'));
    }
    public function create()
    {
        return view("backend.banner.create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBannerRequest $request)
    {
        $banner = new Banner();
        $banner->name = $request->name;
        $banner->description = $request->description;
        $banner->link = $request->link;
        if ($request->image){
            $exten = $request->file("image")->extension();
            if(in_array($exten,["png","jpg","gif","webp"]))
            {
                $filename = $banner->slug . "." . $exten;
                $request->image->move(public_path("images/banners"),$filename);
                $banner->image = $filename;
            }
        }
        $banner->status = $request->status;
        $banner->created_at = date('Y-m-d H:i:s');
        $banner->created_by = Auth::id() ?? 1;
        $banner->save();
        return redirect()->route('admin.banner.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $banner_id)
    {
        $banner = Banner::find($banner_id);
        if($banner ==  null)
        {
            return redirect()->route('admin.banner.index');
        }

        return view("backend.banner.show",compact('banner'));
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $banner_id)
    {
        $banner = Banner::find($banner_id);
        if($banner ==  null)
        {
            return redirect()->route('admin.banner.index');
        }
        $list=Banner::where('status','!=',0)
        ->orderBy('created_at','DESC')
        ->get();

       
        return view("backend.banner.edit",compact('list','banner'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $banner_id)
{
    // Lấy đối tượng Banner hiện tại từ cơ sở dữ liệu
    $banner = Banner::find($banner_id);
    if ($banner == null) {
        return redirect()->route('admin.banner.index');
    }

    // Cập nhật thông tin banner
    $banner->name = $request->name;
    $banner->description = $request->description;
    $banner->link = $request->link;
    if ($request->hasFile('image')) {
        $exten = $request->file('image')->extension();
        if (in_array($exten, ["png", "jpg", "gif", "webp"])) {
            $filename = $banner->slug . "." . $exten;
            $request->image->move(public_path("images/banners"), $filename);
            $banner->image = $filename;
        }
    }
    $banner->status = $request->status;
    $banner->updated_at = date('Y-m-d H:i:s');
    $banner->updated_by = Auth::id() ?? 1;
    $banner->save();
    
    return redirect()->route('admin.banner.index');
}


    /**
     * Remove the specified resource from storage.
     */
    public function delete(string $id)
    {
        $banner = Banner::find($id);
            if ($banner == null) {
                return redirect()->route('admin.banner.index');
            }
        $banner->status = 0;
        $banner->updated_at = date('Y-m-d H:i:s');
        $banner->updated_by = Auth::id() ?? 1;
        $banner->save();
        return redirect()->route('admin.banner.index');
    }
    public function trash()
    {
        $list=Banner::where('status','=',0)
        ->select("id","image","name","status")
        ->orderBy('created_at','DESC')
        ->get();
        return view("backend.banner.trash",compact('list'));
    }
    public function destroy (string $id)
    {
        $banner = Banner::find($id);
        if ($banner == null) {
        return redirect()->route('admin.banner.index');
        }
        $banner->delete();
        return redirect()->route('admin.banner.trash');
    }
    public function restore(string $id)
    {
        $banner = Banner::find($id);
        if ($banner == null) {
            return redirect()->route('admin.banner.index');
        }
    $banner->status = 2;
    $banner->updated_at = date('Y-m-d H:i:s');
    $banner->updated_by = Auth::id() ?? 1;
    $banner->save();
    return redirect()->route('admin.banner.index');
    }
    public function status (string $id)
    {
        $banner = Banner::find($id);
        if ($banner == null) {
            return redirect()->route('admin.banner.index');
        }
        $banner->status = ($banner->status == 1) ? 2: 1;
        $banner->updated_at = date('Y-m-d H:i:s');
        $banner->save();
        return redirect()->route('admin.banner.index');
    }
}
