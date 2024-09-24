import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../styles/LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <Container fluid className="landing-page d-flex align-items-center justify-content-center min-vh-100">
      <Row className="text-center">
        <Col md={8} className="mx-auto">
          <Image src="https://zebrands.mx/wp-content/uploads/2021/07/WEB-ZEB-05-1-1024x291.png" alt="Zebrands Logo" className="logo mb-4" fluid />
          <h1 className="landing-title">Discover GitHub Users and Repositories Seamlessly</h1>
          <p className="landing-text mt-3">Our app allows you to quickly search for GitHub users and repositories in one place.</p>
          <Container className='mt-3 d-flex align-items-center justify-content-center'>
            <a href='/user-search' className="landing-button">Start Exploring →</a>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;