import * as React from 'react';

class Products extends React.Component{
  constructor(props){
    super(props);
    this.state = props.data;
  }
  render(){
    return(
      <div>
        <h1>Producten</h1>
        <ul>
          {
            this.state.products.map(function(product, index){
              return <li key={index}>{product}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default Products
