import KnowledgeDetail from 'components/knowledge/KnowledgeDetail';
import { useParams } from 'react-router-dom';

function PageKnowledgeDetail() {
  const { knowledge_no } = useParams();
  return (
    <div>
      <div>
        <h1 className="pt-8 pb-5  text-xl font-bold">지식공유</h1>
      </div>

      <KnowledgeDetail knowledge_no={knowledge_no} />
    </div>
  );
}
export default PageKnowledgeDetail;
