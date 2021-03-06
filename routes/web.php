<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

// Route for categorySave
Route::post('/categorySave', 'CategoryController@store')->name('category.store');

// Route for categoryList
Route::get('/categoryList', 'CategoryController@index')->name('category.index');

// Route for categoryEdit
Route::get('/categoryEditById/{id}', 'CategoryController@edit')->name('category.edit');

// Route for categoryUpdate
Route::post('/categoryUpdate/{id}', 'CategoryController@update')->name('category.update');

// Route for categoryDelete
Route::get('/categoryDelete/{id}', 'CategoryController@destroy')->name('category.destroy');
