import { useAuth } from 'base/context/AuthContext';
import PointList from 'components/point_managerment/PointList';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function PagePointList() {
  const navigate = useNavigate();
  const [auth] = useAuth();
  const [category, setCategory] = useState();

  return (
    <div>
      <div>
        <h1 className="pt-8 pb-5  text-xl font-bold">포인트정산</h1>
      </div>

      <PointList />
      {auth.isLoggedIn && (
        <div className="flex justify-end">
          <button
            className="w-24 h-8 bg-gray-400 rounded-sm text-white transition duration-300 ease-in-out hover:bg-white hover:border hover:border-gray-400 hover:text-gray-600 "
            onClick={() => navigate('/point_management/new/')}
          >
            글쓰기
          </button>
        </div>
      )}
    </div>
  );
}
export default PagePointList;
