import React,{ Component } from 'react';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle  } from "reactstrap";
import { Navbar, NavbarBrand } from 'reactstrap';
import HomeComponent from './HomeComponent';
import LoginComponent from './LoginComponent';
import ErrrComponent from './ErrrComponent';
import Main from './MainComponent';


class App extends Component {

  render() {
    return (
      <div className="App">
   
      <Router>
        <Routes>
              <Route path='/' element={ <HomeComponent /> }/>
              <Route path='/login' element={ <LoginComponent /> }/>
              <Route path='*' element={ <ErrrComponent /> }/>
        </Routes>
      </Router>
        {/* <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar> */}


        {/* <Main /> */}
      
      </div>
    );
  }
}

export default App;