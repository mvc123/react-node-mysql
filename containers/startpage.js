import * as React from 'react';
import {Link} from "react-router-dom";

class StartPage extends React.Component{
  constructor(props){
    super(props);
    this.state = props.data;
  }

  render(){
    return(
      <div>
        <div>Winkellijsten app</div>
        <div>
          <Link to="/families"><button>families</button></Link>
          <Link to="/products"><button>producten</button></Link>
          <Link to="/lists"><button>lijsten</button></Link>
          <div>STATE:</div>
          <h3> Products </h3>
          <ul>
           {
             this.state.products.map(function(product, index){
               return <li key={index}>{product}</li>;
             })
           }
          </ul>
          <h3> Families </h3>
          <ul>
          {
            this.state.families.map(function(family,index){
              return <li key={index}>{family}</li>
            })
          }
          </ul>
          <h3> Lijsten </h3>
          <ul>
          {
            this.state.list.map(function(list, index){
              return <li key={index}>{list.date} / {list.family}
                <ul>
                  {
                    list.products.map(function(product, index){
                      return <li key={index}>{product}</li>
                    })
                  }
                </ul>
              </li>
            })
          }
          </ul>
        </div>
      </div>
    )
  }
}

export default StartPage
