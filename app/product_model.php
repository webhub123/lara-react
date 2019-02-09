<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use DB;

class product_model extends Model {
    

    public function retrieve_prod() {

        return DB::table('products')
                        ->get();

    }  


    public function get_product($id){

        return DB::table('products')
                 ->where('id',$id)
                 ->get();


    }

    public function delete_product($id) {


        
        try{
            DB::table('products')->where('id',$id)->delete();
            
            return array('status' => true);
        }catch(\Exception $e){
            return array('status' => false, 'message' => $e);
        }

    }


    public function update_product($update_list,$id) {


        try{


            DB::table('products')->where('id',$id)->update($update_list);

            return array('status' => true, 'message' => 'success');

        }catch(\Exception $e) {
       

            return array('status' => false, 'message' => $e);

        }

    }

    public function save_product($prod_name,$desc,$qty,$price) {


        try{

            $data = array(

                'prod_name' => $prod_name,
                'prod_desc' => $desc,
                'qty' => $qty,
                'price' => $price,
                'created_at' => date('Y-m-d h:i:s'),
            
            );

            DB::table('products')->insert($data);

            return array('status' => true, 'message' => 'success');

        }catch(\Exception $e) {
       

            return array('status' => false, 'message' => $e);

        }

    }



}
