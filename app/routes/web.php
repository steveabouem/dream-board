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

Route::post('users/register', 'App\Http\Controllers\User\UserController@register');
Route::post('users/login', 'App\Http\Controllers\User\UserController@login');
Auth::routes();