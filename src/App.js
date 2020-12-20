import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import MenuApp from './menu';
import ModalApp from './modal'
import dataMenu from './data/menuData'
class App extends React.Component {
  state = { 
    isModalOpen: false,
    dataMenu,
   };

  showModal = () => {
    this.setState({ isModalOpen: true });
  };

  hideModal = () => {
    this.setState({ isModalOpen: false });
  };
  onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
      <MenuApp dataMenu = { this.state.dataMenu }></MenuApp>
      <Button variant="primary" onClick={this.showModal}>
         Add new option to the menu
         </Button>
      <ModalApp onInputchange = { this.onInputchange } dataMenu = { this.state.dataMenu } isModalOpen = { this.state.isModalOpen } hideModal = { this.hideModal } ></ModalApp>
    </div>
    );
  }
}
export default App;
