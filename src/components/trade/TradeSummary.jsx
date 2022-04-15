import { Link } from 'react-router-dom';

function TradeSummary({ trade, index }) {
  return (
    <>
      <tbody className="border-b border-gray-150">
        <tr>
          <td className="p-4 pl-6">{index + 1}</td>
          <td>
            <Link to={`/trade/${trade.trade_no}/`}>
              {trade.application_item}
            </Link>
          </td>
          <td className="text-right pr-5">{trade?.user_id?.nickname}</td>
        </tr>
      </tbody>
    </>
  );
}

export default TradeSummary;
