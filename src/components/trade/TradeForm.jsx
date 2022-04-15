import { useApiAxios } from 'base/api/base';
import LoadingIndicator from 'components/LoadingIndicator';
import useFieldValues from 'base/hooks/useFieldValues';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'base/context/AuthContext';

const INIT_FIELD_VALUES = {
  application_item: '',
};

function TradeForm({ trade_no }) {
  const [auth] = useAuth();
  const navigate = useNavigate();
  const [{ data: tradeData, loading, error }, Save] = useApiAxios(
    {
      url: `/trade/api/trade/${trade_no}/`,
      method: 'GET',
    },
    { manual: !trade_no },
  );

  const [
    {
      loading: saveLoading,
      error: saveError,
      errorMessages: saveErrorMessages,
    },
    saveRequest,
  ] = useApiAxios(
    {
      url: !trade_no ? `/trade/api/trade/` : `/trade/api/trade/${trade_no}/`,
      method: !trade_no ? 'POST' : 'PUT',
    },
    { manual: true },
  );

  const { fieldValues, handleFieldChange, setFieldValues } = useFieldValues(
    tradeData || INIT_FIELD_VALUES,
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(fieldValues).forEach(([name, value]) => {
      if (Array.isArray(value)) {
        const fileList = value;
        fileList.forEach((file) => formData.append(name, file));
      } else {
        formData.append(name, value);
      }
    });
    formData.append('user_id', auth.user_id);

    saveRequest({
      data: formData,
    }).then((response) => {
      const savedTrade = response.data;
      navigate(`/trade/${savedTrade.trade_no}/`);
    });
  };

  return (
    <div>
      {saveLoading && <LoadingIndicator>저장 중 ...</LoadingIndicator>}
      {saveError &&
        `저장 중 에러가 발생했습니다. (${saveError.response.status} ${saveError.response.statusText})`}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="my-1">- 교환 가능 품목 -</div>
        <div className="my-1">스타벅스 아메리카노(T)</div>
        <div className="my-1">문화상품권 (1000/5000/10000)</div>
        <div className="my-1">도서문화상품권 (1000/5000/10000)</div>
        <div className="my-1">GS25 상품권 (1000/5000/10000)</div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="위 항목중 작성"
            name="application_item"
            value={fieldValues.application_item}
            onChange={handleFieldChange}
          />
          {saveErrorMessages.application_item?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>
        <hr className=" border-t border-gray-300 p-1" />
        <div className=" flex justify-end p-1  text-sm align-middle">
          <button className="w-24 h-8 bg-gray-400 rounded-sm text-white transition duration-300 ease-in-out hover:bg-white hover:border hover:border-gray-400 hover:text-gray-600">
            저장
          </button>
          <button
            className="w-24 h-8 ml-2 bg-white rounded-sm text-gray-500 border border-gray-300 "
            onClick={() => navigate('/trade/')}
          >
            취소
          </button>
        </div>
      </form>
    </div>
  );
}
export default TradeForm;
