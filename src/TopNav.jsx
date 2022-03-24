import { useAuth } from 'base/context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

function TopNav() {
  const navigate = useNavigate();
  const [auth, , , logout] = useAuth();
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="mt-3">
      <div>
        <MyLink className="content-center" to="/">
          하드웨어 정보
        </MyLink>
        <hr className=" borter-t border-gray-50" />
      </div>
      <div className="">
        <div>
          <div className="flex justify-end mt-2 md:flex-row md:mt-0 md:mx-1">
            {!auth.isLoggedIn && (
              <>
                <MyLink to="/login/">로그인</MyLink>

                <MyLink to="/login/">마이페이지</MyLink>
              </>
            )}

            {auth.isLoggedIn && !auth.is_superuser && (
              <>
                <button
                  className="pb-1 text-gray-500 text-xs flex flex-col mt-2 md:flex-row md:mt-0 md:mx-3
                          hover:text-blue-300 "
                  onClick={handleLogout}
                >
                  로그아웃
                </button>
                <MyLink to="/mypage/">마이페이지</MyLink>
              </>
            )}

            {auth.is_superuser && (
              <>
                <button
                  className="pb-1 text-gray-500 text-xs flex flex-col mt-2 md:flex-row md:mt-0 md:mx-3
                          hover:text-blue-300 "
                  onClick={handleLogout}
                >
                  로그아웃
                </button>

                <MyLink to="/admin/">관리자페이지</MyLink>
              </>
            )}
          </div>
        </div>
      </div>
      <div>
        <hr className=" borter-t border-gray-50" />
      </div>
      <div className="flex mt-10 mb-3">
        <div className="text-align: right-1 mr-20 ">
          <Link to="/knowledge/" className="font-bold text-gray-800">
            지식공유
          </Link>
        </div>
        <div className="text-align: right-1  mr-20 ">
          <Link to="/hotdeal/" className="font-bold text-gray-800">
            핫딜게시판
          </Link>
        </div>
        <div className="text-align: right-1 mr-20 ">
          <Link to="/notice/" className="font-bold text-gray-800">
            공지사항
          </Link>
        </div>
      </div>
      <div>
        <hr className=" borter-t border-gray-50" />
      </div>
    </div>
  );
}

function MyLink({ to, children }) {
  return (
    <Link
      to={to}
      className="flex-justify-between pb-1 text-gray-500 text-xs flex flex-col mt-2 md:flex-row md:mt-0 md:mx-3
      hover:text-blue-300 "
    >
      {children}
    </Link>
  );
}

export default TopNav;
