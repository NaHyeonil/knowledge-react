import PointDetail from 'components/point_managerment/PointDetail';
import { useParams } from 'react-router-dom';

function PagePointDetail() {
  const { point_no } = useParams();
  return (
    <div>
      <div>
        <h1 className="pt-8 pb-5  text-xl font-bold">포인트정산</h1>
      </div>

      <PointDetail point_no={point_no} />
    </div>
  );
}
export default PagePointDetail;
