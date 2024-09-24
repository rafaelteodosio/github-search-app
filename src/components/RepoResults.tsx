import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import '../styles/Results.css';

interface RepoResultsProps {
  repos: any[];
}

const RepoResults: React.FC<RepoResultsProps> = ({ repos }) => {
  return (
    <Row className="repo-results">
      {repos.map(repo => (
        <Col key={repo.id} md={4} sm={6} xs={12} className="mb-4">
          <Card className="repo-card shadow-sm">
            <Card.Body className="text-center">
              <Card.Title>{repo.name}</Card.Title>
              <Card.Text>{repo.description || 'No description available'}</Card.Text>
              <Button
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className='repo-card-button'
              >
                View Repository
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default RepoResults;
