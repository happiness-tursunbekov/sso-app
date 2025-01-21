<?php

namespace App\Http\Controllers;

use App\Http\Resources\AuthUserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
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

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'phoneNumber' => ['The provided credentials are incorrect.'],
            ]);
        }

        return $user->createToken($request->deviceName)->plainTextToken;
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
