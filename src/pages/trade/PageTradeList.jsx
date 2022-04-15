import { useAuth } from 'base/context/AuthContext';
import TradeList from 'components/trade/TradeList';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function PageTradeList() {
  const navigate = useNavigate();
  const [auth] = useAuth();
  const [category, setCategory] = useState();

  return (
    <div>
      <div>
        <h1 className="pt-8 pb-5  text-xl font-bold">교환</h1>
      </div>

      <TradeList />
      {auth.isLoggedIn && (
        <div className="flex justify-end">
          <button
            className="w-24 h-8 bg-gray-400 rounded-sm text-white transition duration-300 ease-in-out hover:bg-white hover:border hover:border-gray-400 hover:text-gray-600 "
            onClick={() => navigate('/trade/new/')}
          >
            글쓰기
          </button>
        </div>
      )}
    </div>
  );
}
export default PageTradeList;
