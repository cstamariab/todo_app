import React from 'react';
import Popup from '../layouts/Popup';
import { Modal , Icon ,Button ,Container} from 'semantic-ui-react';
class LoginPopup extends React.Component{
  constructor(){
    super();
    this.state = {
      header: "Login with facebook"
    }
  }
  onLogin = () => {
    this.props.hidePopup();
  };
  render(){
    return(
      <div>
        <Popup {...this.props} status={this.props.status} header={this.state.header} >
            <Modal.Description>
              <Container textAlign='center'>
                <Button color='facebook' onClick={this.onLogin }>
                 <Icon name='facebook' /> login with Facebook
               </Button>
              </Container>
            </Modal.Description>
        </Popup>
      </div>
    )
  }
}
export default LoginPopup;