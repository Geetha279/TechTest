import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';


class header extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Navbar bg="dark" variant="dark" className="headercomponetNav">
                    <Nav className="mr-auto">
                        <Link to="/app/generate" className="btn-link btnStyle">Generate</Link>
                        <Link to="/app/display" className="linkStyle">Display</Link>
                    </Nav>
                </Navbar>
            </React.Fragment>
        )
    }

}
export default header;