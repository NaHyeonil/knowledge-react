import { useAuth } from 'base/context/AuthContext';
import LoginForm from 'components/accounts/LoginForm';
import SignForm from 'components/accounts/SignupForm';
import PageHotdealDetail from 'pages/hotdeal/PageHotdealDetail';
import PageHotdealForm from 'pages/hotdeal/PageHotdealForm';
import PageHotdealList from 'pages/hotdeal/PageHotdealList';
import PageKnowledgeDetail from 'pages/knowledge/PageKnowledgeDetail';
import PageKnowledgeForm from 'pages/knowledge/PageKnowledgeForm';
import PageKnowledgeList from 'pages/knowledge/PageKnowledgeList';

import MainPage from 'pages/main/MainPage';
import Mypage from 'pages/mypage/Mypage';
import PageNoticeDetail from 'pages/notice/PageNoticeDetail';
import PageNoticeForm from 'pages/notice/PageNoticeForm';
import PageNoticeList from 'pages/notice/PageNoticeList';
import PagePointDetail from 'pages/point_management/PagePointDetail';
import PagePointForm from 'pages/point_management/PagePointForm';
import PagePointList from 'pages/point_management/PagePointList';
import PageTradeDetail from 'pages/trade/PageTradeDetail';
import PageTradeForm from 'pages/trade/PageTradeForm';
import PageTradeList from 'pages/trade/PageTradeList';
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
        <Route path="/mypage/" element={<Mypage />} />
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
        <Route path="/hotdeal/" element={<PageHotdealList />} />
        <Route path="/hotdeal/:hotdeal_no/" element={<PageHotdealDetail />} />
        <Route path="/hotdeal/new/" element={<PageHotdealForm />} />
        <Route
          path="/hotdeal/:hotdeal_no/edit/"
          element={<PageHotdealForm />}
        />
        <Route path="/point_management/" element={<PagePointList />} />
        <Route
          path="/point_management/:point_no/"
          element={<PagePointDetail />}
        />
        <Route path="/point_management/new/" element={<PagePointForm />} />
        <Route
          path="/point_management/:point_no/edit/"
          element={<PagePointForm />}
        />
        <Route path="/trade/" element={<PageTradeList />} />
        <Route path="/trade/:trade_no/" element={<PageTradeDetail />} />
        <Route path="/trade/new/" element={<PageTradeForm />} />
        <Route path="/trade/:trade_no/edit/" element={<PageTradeForm />} />
        <Route path="/notice/" element={<PageNoticeList />} />
        <Route path="/notice/:notice_no/" element={<PageNoticeDetail />} />
        <Route path="/notice/new/" element={<PageNoticeForm />} />
        <Route path="/notice/:notice_no/edit/" element={<PageNoticeForm />} />
      </Routes>
    </div>
  );
}

export default App;
