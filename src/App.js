import { useAuth } from 'base/context/AuthContext';
import LoginForm from 'components/accounts/LoginForm';
import SignForm from 'components/accounts/SignupForm';
import { Routes, Route } from 'react-router-dom';
import TopNav from 'TopNav';
import './App.css';

function App() {
  const [auth, _, login] = useAuth();

  return (
    <div className="App">
      <TopNav />
      <Routes>
        <Route path="/login/" element={<LoginForm />} />
        <Route path="/singup/" element={<SignForm />} />
      </Routes>
    </div>
  );
}

export default App;
