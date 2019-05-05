import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class OrderReviewPage extends Component {
    constructor(props) {
        super(props)
        this.state = this.props.location.state
        console.log(this.props.location.state)
    }

    componentDidMount() {
        if(this.state.deliveryMethod === "Home delivery") this.setDeliveryFee(10)
        else if(this.state.deliveryMethod === "Nearest post office") this.setDeliveryFee(5)
    }

    setDeliveryFee = (amount) => {
        let orderPrice = (parseFloat(this.state.price, 10) + parseFloat(amount, 10)).toFixed(2)
        this.setState({deliveryFee: amount, total: orderPrice })
    }

    createPageContent() {
        let orderContainer =
            <div className="generic-container">
                <h1>Order review: </h1>
                <p>Please check that all your information is correct.</p>
                {this.createOrderTable()}
                {this.createConfirmationButton()}
            </div>
            return orderContainer
    }

    createOrderTable() {
        let orderDetails =
            <div className="order-details container">
                <h5>First name: {this.state.firstname}</h5>
                <h5>Last name: {this.state.lastname}</h5>
                <h5>Address: {this.state.address}</h5>
                <h5>City: {this.state.city}</h5>
                <h5>Email: {this.state.email}</h5>
                <h5>Phone number: {this.state.phonenumber}</h5>
                <h5>Delivery : {this.state.deliveryMethod}</h5>
                <h5>Payment: {this.state.paymentMethod}</h5>


                <h3>Delivery fee: {this.state.deliveryFee} €</h3>
                <h3>Products cost: {this.state.price} €</h3>
                <h3>Total: {this.state.total} €</h3>
            </div>
        return orderDetails
    }

    createConfirmationButton() {
        let confirmationButton =
            <Link to={{
                pathname: '/order-success'
                , state: this.state
            }}>
                <button>
                    Continue to purchase
                </button>
            </Link>
            return confirmationButton
    }
    render() {
        return (
            this.createPageContent()
        )
    }
}

export default OrderReviewPage