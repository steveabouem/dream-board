<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\JsonResponse;
use App\User;
use DB;


class UserController extends Controller
{
    public function register(Request $request)
    {
        // This process basically replaces the RegisterController's create method
        $user = User::where('email', $request->email)->first();
        
        if (is_null($user)) {
           $user =  User::create([
                'name' => $request->userName,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
        } else {
            return response(['message' => __('auth.register.failed_existing')], 400);
        }
        return $user;
    }

    public function login(Request $request)
    {
        try {
            $user =User::where('name', $request->userName)->get();
            dd($user);
        }
        catch(\Exception $e) {
            return $e;
        }
    }
}
