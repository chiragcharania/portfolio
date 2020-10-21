import React from 'react';
import './App.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Chirag Charania',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },

      ],
      home: {
        title: 'Aspire Greatness',
        subTitle: 'Software Developer',
        text: 'Check my projects and professional experience below'
      },
      about: {
        title: 'About Me'
      },
    }
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Chirag Charania</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle}
            text={this.state.home.text} />} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} />} />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
