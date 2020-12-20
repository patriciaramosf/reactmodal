import Dropdown from 'react-bootstrap/Dropdown'
const MenuApp = (props) => {
    return (
        <div>
            <ul>
                { props.dataMenu.map((option, index) => {
                    return (
                        <div  className="menuApp" key={index}>
                            <Dropdown>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    { option.title }       
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>{ option.text } </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
}
export default MenuApp;
