import * as React from 'react';

class Lists extends React.Component {
  constructor(props){
    super(props)
    this.state = props.data;
  }
  render(){
    return(
      <div>
        <h1>Lijsten</h1>
        <ul>
          {
            this.state.list.map(function(list,index){
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
    )
  }
}

export default Lists;
