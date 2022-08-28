class ListOfGroceries extends React.Component {

    state = {
        isPurchased: false
    }

    toggleCart = () => {
        this.setState({ isPurchased: !this.state.isPurchased })
    }

    render() {
        return (
            <li onClick={() => this.props.handleAdd(this.props.product)}>{this.props.product.item}  {this.props.product.quantity} {this.state.isPurchased ? <span> react groceries list! </span> : ''}</li>
        )
    }
}