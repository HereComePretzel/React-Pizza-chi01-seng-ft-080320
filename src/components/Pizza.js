import React from "react"



class Pizza extends React.Component {
  
  renderVeggie = () => {
    return this.props.pizza.vegetarian ? this.renderGreen() : this.renderRed()
  }
  
  renderGreen = () => {
   return <td style={{color: "green"}}>Vegetarian</td>
  }

  renderRed = () => {
    return <td style={{color: "red"}}>Not Vegetarian</td>
  }

  handleClick = () => {
    this.props.gatherFormInfo(this.props.pizza.topping, this.props.pizza.size, this.props.pizza.vegetarian)
  }
  
  render(){
    return(
      <tr>
        <td>{this.props.pizza.topping}</td>
        <td>{this.props.pizza.size}</td>
        {this.renderVeggie()}
        <td><button type="button" className="btn btn-primary" onClick={this.handleClick}>Edit Pizza</button></td>
      </tr>
    )
  }
}

export default Pizza
