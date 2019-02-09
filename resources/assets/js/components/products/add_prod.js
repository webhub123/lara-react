import React, { Component } from 'react';

import axios from 'axios';

class Add_prod extends Component {

    constructor() {
        super();
        this.state = {

            prod_name : '',
        };

    }



    componentDidMount() {
        document.title = 'Add New Product';
    }


    add_prod() {


        const { prod_name, desc, qty, price } = this.refs;

        const data = { prod_name : prod_name.value,
            desc : desc.value,
            qty : qty.value,
            price : price.value };

        axios.post('api/products/save', data)
        .then( (res) =>  {
            
          if(res.data.status === false) {
            alert(res.data.message);
          }else if(res.data.status === true) {
            alert('Successfully Saved.');
            window.location.href = '/';
          }
        })
        .catch( (error) => {
          console.log(error);
        });

    }

    number(event) {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);
        if (/\+|-/.test(keyValue))
          event.preventDefault();
    }

    render() { 

        return (
            <div className="container col-sm-offset-4 col-sm-4">
                <h3>Add New Product</h3>
                <hr/>
                    <div className="form-group">
                        <label >Product Name:</label>
                       
                        <input type="text" className="form-control"  ref="prod_name"   />
                    </div>
                   
                    <div className="form-group">
                        <label >Description:</label>
                    
                        <input type="text" className="form-control"  ref="desc"  />
                    </div>

                    <div className="form-group">
                        <label >Qty:</label>
                     
                        <input type="number" className="form-control text-right"  ref="qty"  />
                    </div>

                    <div className="form-group">
                        <label >Price:</label>
                     
                        <input type="text" className="form-control text-right"  ref="price"  />
                    </div>
                    <button onClick={ () => this.add_prod() } className="btn btn-primary">Save</button>
            </div>
        );
    }
  }
  
  export default Add_prod;