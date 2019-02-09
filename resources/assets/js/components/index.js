import React, { Component } from 'react';


class Home extends Component {

  
  constructor() {
    super();
    this.state = {
        list : []
    };
  }


  componentDidMount() {

    this.index();

  }

  index() {


    axios.post('api/list/') 
    .then(res => {
      this.setState({ list : res.data });
    })
    .catch(err => err)
  }


  delete_prod(id) {


    axios.delete('/api/products/delete/'+id)
    .then( (res) =>  {
    alert('Successfully Deleted.');
        window.location.reload();
    })
    .catch( (error) => {
        console.log(error);
    });
  }

  
  render() { 

    const { list } = this.state;


    return(
        <div className="container">
                <div className="row ">
                    <h3 className="col-sm-2">Product List </h3>
                    <div className="col-sm-4 col-sm-offset-5">
               
                    </div>
                    <a href="/add_prod" className="btn btn-primary btn-sm  btn-mrg-top" >Add New</a>
                </div>
                
                <hr/>
                <div className="row ">
                </div>
                <br/>

                <table className="table table-bordered">
                    <thead>
                        <tr>
                        
                            <th>Product Name</th>
                            <th>Description</th>
                            <th>Qty</th> 
                            <th>Price</th> 
                            <th className="text-center">ACTION</th>
                        </tr>   
                    </thead>
                    <tbody> 
                    { list.map(ls => (
                        <tr key={ls.id}>
                            <td>{ls.prod_name}</td>
                            <td>{ls.prod_desc}</td>
                            <td>{ls.qty}</td>
                            <td>{ls.price}</td>
                            <td className="text-center">
                            
                            <div className="btn-group">
                                <a className="btn btn-primary btn-sm" href={'edit/'+ls.id} >Edit</a>
                                <button className="btn btn-danger btn-sm" onClick={ () => this.delete_prod(ls.id) } >Delete</button>
                            </div>
                            </td>
                        </tr>
                    )) }
                    </tbody>
                </table>
            <hr />
        </div>
       
    );
      

  }
}



  
export default Home;