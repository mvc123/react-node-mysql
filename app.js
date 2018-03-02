import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import RootContainer from "./containers/rootcontainer";

const render = Component => {
    ReactDOM.render(
      <div>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </div>,
        document.getElementById('app')
    );
}

render(RootContainer);
