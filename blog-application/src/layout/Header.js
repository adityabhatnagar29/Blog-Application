import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className="custom">
            <Container>
                <Navbar.Brand href='/' className='brand'>

                    <Link to="/" style={{  color: 'white'}}>
                        Blog-Express
                    </Link>


                </Navbar.Brand>

                <Navbar.Brand >
                    <Link to="/add-blog/" style={{ color: 'white'}}>
                        Add New Blog
                    </Link>
                </Navbar.Brand>

            </Container>
        </Navbar>
    );
};

export default Header;
