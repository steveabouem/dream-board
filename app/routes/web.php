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

Route::post('users/register', 'App\Http\Controllers\Auth\RegisterController@create');
Route::post('users/login', 'App\Http\Controllers\Auth\LoginController@requestLogin');