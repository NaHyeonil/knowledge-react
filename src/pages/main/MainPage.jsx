import { useAuth } from 'base/context/AuthContext';
import HotdealList from 'components/hotdeal/HotdealList';
import HotdealMain from 'components/hotdeal/HotdealMain';
import KnowledgeMain from 'components/knowledge/KnowledgeMain';
import NoticeList from 'components/notice/NoticeList';
import NoticeMain from 'components/notice/NoticeMain';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function MainPage() {
  const navigate = useNavigate();
  const [auth, , , logout] = useAuth();
  const [currentItems, setCurrentItems] = useState(null);
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  if (auth.isLoggedIn) {
    return (
      <div>
        <div className="grid grid-cols-8">
          <div className="mr-3">
            <img classname="col-span-1" src="image/123.png" alt="main" />
          </div>
          <div className="box-border border-2 my-2 mr-2 col-start-2 col-span-3">
            <Link
              className="ml-3 pt-8 pb-5  text-xl font-bold"
              to={`/knowledge/`}
            >
              지식공유
            </Link>
            <KnowledgeMain />
          </div>
          <div className="col-start-5 col-span-3 grid grid-cols-6 grid-rows-6 box-border border-2 my-2 ml-2">
            <div className="box-border border-2 my-2 mr-2 col-start-1 col-span-6 mx-2">
              <div className="pb-1 text-gray-500 text-s ml-3 mt-2">
                {`${auth.nickname}님`}
              </div>
              <button
                className="pb-1 text-gray-500 text-s float-right mr-3 mb-2 hover:text-blue-300"
                onClick={handleLogout}
              >
                로그아웃
              </button>
            </div>
            <div>
              <img src="image/456.png" alt="main" />
            </div>
            <div>
              <img src="image/456.png" alt="main" />
            </div>
            <div>
              <img src="image/456.png" alt="main" />
            </div>
            <div>
              <img src="image/456.png" alt="main" />
            </div>
            <div>
              <img src="image/456.png" alt="main" />
            </div>
            <div>
              <img src="image/456.png" alt="main" />
            </div>
            <div>
              <img src="image/456.png" alt="main" />
            </div>
            <div>
              <img src="image/456.png" alt="main" />
            </div>
            <div>
              <img src="image/456.png" alt="main" />
            </div>
            <div>
              <img src="image/456.png" alt="main" />
            </div>
            <div>
              <img src="image/456.png" alt="main" />
            </div>
            <div>
              <img src="image/456.png" alt="main" />
            </div>
            <div>
              <img src="image/456.png" alt="main" />
            </div>
            <div>
              <img src="image/456.png" alt="main" />
            </div>
            <div>
              <img src="image/456.png" alt="main" />
            </div>
            <div>
              <img src="image/456.png" alt="main" />
            </div>
            <div>
              <img src="image/456.png" alt="main" />
            </div>
            <div>
              <img src="image/456.png" alt="main" />
            </div>
          </div>
          <div className="ml-3">
            <img classname="col-span-1" src="image/123.png" alt="main" />
          </div>
          <div className="box-border border-2 my-2 mr-2 col-start-2 col-span-3">
            <Link
              className="ml-3 pt-8 pb-5  text-xl font-bold"
              to={`/hotdeal/`}
            >
              핫딜게시판
            </Link>
            <HotdealMain />
          </div>
          <div className="box-border border-2 my-2 ml-2 col-start-5 col-span-3">
            <Link className="ml-3 pt-8 pb-5  text-xl font-bold" to={`/notice/`}>
              공지사항
            </Link>
            <NoticeMain />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="grid grid-cols-2">
          <div className="box-border border-2 my-2 mr-2">
            <Link className="pt-8 pb-5  text-xl font-bold" to={`/knowledge/`}>
              지식공유
            </Link>
            <KnowledgeMain />
          </div>
          <div className="grid grid-cols-6 grid-rows-6 box-border border-2 my-2 ml-2">
            <button
              className="col-start-2 col-span-4 text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-3"
              onClick={() => navigate('/login/')}
            >
              로그인
            </button>
            <div className="col-end-7 col-span-2 mt-2">
              <Link to="/signup/" className="text-gray-800">
                회원가입
              </Link>
            </div>
          </div>
          <div className="box-border border-2 my-2 mr-2">
            <Link className="pt-8 pb-5  text-xl font-bold" to={`/hotdeal/`}>
              핫딜게시판
            </Link>
            <HotdealMain />
          </div>
          <div className="box-border border-2 my-2 ml-2">
            <Link className="pt-8 pb-5  text-xl font-bold" to={`/notice/`}>
              공지사항
            </Link>
            <NoticeMain />
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
