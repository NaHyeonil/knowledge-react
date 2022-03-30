import { Link } from 'react-router-dom';

function HotdealSummary({ hotdeal, index }) {
  return (
    <>
      <tbody className="border-b border-gray-150">
        <tr>
          <td className="p-4 pl-6">{index + 1}</td>
          <td>
            <Link to={`/knowledge/${hotdeal.hotdeal_no}/`}>
              {hotdeal.title}
            </Link>
          </td>
          <td className="text-right pr-5">{hotdeal?.user_id?.nickname}</td>
          <td className="text-right pr-5">{hotdeal.update_at.slice(0, 10)}</td>
        </tr>
      </tbody>
    </>
  );
}

export default HotdealSummary;
