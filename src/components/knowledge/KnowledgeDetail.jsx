import { useApiAxios } from 'base/api/base';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import LoadingIndicator from 'components/LoadingIndicator';
import { useAuth } from 'base/context/AuthContext';

function KnowledgeDetail({ knowledge_no }) {
  const navigate = useNavigate();
  const [auth] = useAuth();

  const [{ data: knowledge, loading, error }, refetch] = useApiAxios(
    {
      url: `/knowledge/api/knowledge_share/${knowledge_no}/`,
      method: 'GET',
    },
    { manual: true },
  );

  const [{ loading: deleteLoading, error: deleteError }, deleteKnowledge] =
    useApiAxios(
      {
        url: `/knowledge/api/knowledge_share/${knowledge_no}/`,
        method: 'DELETE',
      },
      { manual: true },
    );

  const handleDelete = () => {
    if (window.confirm('삭제하시겠습니까?')) {
      deleteKnowledge().then(() => {
        navigate('/knowledge/');
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
      {knowledge && (
        <>
          <div>
            <div className="grid grid-cols-6   border border-gray-300 ">
              <div className="bg-gray-200">
                <label className=" mt-4 flex justify-center ">제목</label>
              </div>
              <div className="col-span-3">
                <p className=" col-start-3 my-4 ml-4 mr-0 w-10/12">
                  {knowledge.title}
                </p>
              </div>
              <div className="bg-gray-200">
                <label className=" mt-4 flex justify-center ">작성자</label>
              </div>
              <div>
                <p className=" col-start-3 my-4 ml-4 mr-0  w-10/12">
                  {knowledge?.user_id?.nickname}
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-6 pl-8 py-6 max-h-full max-w-full">
            {knowledge.img1 && (
              <img
                src={knowledge.img1}
                alt={knowledge.title}
                className="max-w-3xl max-h-full"
              />
            )}
            {knowledge.img2 && (
              <img
                src={knowledge.img2}
                alt={knowledge.title}
                className="max-w-3xl max-h-full"
              />
            )}
            {knowledge.img3 && (
              <img
                src={knowledge.img3}
                alt={knowledge.title}
                className="max-w-3xl max-h-full"
              />
            )}
            {knowledge.img4 && (
              <img
                src={knowledge.img4}
                alt={knowledge.title}
                className="max-w-3xl max-h-full"
              />
            )}
            {knowledge.img5 && (
              <img
                src={knowledge.img5}
                alt={knowledge.title}
                className="max-w-3xl max-h-full"
              />
            )}
          </div>

          {knowledge.content.split(/[\r\n]/).map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </>
      )}
      <hr className="mt-10 mb-3" />
      <div className="flex justify-end">
        {knowledge?.user_id?.user_id === auth.user_id && !auth.is_superuser && (
          <>
            <button
              disabled={deleteLoading}
              onClick={handleDelete}
              className="mr-2 w-24 h-8 bg-gray-400 rounded-sm text-white transition duration-300 ease-in-out hover:bg-white hover:border hover:border-gray-400 hover:text-gray-600"
            >
              삭제
            </button>

            <Link
              to={`/knowledge/${knowledge_no}/edit/`}
              type="button"
              className="w-24 h-8 bg-gray-400 rounded-sm text-white transition duration-300 ease-in-out hover:bg-white hover:border hover:border-gray-400 hover:text-gray-600"
            >
              <h1 className="text-center mt-1.5 text-sm">수정</h1>
            </Link>
          </>
        )}
        {auth.is_superuser && (
          <>
            <button
              disabled={deleteLoading}
              onClick={handleDelete}
              className="w-24 h-8 bg-gray-400 rounded-sm text-white transition duration-300 ease-in-out hover:bg-white hover:border hover:border-gray-400 hover:text-gray-600"
            >
              삭제
            </button>
          </>
        )}

        <div className="flex justify-end">
          <div className=" ml-2 pr-1 inline-block align-middle flex justify-end">
            <Link
              className="w-24 h-8 bg-gray-400 rounded-sm text-white transition duration-300 ease-in-out hover:bg-white hover:border hover:border-gray-400 hover:text-gray-600"
              type="button"
              to="/knowledge/"
            >
              <h1 className="text-center mt-1.5 text-sm">목록</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default KnowledgeDetail;
