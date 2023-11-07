/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Sub_Assignment_Row = ({sub_Assignment}) => {
    const {assignment_name, examinee, assignment_pdf,
        email, marks, note, assignment_image,status} = sub_Assignment
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
        {
            status === 'confirm'? 
            <span className="font-bold text-lg text-[#22d315e1]">completed</span>
            :
            <span className="">Pending</span>
        }
      </th>
      <th className="text-center">
      <button className="btn btn-outline ">
            Give Mark
      </button>
      </th>
    </tr>
    );
};

export default Sub_Assignment_Row;