class App extends React.Component {

  constructor(props) {
      super()
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.togglePurchased = this.togglePurchased.bind(this)

  }

  state = {
      products: products,
      item: '',
      brand: '',
      units: '',
      quantity: 0,
      isPurchased: false,
      listItems: []
  }

  addItemToCart = (object) => {
      this.setState({ listItems: [object, ...this.state.listItems] })
  }

  handleChange = (event) => {
      this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit = (event) => {
      event.preventDefault()
      const newItem = {
          item: this.state.item,
          brand: this.state.brand,
          units: this.state.units,
          quantity: this.state.quantity,
      }
      this.setState({
          products: [newItem, ...products],
          item: '',
          brand: 0,
          units: '',
          quantity: 0
      })
  }

  togglePurchased = () => {
      this.setState({ isPurchased: !this.state.isPurchased })
      console.log(this.state.isPurchased)
  }
  render() {
      return (
          <div>
              <h1 className='title' onClick={this.toggleItemsPurchased}> My Shopping List </h1>
              {!this.state.isPurchased ? <h2 className='title'>I Purchased it </h2> : <h2 className='title'>Haven't Purchased It</h2>}
              <form onSubmit={this.handleSubmit}>
                  <label className='list' htmlFor='item'>Item:</label>
                  <input type='text' value={this.state.item} onChange={this.handleChange} id='item' className='list' />
                  <br />
                  <label className='list' htmlFor='brand'>Brand:</label>
                  <input type='name' value={this.state.brand} onChange={this.handleChange} id='brand' className='list' />
                  <br />
                  <label className='list' htmlFor='units'>Units:</label>
                  <input type='size' value={this.state.units} onChange={this.handleChange} id='units' className='list' />
                  <br />
                  <label className='list' htmlFor='quantity'>Quantity:</label>
                  <input value={this.state.quantity} onChange={this.handleChange} id='quantity' className='list' />
                  <br />
                  <input type='submit' />
              </form>
              <div className='preview'>
                  <h3>See new items Here</h3>
                  <h3>{this.state.item}</h3>
                  <h4>{this.state.brand}</h4>
                  <h5>{this.state.units}</h5>
                  <h5>{this.state.quantity}</h5>
              </div>
              <div className="products">
                  <h3>React Groceries</h3>
                  <ul>
                      <li>
                          {this.state.products.map(product => {
                              return (
                                  <ListOfGroceries product={product} handleAdd={this.addItemToCart} />

                              )
                          }
                          )}
                      </li>
                  </ul>
              </div>
              <div className='bought'>
                  <h3> Purchased List </h3>
                  <ul>
                      {this.state.listItems.map(object => {
                          return (
                              <ItemsPurchased product={object} />
                          )
                      }
                      )}
                  </ul>
              </div>
          </div>
      )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)