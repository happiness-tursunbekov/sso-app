<?php

namespace App\Http\Controllers;

use App\Http\Resources\AuthUserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    /**
     * @throws ValidationException
     */
    public function signIn(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
            'deviceName' => 'required',
            'rememberMe' => 'nullable|boolean'
        ]);

        $credentials = $request->only('email', 'password');

        if (!Auth::attempt($credentials)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        return Auth::user()->createToken($request->deviceName)->accessToken;
    }

    public function signUp(Request $request)
    {
        //
    }

    public function signOut(Request $request)
    {
        return $request->user()->tokens()->delete();
    }

    public function user(Request $request)
    {
        return new AuthUserResource($request->user());
    }
}
