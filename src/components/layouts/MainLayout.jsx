import React, { Component } from 'react';
import { Container  } from 'semantic-ui-react';
import Navbar from '../Navbar';

class MainLayout extends Component {
  constructor(){
     super();
  }
  render() {
    return (
      <div>
        <Navbar />
        <Container>
            { this.props.children }
        </Container>
      </div>
    )
  }
}
export default MainLayout;