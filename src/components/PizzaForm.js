import React from "react"






class PizzaForm extends React.Component {

  constructor(){
    super()
    this.state = {
      topping: "",
      size: "",
      vegetarian: ""
    }
  }

  isVeggie = () => {
   return this.props.pizzaToEdit.vegetarian ? true : false
  }

  renderChange = (e) => {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render(){
    console.log(this.props.pizzaToEdit.topping)
    return(
      <form>
        <div className="form-row">
          <div className="col-5">
              <input type="text" className="form-control" placeholder="Pizza Topping" name='topping' value="" onChange={this.renderChange}/>
          </div>
          <div className="col">
            <select value={this.props.pizzaToEdit.size} name='size' className="form-control" onChange={this.renderChange}>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" type="radio" value="Vegetarian" checked={this.isVeggie()}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="Not Vegetarian" checked={!this.isVeggie()}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success">Submit</button>
          </div>
        </div>
      </form>
    )
  }
}

export default PizzaForm
