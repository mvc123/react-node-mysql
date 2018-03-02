import * as React from 'react';
import  { Switch, Route } from  "react-router-dom";
import Families from "./families";
import Products from "./products";
import StartPage from "./startpage";
import Lists from "./lists";


class RootContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      test: "test string",
      products: ["Banaan", "Appel", "Melk", "Kaas", "Choco", "Hesp", "Ei"],
      families: ["Ceustermans", "Van Casteren"],
      list: [{date: "01-02-2018", family: "Ceustermans", products: ["Banaan","Kaas", "Choco", "Hesp"] },
             {date: "04-02-2018", family: "Van Casteren", products: ["Banaan", "Melk", "Ei"] }],
      newFamily: ""
    }
    this.updateState = this.updateState.bind(this);
  }

  updateState(key, value){
    this.setState({
      key: value
    })
  }


  render(){
    return (
      <div>
        <Switch>
            <Route exact path="/"
                   render= {
                    () => <StartPage data={this.state} updateFunc={this.updateState} />
                   }
            />
            <Route exact path="/families"
                   render= {
                     () => <Families data={this.state} updateFunc={this.updateState} />
                   }
            />
            <Route exact path="/products"
                   render={
                     () => <Products  data={this.state} updateFunc={this.updateState} />
                   }
            />
            <Route exact path="/lists"
                   render={
                     () => <Lists data={this.state} updateFunc={this.updateState} />
                   }
            />
        </Switch>
      </div>
    )
  }
}

export default RootContainer;
