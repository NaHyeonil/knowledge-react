import { Link } from 'react-router-dom';

function PointSummary({ point, index }) {
  return (
    <>
      <tbody className="border-b border-gray-150">
        <tr>
          <td className="p-4 pl-6">{index + 1}</td>
          <td>
            <Link to={`/knowledge/${point.point_no}/`}>{point.title}</Link>
          </td>
          <td className="text-right pr-5">{point?.user_id?.nickname}</td>
          <td className="text-right pr-5">{point.update_at.slice(0, 10)}</td>
        </tr>
      </tbody>
    </>
  );
}

export default PointSummary;
