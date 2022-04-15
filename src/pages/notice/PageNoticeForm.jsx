import NoticeForm from 'components/notice/NoticeForm';
import { useParams } from 'react-router-dom';

function PageNoticeForm() {
  const { notice_no } = useParams();
  return (
    <div>
      <div>
        <h1 className="pt-8 pb-5  text-xl font-bold">공지사항</h1>
      </div>

      <NoticeForm notice_no={notice_no} />
    </div>
  );
}
export default PageNoticeForm;
