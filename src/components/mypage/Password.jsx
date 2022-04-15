import { useNavigate } from 'react-router-dom';
import { useAuth } from 'base/context/AuthContext';

function Password() {
  const navigate = useNavigate();
  const [auth] = useAuth();

  if (auth.isLoggedIn) {
    return (
      <div>
        <div className="grid">
          <div className="ml-5 mt-1">
            비밀번호 변경 - 주기적으로 비밀번호를 변경하여 계정을 보호하세요.
          </div>
          <div className="mr-5 mb-2">
            <button
              className="float-right text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-3"
              onClick={() => navigate('/')}
            >
              비밀번호변경
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>로그인후 이용 가능합니다.</div>;
  }
}

export default Password;
