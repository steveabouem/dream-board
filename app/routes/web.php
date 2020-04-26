<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
*/

Route::get( '/{path?}', function(){
    return view( 'welcome' );
} )->where('path', '.*');

Route::post('users/register', 'App\Http\Controllers\Auth\RegisterController@register');
Route::post('users/login', 'App\Http\Controllers\User\UserController@login');