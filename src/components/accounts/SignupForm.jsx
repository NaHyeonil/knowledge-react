import { useApiAxios } from 'base/api/base';
import useFieldValues from 'base/hooks/useFieldValues';
import { useNavigate } from 'react-router-dom';

const INIT_FILED_VALUES = {
  user_id: '',
  password: '',
  password2: '',
  username: '',
  nickname: '',
  phone_num: '',
  email: '',
};

function SignForm() {
  const Navigate = useNavigate();

  const { fieldValues, handleFieldChange } = useFieldValues(INIT_FILED_VALUES);

  const [{ loading, error, errorMessages }, get_signup] = useApiAxios(
    {
      url: '/user/api/user/',
      method: 'POST',
    },
    { manual: true },
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    get_signup({ data: fieldValues }).then((response) => {
      const {
        user_id,
        password,
        password2,
        username,
        email,
        nickname,
        phone_num,
      } = response.data;

      console.log('가입이 완료되었습니다.');
      Navigate('/login/');
    });
  };

  return (
    <div className="mt-16 flex justify-center">
      <div className="w-2/5">
        {error &&
          `가입에 실패했습니다. 다시 입력해주세요. (${error.response?.status} ${error.response?.statusText})`}

        <div className="">
          <div className=" bg-white shadow-md border border-gray-200 rounded-lg p-10 ">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <p className="text-center text-xl font-medium text-black-900 ">
                회원가입
              </p>
              <div>
                <input
                  type="text"
                  name="user_id"
                  value={fieldValues.user_id}
                  className="outline-none bg-gray-50 border border-gray-300 text-gray-900  rounded-lg block w-full p-2.5  "
                  onChange={handleFieldChange}
                  placeholder="아이디를 입력해주세요."
                />
                {errorMessages.user_id?.map((message, index) => (
                  <p key={index} className="text-xs text-red-400">
                    {message}
                  </p>
                ))}
              </div>

              <div>
                <input
                  className="outline-none bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 "
                  name="password"
                  value={fieldValues.password}
                  onChange={handleFieldChange}
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                />
                {errorMessages.password?.map((message, index) => (
                  <p key={index} className="text-xs text-red-400">
                    {message}
                  </p>
                ))}
              </div>
              <div>
                <input
                  className="outline-none bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                  name="password2"
                  value={fieldValues.password2}
                  onChange={handleFieldChange}
                  type="password"
                  placeholder="비밀번호를 한 번 더 입력해주세요."
                />
                {errorMessages.non_field_errors?.map((message, index) => (
                  <p key={index} className="text-xs text-red-400">
                    {message}
                  </p>
                ))}
              </div>
              <div>
                <input
                  className="outline-none bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                  name="username"
                  value={fieldValues.username}
                  onChange={handleFieldChange}
                  placeholder="이름을 입력해주세요."
                />
                {errorMessages.username?.map((message, index) => (
                  <p key={index} className="text-xs text-red-400">
                    {message}
                  </p>
                ))}
              </div>
              <div>
                <input
                  className="outline-none bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                  name="nickname"
                  value={fieldValues.nickname}
                  onChange={handleFieldChange}
                  placeholder="닉네임을 입력해주세요."
                />
                {errorMessages.nickname?.map((message, index) => (
                  <p key={index} className="text-xs text-red-400">
                    {message}
                  </p>
                ))}
              </div>
              <div>
                <input
                  className="outline-none bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                  name="phone_num"
                  value={fieldValues.phone_num}
                  onChange={handleFieldChange}
                  placeholder="휴대전화 번호를 입력해주세요. ex)010-1234-1234"
                />
                {errorMessages.phone_num?.map((message, index) => (
                  <p key={index} className="text-xs text-red-400">
                    {message}
                  </p>
                ))}
              </div>
              <div>
                <input
                  className="outline-none bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                  name="email"
                  value={fieldValues.email}
                  onChange={handleFieldChange}
                  placeholder="이메일을 입력해주세요. ex)test@naver.com"
                />
                {errorMessages.email?.map((message, index) => (
                  <p key={index} className="text-xs text-red-400">
                    {message}
                  </p>
                ))}
              </div>
              <div className="pt-5">
                <button
                  className=" w-full text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  onClick={handleSubmit}
                >
                  회원가입
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignForm;
