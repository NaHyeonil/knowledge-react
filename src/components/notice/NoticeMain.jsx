import { useCallback, useEffect, useState } from 'react';
import { useApiAxios } from 'base/api/base';
import ReactPaginate from 'react-paginate';
import 'base/css/Pagination.css';
import NoticeSummary from './NoticeSummary';

function NoticeList({ itemsPerPage = 10 }) {
  const [query, setQuery] = useState();
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState();
  const [page, setPage] = useState(0);
  const [reload, setReload] = useState(false);
  const [category, setCategory] = useState();

  const [{ data, loading, error }, getNotice] = useApiAxios(
    {
      url: `/notice/api/notice/`,
      method: 'GET',
    },
    { manual: true },
  );

  const fetchNotice = useCallback(
    async (newPage, newQuery = query) => {
      const params = {
        page: newPage,
        query: newQuery,
        category: category === 'ALL' ? '' : category,
      };

      const { data } = await getNotice({ params });

      setPage(newPage);
      setPageCount(Math.ceil(data.count / itemsPerPage));
      setCurrentItems(data?.results);
    },
    [category],
  );

  useEffect(() => {
    fetchNotice(1);
  }, [category]);

  const handlePageClick = (event) => {
    fetchNotice(event.selected + 1);
  };

  const search = (e) => {
    if (e.key === 'Enter') {
      fetchNotice(1, query);
    }
  };

  const getQuery = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  return (
    <div>
      {loading && '로딩 중 ...'}
      {error && '로딩 중 에러가 발생했습니다.'}

      <table className="border-t-2  border-gray-150 w-full text-xs">
        {currentItems?.map((notice, index) => (
          <NoticeSummary notice={notice} index={index} key={notice.notice_no} />
        ))}
      </table>
    </div>
  );
}
export default NoticeList;
