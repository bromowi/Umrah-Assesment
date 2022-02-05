import React from 'react';
import {BrowserRouter as Routes,
    Switch,
    Route,} from 'react-router-dom';
import Sales from '../Pages/SalesPage';
import Home from '../Pages/Home';
import ListSales from '../Pages/ListSales';
import Customer from '../Pages/Customer';
import Item from '../Pages/Item';

export default function Rute () {
  return (
      <Routes>
          <Switch>
              <Route path='/' exact>
                  <Home />
              </Route>
              <Route path='/home' exact>
                  <Home />
              </Route>
              <Route path='/sales' exact>
                  <Sales />
              </Route>
              <Route path='/listsales' exact>
                  <ListSales />
              </Route>
              <Route path='/customer' exact>
                  <Customer />
              </Route>
              <Route path='/item' exact>
                  <Item />
              </Route>
              
          </Switch>
      </Routes>
  )


};
