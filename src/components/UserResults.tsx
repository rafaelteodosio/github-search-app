import React from 'react';
import { Card, Button, Row, Col, Image } from 'react-bootstrap';
import '../styles/Results.css';

interface UserResultsProps {
  users: any[];
}

const UserResults: React.FC<UserResultsProps> = ({ users }) => (
  <Row className="user-results">
    {users.map(user => (
      <Col key={user.id} md={4} sm={6} xs={12} className="mb-4">
        <Card className="user-card shadow-sm">
          <Card.Body className="text-center">
            <Image
              src={user.avatar_url}
              alt={user.login}
              roundedCircle
              fluid
              className="mb-3 user-avatar"
            />
            <Card.Title>{user.login}</Card.Title>
            <Button
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className='user-card-button'
            >
              View Profile
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
);

export default UserResults;