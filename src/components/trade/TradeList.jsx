import { useCallback, useEffect, useState } from 'react';
import { useApiAxios } from 'base/api/base';
import ReactPaginate from 'react-paginate';
import 'base/css/Pagination.css';
import TradeSummary from './TradeSummary';

function TradeList({ itemsPerPage = 10 }) {
  const [query, setQuery] = useState();
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState();
  const [page, setPage] = useState(0);
  const [reload, setReload] = useState(false);
  const [category, setCategory] = useState();

  const [{ data, loading, error }, getTrade] = useApiAxios(
    {
      url: `/trade/api/trade/`,
      method: 'GET',
    },
    { manual: true },
  );

  const fetchTrade = useCallback(
    async (newPage, newQuery = query) => {
      const params = {
        page: newPage,
        query: newQuery,
        category: category === 'ALL' ? '' : category,
      };

      const { data } = await getTrade({ params });

      setPage(newPage);
      setPageCount(Math.ceil(data.count / itemsPerPage));
      setCurrentItems(data?.results);
    },
    [category],
  );

  useEffect(() => {
    fetchTrade(1);
  }, [category]);

  const handlePageClick = (event) => {
    fetchTrade(event.selected + 1);
  };

  const search = (e) => {
    if (e.key === 'Enter') {
      fetchTrade(1, query);
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
            <td className="p-5 text-justify">품목</td>
            <td className="p-5 text-right">작성자</td>
          </tr>
        </thead>
        {currentItems?.map((trade, index) => (
          <TradeSummary trade={trade} index={index} key={trade.trade_no} />
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
export default TradeList;
