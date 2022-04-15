import TradeForm from 'components/trade/TradeForm';
import { useParams } from 'react-router-dom';

function PageTradeForm() {
  const { trade_no } = useParams();
  return (
    <div>
      <div>
        <h1 className="pt-8 pb-5  text-xl font-bold">교환</h1>
      </div>

      <TradeForm trade_no={trade_no} />
    </div>
  );
}
export default PageTradeForm;
