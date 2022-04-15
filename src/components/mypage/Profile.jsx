import { useNavigate } from 'react-router-dom';
import { useAuth } from 'base/context/AuthContext';

function Profile() {
  const navigate = useNavigate();
  const [auth] = useAuth();

  if (auth.isLoggedIn) {
    return (
      <div>
        <div className="grid">
          <div className="ml-5 mt-1">{`${auth.nickname}님`}</div>
          <div className="mr-5 mb-2">
            <button
              className="float-right text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-3"
              onClick={() => navigate('/')}
            >
              프로필 수정
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>로그인후 이용 가능합니다.</div>;
  }
}

export default Profile;
