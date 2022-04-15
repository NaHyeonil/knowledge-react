import { useApiAxios } from 'base/api/base';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import LoadingIndicator from 'components/LoadingIndicator';
import { useAuth } from 'base/context/AuthContext';

function NoticeDetail({ notice_no }) {
  const navigate = useNavigate();
  const [auth] = useAuth();

  const [{ data: notice, loading, error }, refetch] = useApiAxios(
    {
      url: `/notice/api/notice/${notice_no}/`,
      method: 'GET',
    },
    { manual: true },
  );

  const [{ loading: deleteLoading, error: deleteError }, deleteNotice] =
    useApiAxios(
      {
        url: `/notice/api/notice/${notice_no}/`,
        method: 'DELETE',
      },
      { manual: true },
    );

  const handleDelete = () => {
    if (window.confirm('삭제하시겠습니까?')) {
      deleteNotice().then(() => {
        navigate('/notice/');
      });
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div>
      {loading && <LoadingIndicator />}
      {deleteLoading && <LoadingIndicator>삭제 중 ...</LoadingIndicator>}
      {error &&
        `로딩 중 에러가 발생했습니다. (${error.response.status} ${error.response.statusText})`}
      {deleteError &&
        `삭제 요청 중 에러가 발생했습니다. (${deleteError.response.status} ${deleteError.response.statusText})`}
      {notice && (
        <>
          <div>
            <div className="grid grid-cols-6   border border-gray-300 ">
              <div className="bg-gray-200">
                <label className=" mt-4 flex justify-center ">제목</label>
              </div>
              <div className="col-span-3">
                <p className=" col-start-3 my-4 ml-4 mr-0 w-10/12">
                  {notice.title}
                </p>
              </div>
              <div className="bg-gray-200">
                <label className=" mt-4 flex justify-center ">작성자</label>
              </div>
              <div>
                <p className=" col-start-3 my-4 ml-4 mr-0  w-10/12">
                  {notice?.user_id?.nickname}
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-6 pl-8 py-6 max-h-full max-w-full">
            {notice.img1 && (
              <img
                src={notice.img1}
                alt={notice.title}
                className="max-w-3xl max-h-full"
              />
            )}
            {notice.img2 && (
              <img
                src={notice.img2}
                alt={notice.title}
                className="max-w-3xl max-h-full"
              />
            )}
            {notice.img3 && (
              <img
                src={notice.img3}
                alt={notice.title}
                className="max-w-3xl max-h-full"
              />
            )}
            {notice.img4 && (
              <img
                src={notice.img4}
                alt={notice.title}
                className="max-w-3xl max-h-full"
              />
            )}
            {notice.img5 && (
              <img
                src={notice.img5}
                alt={notice.title}
                className="max-w-3xl max-h-full"
              />
            )}
          </div>

          {notice.content.split(/[\r\n]/).map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </>
      )}
      <hr className="mt-10 mb-3" />
      <div className="flex justify-end">
        {auth.is_superuser && (
          <>
            <button
              disabled={deleteLoading}
              onClick={handleDelete}
              className="mr-2 w-24 h-8 bg-gray-400 rounded-sm text-white transition duration-300 ease-in-out hover:bg-white hover:border hover:border-gray-400 hover:text-gray-600"
            >
              삭제
            </button>

            <Link
              to={`/notice/${notice_no}/edit/`}
              type="button"
              className="w-24 h-8 bg-gray-400 rounded-sm text-white transition duration-300 ease-in-out hover:bg-white hover:border hover:border-gray-400 hover:text-gray-600"
            >
              <h1 className="text-center mt-1.5 text-sm">수정</h1>
            </Link>
          </>
        )}

        <div className="flex justify-end">
          <div className=" ml-2 pr-1 inline-block align-middle flex justify-end">
            <Link
              className="w-24 h-8 bg-gray-400 rounded-sm text-white transition duration-300 ease-in-out hover:bg-white hover:border hover:border-gray-400 hover:text-gray-600"
              type="button"
              to="/notice/"
            >
              <h1 className="text-center mt-1.5 text-sm">목록</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NoticeDetail;
