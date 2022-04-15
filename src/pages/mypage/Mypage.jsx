import { useNavigate } from 'react-router-dom';
import { useAuth } from 'base/context/AuthContext';
import Password from 'components/mypage/Password';
import Profile from 'components/mypage/Profile';
import Point from 'components/mypage/Point';
import Withdrawal from 'components/mypage/Withdrawal';
import Trade from 'components/mypage/Trade';
import Qna from 'components/mypage/Qna';

function Mypage() {
  const navigate = useNavigate();
  const [auth] = useAuth();

  if (auth.isLoggedIn) {
    return (
      <div>
        <h1 className="pt-8 pb-5  text-xl font-bold">마이페이지</h1>
        <div className="grid grid-cols-2">
          <div className="box-border border-2 my-2 mr-2">
            <Profile />
          </div>
          <div className="box-border border-2 my-2 mr-2">
            <Password />
          </div>
          <div className="box-border border-2 my-2 mr-2">
            <Point />
          </div>
          <div className="box-border border-2 my-2 mr-2">
            <Trade />
          </div>
          <div className="box-border border-2 my-2 mr-2">
            <Qna />
          </div>
          <div className="box-border border-2 my-2 mr-2">
            <Withdrawal />
          </div>
        </div>
      </div>
    );
  } else {
    return <div>로그인후 이용 가능합니다.</div>;
  }
}

export default Mypage;
