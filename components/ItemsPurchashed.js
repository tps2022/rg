class ItemsPurchased extends React.Component {
    render() {
      return (
        <li>{this.props.product.item}  {this.props.product.quantity}</li>
      )
    }
  }