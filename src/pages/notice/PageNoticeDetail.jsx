import NoticeDetail from 'components/notice/NoticeDetail';
import { useParams } from 'react-router-dom';

function PageNoticeDetail() {
  const { notice_no } = useParams();
  return (
    <div>
      <div>
        <h1 className="pt-8 pb-5  text-xl font-bold">공지사항</h1>
      </div>

      <NoticeDetail notice_no={notice_no} />
    </div>
  );
}
export default PageNoticeDetail;
