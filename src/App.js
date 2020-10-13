import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {
  constructor(){
    super()
    this.state = {
      pizzas: [],
      pizzaToEdit: {
        topping: "",
        size: "",
        vegetarian: ""
      }
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(resp => resp.json())
    .then(pizzaArr => {
      this.setState({
        pizzas: pizzaArr
      })
    })
  }

  gatherFormInfo = (toppingArg, sizeArg, vegetarianArg) => {
    console.log('Hit the populateForm function')
    this.setState({
      pizzaToEdit: {
        topping: toppingArg,
        size: sizeArg,
        vegetarian: vegetarianArg
      }
    })
  } 

  render() {
    return (
      <div>
        <Header/>
        <PizzaForm pizzaToEdit={this.state.pizzaToEdit}/>
        <PizzaList pizzas={this.state.pizzas} gatherFormInfo={this.gatherFormInfo}/>
      </div>
    );
  }
}

export default App;
