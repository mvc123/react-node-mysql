import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Families from "./containers/families";
import Products from "./containers/products";
import StartPage from "./containers/startpage";


const render = Component => {
  ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={StartPage} />
                <Route exact path="/families" component={Families} />
                <Route exact path="/products" component={Products} />
            </Switch>
        </BrowserRouter>
      ,
        document.getElementById('app')
    );
}
render();
