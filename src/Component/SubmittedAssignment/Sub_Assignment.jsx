
import axios from "axios";
import Sub_Assignment_Row from "./Sub_Assignment_row/Sub_Assignment_Row";
import { useEffect, useState } from "react";

const Sub_Assignment = () => {
  const [sub_Assignments, setSub_assignment] = useState([]);
  const url = 'https://assignment-11-server-side-category-0001.vercel.app/allSubmission'
  

  useEffect(()=>{
    axios.get(url, {withCredentials: true})
   .then(res =>{
     setSub_assignment(res.data)
   })
},[url])

  const remaining = sub_Assignments.filter(assignment=> assignment.status !== 'confirmed')
  //console.log(remaining)
  return (
    <div>
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
            {remaining.map((sub_Assignment) => (
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
