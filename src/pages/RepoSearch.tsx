import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import RepoResults from '../components/RepoResults';
import { searchRepos } from '../services/githubApi';
import { Container, Spinner, Alert } from 'react-bootstrap';
import '../styles/SearchPage.css';

const RepoSearch: React.FC = () => {
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (query: string) => {
    setLoading(true);
    setError(null);
    try {
      const results = await searchRepos(query);
      setRepos(results);
    } catch (e) {
      setError('An error occurred while fetching repositories. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="user-search-container py-5">
      <h1 className="text-center mb-4">GitHub Repository Search</h1>
      <p className="text-center text-muted mb-5">
        Search for GitHub repos by entering a repository in the search bar below.
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
      {!loading && repos.length === 0 && (
        <div className="d-grid justify-content-center text-center mt-5">
          <div className="d-flex justify-content-center">
            <img src="/no-data.png" alt="No Results" className="no-results-img" />
          </div>
          <p className="text-muted mt-3">No repos found. Try searching for another repository.</p>
        </div>
      )}
      {!loading && repos.length > 0 && <RepoResults repos={repos} />}
    </Container>
  );
};

export default RepoSearch;
