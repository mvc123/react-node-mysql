import * as React from 'react';

class Families extends React.Component{
  constructor(props){
    debugger;
    super(props);
    this.state = props.data;
    this.updateFunc = props.updateFunc;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    var previousFamilies = this.state.families.concat(); // concat doesn't change the original array, returns new array.
    var newFamily = this.state.newFamily.replace();
    debugger;
    this.updateFunc(families, previousFamilies.push(newFamily));
    event.preventDefault();
  }

  handleChange(event){
      this.setState({
        newFamily: event.target.value
      })
  }

  render(){
    return(
      <div>
        <h1>Families</h1>
        <ul>
          { this.state.families.map(function(family, index){
              return <li key={index}>{family}</li>
            })
          }
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label>
            Voeg een familie toe:
            <input type="text" value={this.state.newFamily} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Families
