import HotdealForm from 'components/hotdeal/HotdealForm';
import { useParams } from 'react-router-dom';

function PageHotdealForm() {
  const { hotdeal_no } = useParams();
  return (
    <div>
      <div>
        <h1 className="pt-8 pb-5  text-xl font-bold">핫딜게시판</h1>
      </div>

      <HotdealForm hotdeal_no={hotdeal_no} />
    </div>
  );
}
export default PageHotdealForm;
