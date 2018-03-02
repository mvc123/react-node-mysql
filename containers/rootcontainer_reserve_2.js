import * as React from 'react';
import  { Route, Link } from  "react-router-dom";
import Families from "./families";
import Products from "./products";
import StartPage from "./startpage";


class RootContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: ["Banaan", "Appel", "Melk", "Kaas", "Choco", "Hesp", "Ei"],
      families: ["Ceustermans", "Van Casteren"],
      list: [{date: "01-02-2018", family: "Ceustermans", products: ["Banaan","Kaas", "Choco", "Hesp"] },
             {date: "04-02-2018", family: "Van Casteren", products: ["Banaan", "Melk", "Ei"] }]
    }
  }

// deze manier van werken zorgt er voor dat de twee links + de titel steeds bovenaan blijven, onderstaan de tekst "ik sta onder de twee routes"
// bij het klikken op de links verschijnt de overeenkomstige component tussen de links en de tekst ("ik sta ...").

  render(){
    return (
      <div>
        <div>Winkellijsten app</div>
        <div>
          <Link to="/families"><button>families</button></Link>
        </div>
        <div>
          <Link to="/products"><button>producten</button></Link>
        </div>
        <div>
          <Route exact path="/families" component={Families} />
        </div>
        <div>
          <Route exact path="/products" component={Products} />
        </div>
        <div>Ik sta onder de twee routes</div>
      </div>
    )
  }
}

export default RootContainer;
