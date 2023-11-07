import { useLoaderData } from "react-router-dom";
import Sub_Assignment_Row from "./Sub_Assignment_row/Sub_Assignment_Row";

const Sub_Assignment = () => {
  const sub_Assignments = useLoaderData();

  return (
    <div>
      <h2 className="text-center text-2xl">Your bookings: {sub_Assignments.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Assignment Details</th>
              <th>Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {sub_Assignments.map((sub_Assignment) => (
              <Sub_Assignment_Row
                key={sub_Assignment._id}
                sub_Assignment={sub_Assignment}
              ></Sub_Assignment_Row>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sub_Assignment;
