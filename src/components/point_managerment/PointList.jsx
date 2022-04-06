import { useCallback, useEffect, useState } from 'react';
import { useApiAxios } from 'base/api/base';
import ReactPaginate from 'react-paginate';
import 'base/css/Pagination.css';
import PointSummary from './PointSummary';

function PointList({ itemsPerPage = 10 }) {
  const [query, setQuery] = useState();
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState();
  const [page, setPage] = useState(0);
  const [reload, setReload] = useState(false);
  const [category, setCategory] = useState();

  const [{ data, loading, error }, getPointManagement] = useApiAxios(
    {
      url: `/point/api/point_management/`,
      method: 'GET',
    },
    { manual: true },
  );

  const fetchPoint = useCallback(async (newPage, newQuery = query) => {
    const params = {
      page: newPage,
      query: newQuery,
    };

    const { data } = await getPointManagement({ params });

    setPage(newPage);
    setPageCount(Math.ceil(data.count / itemsPerPage));
    setCurrentItems(data?.results);
  }, []);

  const handlePageClick = (event) => {
    fetchPoint(event.selected + 1);
  };

  const search = (e) => {
    if (e.key === 'Enter') {
      fetchPoint(1, query);
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
        <thead className="border-b font-semibold border-gray-150">
          <tr>
            <td className="p-5 text-justify">번호</td>
            <td className="p-5 text-justify">제목</td>
            <td className="p-5 text-right">작성자</td>
            <td className="p-5 text-right">
              <div className="mr-6">등록일</div>
            </td>
          </tr>
        </thead>
        {currentItems?.map((point, index) => (
          <PointSummary point={point} index={index} key={point.point_no} />
        ))}
      </table>
      <div className="text-right mb-2 flex justify-end">
        <input
          className="w-70 h-10 border-b border-gray-700 outline-none"
          type="search"
          name="search"
          placeholder="제목으로 검색"
          onChange={getQuery}
          onKeyPress={search}
        />
      </div>

      <ReactPaginate
        className="pagination"
        breakLabel="..."
        previousLabel="<"
        nextLabel=">"
        pageCount={pageCount}
        pageRangeDisplayed={itemsPerPage}
        onPageChange={handlePageClick}
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
export default PointList;
