import FormApp from './form'
import Modal from 'react-bootstrap/Modal';
const ModalApp = (props) => {
    return (
      <Modal show={props.isModalOpen}>
        <FormApp onInputchange = { props.onInputchange } dataMenu = { props.dataMenu } hideModal = { props.hideModal }></FormApp>
       </Modal> 
      
    );
  }
  
export default ModalApp;