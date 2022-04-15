import { useCallback, useEffect, useState } from 'react';
import { useApiAxios } from 'base/api/base';
import ReactPaginate from 'react-paginate';
import KnowledgeSummary from './KnowledgeSummary';
import 'base/css/Pagination.css';
import KnowledgeCategory from './KnowledgeCategory';

function KnowledgeMain({ itemsPerPage = 10 }) {
  const [query, setQuery] = useState();
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState();
  const [page, setPage] = useState(0);
  const [reload, setReload] = useState(false);
  const [category, setCategory] = useState();

  const [{ data, loading, error }, getKnowledge] = useApiAxios(
    {
      url: `/knowledge/api/knowledge_share/`,
      method: 'GET',
    },
    { manual: true },
  );

  const fetchKnowledge = useCallback(
    async (newPage, newQuery = query) => {
      const params = {
        page: newPage,
        query: newQuery,
        category: category === 'ALL' ? '' : category,
      };

      const { data } = await getKnowledge({ params });

      setPage(newPage);
      setPageCount(Math.ceil(data.count / itemsPerPage));
      setCurrentItems(data?.results);
    },
    [category],
  );

  const handleViewClick = (event) => {
    fetchKnowledge(event.view_cnt + 1);
  };

  useEffect(() => {
    fetchKnowledge(1);
  }, [category]);

  const handlePageClick = (event) => {
    fetchKnowledge(event.selected + 1);
  };

  const search = (e) => {
    if (e.key === 'Enter') {
      fetchKnowledge(1, query);
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
        {currentItems?.map((knowledge, index) => (
          <KnowledgeSummary
            knowledge={knowledge}
            index={index}
            key={knowledge.knowledge_no}
          />
        ))}
      </table>
    </div>
  );
}
export default KnowledgeMain;
