import { useAuth } from 'base/context/AuthContext';
import LoginForm from 'components/accounts/LoginForm';
import SignForm from 'components/accounts/SignupForm';
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
      </Routes>
    </div>
  );
}

export default App;
