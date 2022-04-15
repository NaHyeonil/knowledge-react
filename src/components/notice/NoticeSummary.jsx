import { Link } from 'react-router-dom';

function NoticeSummary({ notice, index }) {
  return (
    <>
      <tbody className="border-b border-gray-150">
        <tr>
          <td className="p-4 pl-6">{index + 1}</td>
          <td>
            <Link to={`/notice/${notice.notice_no}/`}>{notice.title}</Link>
          </td>
          <td className="text-right pr-5">{notice?.user_id?.nickname}</td>
          <td className="text-right pr-5">{notice.update_at.slice(0, 10)}</td>
        </tr>
      </tbody>
    </>
  );
}

export default NoticeSummary;
