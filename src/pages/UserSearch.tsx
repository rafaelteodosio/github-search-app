import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import UserResults from '../components/UserResults';
import { searchUsers } from '../services/githubApi';
import { Container, Spinner, Alert } from 'react-bootstrap';
import '../styles/SearchPage.css';

const UserSearch: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (query: string) => {
    setLoading(true);
    setError(null);
    try {
      const results = await searchUsers(query);
      setUsers(results);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="user-search-container py-5">
      <h1 className="text-center mb-4">GitHub User Search</h1>
      <p className="text-center text-muted mb-5">
        Search for GitHub users by entering a username in the search bar below.
      </p>
      <SearchBar onSearch={handleSearch} />
      {loading && (
        <div className="d-flex justify-content-center mt-4">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      {error && <Alert variant="danger" className="mt-4 text-center">{error}</Alert>}
      {!loading && users.length === 0 && (
        <div className="d-grid justify-content-center text-center mt-5">
          <div className="d-flex justify-content-center">
            <img src="/no-data.png" alt="No Results" className="no-results-img" />
          </div>
          <p className="text-muted mt-3">No users found. Try searching for another username.</p>
        </div>
      )}
      {!loading && users.length > 0 && <UserResults users={users} />}
    </Container>
  );
};

export default UserSearch;
