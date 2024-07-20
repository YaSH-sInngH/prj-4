import React, { Component } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'

export class Layout extends Component {
  render() {
    return (
     <>
     <Header/>
     <Outlet/>
     <Footer/>
     </>
    )
  }
}

export default Layout