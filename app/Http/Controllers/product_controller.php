<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\product_model;


class product_controller extends Controller {
    
    private $product_model;


    public function __construct() {

        $this->product_model = new product_model();

    }


    public function get_product($id) {

        $res = $this->product_model->get_product($id);


        return response()->json($res);

    }

    public function retrieve_prod() {


        $result = $this->product_model->retrieve_prod();


        return response()->json($result);
    }


    public function save_product(Request $req) {

        $prod_name = $req->input('prod_name');
        $desc = $req->input('desc');
        $qty = $req->input('qty');
        $price = $req->input('price');

        $res = $this->product_model->save_product($prod_name,$desc,$qty,$price);

        return response()->json(array('status' => $res['status'], 'message' => $res['message']));
    }


    public function update_product(Request $req) {

        $update_list = $req->input('update_list');
        $id = $req->input('id');

        $res = $this->product_model->update_product($update_list,$id);

        return response()->json(array('status' => $res['status'], 'message' => $res['message']));
    }

    public function delete_product($id) {

        $res = $this->product_model->delete_product($id);


        return response()->json($res);

    }


}
