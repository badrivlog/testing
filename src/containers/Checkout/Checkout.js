import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import CheckoutSummery from '../../components/Order/CheckoutSummery/CheckoutSummery';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        totalPrice: 0
    };

    // componentDidMount(){
    //     console.log(this.props);
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     let price = 0;
    //     for (let param of query.entries()){
    //         if (param[0] === 'price') {
    //             price= param[1];
    //         } else {

    //             ingredients[param[0]] = +param[1];
    //         }
    //     }
    //     this.setState({ingredients: ingredients, totalPrice: price});
    // };

    checkoutCancelHandler = ()=> {
        this.props.history.goBack();
    };

    checkoutContinueHandler = ()=> {
        this.props.history.replace('/checkout/contact-data')
    }
    render () {
        return(
            <div>
                <CheckoutSummery ingredients={this.props.ings}
                checkoutCancelled={this.checkoutCancelHandler}
                ckeckoutContinued={this.checkoutContinueHandler} />
                <Route path={this.props.match.path + '/contact-data'} 
                component={ContactData} />
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients
    };
};


export default connect(mapStateToProps)(Checkout);