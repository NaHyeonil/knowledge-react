import KnowledgeForm from 'components/knowledge/KnowledgeForm';
import { useParams } from 'react-router-dom';

function PageKnowledgeForm() {
  const { knowledge_no } = useParams();
  return (
    <div>
      <div>
        <h1 className="pt-8 pb-5  text-xl font-bold">지식공유</h1>
      </div>

      <KnowledgeForm knowledge_no={knowledge_no} />
    </div>
  );
}
export default PageKnowledgeForm;
