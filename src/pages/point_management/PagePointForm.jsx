import KnowledgeForm from 'components/knowledge/KnowledgeForm';
import PointForm from 'components/point_managerment/PointForm';
import { useParams } from 'react-router-dom';

function PagePointForm() {
  const { point_no } = useParams();
  return (
    <div>
      <div>
        <h1 className="pt-8 pb-5  text-xl font-bold">포인트정산</h1>
      </div>

      <PointForm point_no={point_no} />
    </div>
  );
}
export default PagePointForm;
