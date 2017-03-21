import React from 'react';
import { Modal } from 'semantic-ui-react';

class Popup extends React.Component{

	renderPopupContent(){
		return(
					<section>
						<Modal
							 open={this.props.status}
							 onClose={this.props.hidePopup}
							 size='small'>
							<Modal.Header>{this.props.header}</Modal.Header>
					    <Modal.Content>
					         {this.props.children}
					    </Modal.Content>
					  </Modal>

					</section>
		)
	}
	render(){
		return(
			<section>
				{
					this.props.status ? this.renderPopupContent() : ''
				}
			</section>
		)
	}
}
export  default Popup;