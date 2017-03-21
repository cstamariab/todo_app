import React from 'react';
import {Link} from 'react-router';
import { Menu ,Button } from 'semantic-ui-react';
import LoginPopup from './LoginPopup';

class Navbar extends React.Component {
  constructor(){
    super();
    this.state = {
      activeItem: 'todos',
      user: false,
      popupStatus: false
    }
  }
  showPopup = () => {
    this.setState({popupStatus:true});
  }
  hidePopup = () =>{
    this.setState({popupStatus:false});
  };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render(){
    return(
      <section>
        <Menu size='huge'>
          <Menu.Item name='todos' active={this.state.activeItem === 'todos'} onClick={this.handleItemClick} >
            <Link to="/">Todos</Link>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              {
                this.state.user ?
                <div>
                    <p>User</p>
                </div>
                :
                <div>
                  <Button primary onClick={this.showPopup}>Login</Button>
                </div>
              }
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        {
          !this.state.user ?
          <LoginPopup status={this.state.popupStatus} hidePopup={this.hidePopup} />
          : ''
        }

      </section>
    )
  }
}
export default Navbar;