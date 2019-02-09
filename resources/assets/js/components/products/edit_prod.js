import React, { Component } from 'react';

import axios from 'axios';

class Add_prod extends Component {

    constructor() {
        super();
        this.state = {

            prod_name : '',
            desc : '',
            qty : '',
            price : '',
            id : '',
        };

    }



    componentDidMount() {

        const id = this.props.match.params.id;

        document.title='Update Page';

        axios.get('/api/product/'+id)
        .then( (res) =>  {

          if(res.data.length === 0) {
            window.location.href = "/add_prod";
            return false;
          }
          this.setState({ 
            prod_name : res.data[0].prod_name,
            desc : res.data[0].prod_desc,
            qty : res.data[0].qty,
            price : res.data[0].price,
            id : res.data[0].id
          }); 

          
        })
        .catch( (err) => {
          console.log(err);
        });

    }


    update_prod () {

        const { prod_name, desc, qty, price } = this.refs;

        const update_list = { 'prod_name' : prod_name.value, 'prod_desc' : desc.value, 'qty' : qty.value, 'price' : price.value  };
        const data = { 'id' : this.state.id, update_list : update_list }; 


        axios.post('/api/products/update', data).
        then( (res) => {

            if(res.data.status === true) {
                alert('Successfully Updated.');
                window.location.href = '/';
            }else {
                console.log('error: '+res.data.message);
            }

        }).catch( (err) => {
            console.log(err);
        });

    }


    change_handler(evt){

        this.setState({
            [evt.name]: [evt.value],
        });
    }

    render() { 

        const { prod_name, desc, qty, price } = this.state;

 

        return (
            <div className="container col-sm-offset-4 col-sm-4">
                <h3>Edit Product</h3>
                <hr/>
                    <div className="form-group">
                        <label >Product Name:</label>
                       
                        <input type="text" className="form-control" value={prod_name} name="prod_name" ref="prod_name" onChange={e => this.change_handler(e.target)}    />
                    </div>
                   
                    <div className="form-group">
                        <label >Description:</label>
                    
                        <input type="text" className="form-control" value={desc} name="desc" ref="desc" onChange={e => this.change_handler(e.target)}   />
                    </div>

                    <div className="form-group">
                        <label >Qty:</label>
                     
                        <input type="text" className="form-control text-right" value={qty} name="qty" ref="qty" onChange={e => this.change_handler(e.target)}   />
                    </div>

                    <div className="form-group">
                        <label >Price:</label>
                     
                        <input type="text" className="form-control text-right" value={price} name="price" ref="price" onChange={e => this.change_handler(e.target)}   />
                    </div>
                    <button onClick={ () => this.update_prod() } className="btn btn-primary">Update</button>
            </div>
        );
    }
  }
  
  export default Add_prod;