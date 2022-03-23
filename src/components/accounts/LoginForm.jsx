import { useApiAxios } from 'base/api/base';
import { useAuth } from 'base/context/AuthContext';
import useFieldValues from 'base/hooks/useFieldValues';
import { Link, useNavigate } from 'react-router-dom';

const INITIAL_FIELD_VALUES = { user_id: '', password: '' };

function LoginForm() {
  const [auth, _, login] = useAuth();
  const Navigate = useNavigate();
  const [{ loading, error }, requestToken] = useApiAxios(
    {
      url: '/user/api/token/',
      method: 'POST',
    },
    { manual: true },
  );

  const { fieldValues, handleFieldChange } =
    useFieldValues(INITIAL_FIELD_VALUES);

  const handleSubmit = (e) => {
    e.preventDefault();

    requestToken({ data: fieldValues }).then((response) => {
      const {
        access,
        refresh,
        user_id,
        username,
        nickname,
        is_staff,
        is_superuser,
      } = response.data;
      login({
        access,
        refresh,
        user_id,
        username,
        nickname,
        is_staff,
        is_superuser,
      });
      console.log('access :', access);
      console.log('refresh :', refresh);
      console.log('user_id :', user_id);
      console.log('username :', username);
      console.log('nickname :', nickname);
      console.log(' is_superuser :', is_superuser);
      Navigate('/');
    });
  };

  return (
    <div className="mt-16 flex justify-center">
      <div className="w-2/5">
        {error?.response?.status === 401 && (
          <div className="text-red-400">로그인에 실패했습니다.</div>
        )}

        <div className="">
          <div className=" bg-white shadow-md border border-gray-200 rounded-lg p-10 ">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <p className="text-center text-xl text-black-900 ">LOGIN</p>
              <div>
                <input
                  type="text"
                  name="user_id"
                  value={fieldValues.user_id}
                  className="p-1 bg-gray-100 w-full outline-none focus:border focus:border-gray-400 focus:border-dashed hover:transition-transform duration-300"
                  placeholder="아이디를 입력해주세요."
                  onChange={handleFieldChange}
                />
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  value={fieldValues.password}
                  placeholder="비밀번호를 입력해주세요"
                  className="p-1 bg-gray-100 w-full outline-none focus:border focus:border-gray-400 focus:border-dashed hover:transition-transform duration-300"
                  onChange={handleFieldChange}
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                로그인
              </button>
              <div>
                <Link
                  to="/signup/"
                  className="ml-2 h-10 text-violet-700 hover:underline dark:text-violet-500 "
                >
                  [ 회원가입 ]
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
