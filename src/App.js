import { useAuth } from 'base/context/AuthContext';
import LoginForm from 'components/accounts/LoginForm';
import SignForm from 'components/accounts/SignupForm';
import PageKnowledgeDetail from 'pages/knowledge/PageKnowledgeDetail';
import PageKnowledgeForm from 'pages/knowledge/PageKnowledgeForm';
import PageKnowledgeList from 'pages/knowledge/PageKnowledgeList';

import MainPage from 'pages/main/MainPage';
import { Routes, Route } from 'react-router-dom';
import TopNav from 'TopNav';
import './App.css';

function App() {
  const [auth, _, login] = useAuth();

  return (
    <div className="App">
      <TopNav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login/" element={<LoginForm />} />
        <Route path="/signup/" element={<SignForm />} />
        <Route path="/knowledge/" element={<PageKnowledgeList />} />
        <Route
          path="/knowledge/:knowledge_no/"
          element={<PageKnowledgeDetail />}
        />
        <Route path="/knowledge/new/" element={<PageKnowledgeForm />} />
        <Route
          path="/knowledge/:knowledge_no/edit/"
          element={<PageKnowledgeForm />}
        />
      </Routes>
    </div>
  );
}

export default App;
