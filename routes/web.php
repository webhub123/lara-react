<?php

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

Route::get('/{url?}/{params?}', function () {
    return view('welcome');
});


Route::group(['prefix' => 'api'], function() {
    Route::post('/list', 'product_controller@retrieve_prod');
    Route::post('/products/save', 'product_controller@save_product');
    Route::post('/products/update/', 'product_controller@update_product');
    Route::delete('/products/delete/{id}', 'product_controller@delete_product');


    Route::get('/product/{id}', 'product_controller@get_product');

});