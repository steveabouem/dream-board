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
Route::prefix('create')->group(function () {
    Route::post('commitments', 'App\Http\Controllers\Dashboard\CommitmentController@create');
    Route::post('categories', 'App\Http\Controllers\Dashboard\CommitmentController@create');
    Route::post('folders', 'App\Http\Controllers\Dashboard\CommitmentController@create');
});