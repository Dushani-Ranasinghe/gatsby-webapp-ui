import { Link } from "gatsby"
import logo from "../images/logo-designcode.svg"
import "./Header.css"
import StripeCheckout from "react-stripe-checkout"

import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props){
    super(props)

    this.state = {
      hasScrolled:false
    }
  }
  componentDidMount(){
    window.addEventListener('scroll',this.handleScroll)
  }

  handleScroll = (event)=>{
    const scrollTop = window.scrollY
    if(scrollTop > 50){
      this.setState({hasScrolled: true})
    }
    else{
      this.setState({hasScrolled:false})
    }
  }

  handlePurchase=(token)=>{
    const amount=5000
    const desciption="My awesome product"
    const bodyObject={
      tokenId:token.id,
      email:token.email,
      name: token.name,
      desciption,amount
    }
    fetch('http://localhost:9000/stripe-charge',{
      method:'POST',
      body:JSON.stringify(bodyObject)
    })
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
      <div className="HeaderGroup">
      <Link to="/">
        <img src={logo} width="30" alt="logo"/>
      </Link>
      <Link to="/courses">Courses</Link>
      <Link to="/downloads">Downloads</Link>
      <Link to="/workshops">Workshops</Link>
      <StripeCheckout amount={5000}
      token={this.handlePurchase}
      stripeKey={'pk_test_51MI9UEJKckaNVBaaI8fQ6jo0KyavsDBCMDvkOwoSF24cpM43imKHZg1gFSCiC35RxvaVKUcnLCLhar1BoyQPO12s009BLYZW9t'}>
      <button>Buy</button>
      </StripeCheckout>
      </div>
     </div>
    )
  }
}


