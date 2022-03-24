import { useAuth } from 'base/context/AuthContext';
import KnowledgeList from 'components/knowledge/KnowledgeList';
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
        <div className="grid grid-cols-2">
          <div className="box-border border-2 my-2 mr-2">
            <h1 className="pt-8  text-xl font-bold">지식공유</h1>
            <KnowledgeList />
          </div>
          <div className="grid grid-cols-6 grid-rows-2 box-border border-2 my-2 ml-2">
            <div className="pb-1 text-gray-500 text-xs flex flex-col mt-2 md:flex-row md:mt-0 md:mx-3">
              {`${auth.nickname}님`}
            </div>
            <button
              className="pb-1 text-gray-500 text-xs flex flex-col mt-2 md:flex-row md:mt-0 md:mx-3
                          hover:text-blue-300 "
              onClick={handleLogout}
            >
              로그아웃
            </button>
          </div>
          <div className="box-border border-2 my-2 mr-2">
            <h1 className="pt-8  text-xl font-bold">핫딜게시판</h1>
          </div>
          <div className="box-border border-2 my-2 ml-2">
            <h1 className="pt-8  text-xl font-bold">공지사항</h1>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="grid grid-cols-2">
          <div className="box-border border-2 my-2 mr-2">
            <h1 className="pt-8 text-xl font-bold">지식공유</h1>
            <KnowledgeList />
          </div>
          <div className="grid grid-cols-6 grid-rows-2 box-border border-2 my-2 ml-2">
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
            <h1 className="pt-8  text-xl font-bold">핫딜게시판</h1>
          </div>
          <div className="box-border border-2 my-2 ml-2">
            <h1 className="pt-8  text-xl font-bold">공지사항</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
