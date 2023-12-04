/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Sub_Assignment_Row = ({ sub_Assignment }) => {
  const {
    _id, assignment_name, examinee, email,
    marks,status,
  } = sub_Assignment;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{assignment_name}</div>
            <div className="text-sm opacity-50">{examinee}</div>
            <div className="text-sm opacity-50">Marks: {marks}</div>
          </div>
        </div>
      </td>
      <th>
        {status === "confirmed" ? (
          <span className="font-bold text-lg text-[#22d315e1]">completed</span>
        ) : (
          <span className="">Pending</span>
        )}
      </th>
      <th className="text-center">
        <Link to={`/giveMark/${_id}`}>
          <button className="btn btn-outline">Give Mark</button>
        </Link>
      </th>
    </tr>
  );
};

export default Sub_Assignment_Row;
