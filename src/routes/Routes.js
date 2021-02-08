import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from '../components/Layout/Layout'
import Home from '../pages/Home'
import NotFound from '../pages/404'

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route component={ NotFound } />
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  }
}
