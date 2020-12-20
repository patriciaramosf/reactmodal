import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
const FormApp = (props) => {
  const handleClose = (e) => {
    props.hideModal()
    alert(e.target.value);
  }
  const changeValue = (e) => {
    props.onInputchange()
    alert(e.target.value);
  }
  return (
    <div className="formApp">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>title</Form.Label>
          <Form.Control type="title" placeholder="enter title" name="title" onClick={changeValue} value = 'title' />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>text</Form.Label>
          <Form.Control type="text" placeholder="enter text" name="text" onClick={changeValue} value = 'title' />
        </Form.Group>
        <Button variant="primary" type="submit" onClick= { handleClose }>
          Submit
  </Button>
      </Form>
    </div>
  );
}
export default FormApp;