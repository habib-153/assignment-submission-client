import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

import MyAssignment_row from "./MyAssignment_row";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const MyAssignment = () => {
    const {user} = useContext(AuthContext)
    const [myAssignments, setMyAssignments] = useState([])
    const axiosSecure = useAxiosSecure()
    const url = `/submittedAssignments?email=${user?.email}`

    useEffect(()=>{
        axiosSecure.get(url)
        .then(res => setMyAssignments(res.data))
        
    },[axiosSecure, url])

    return (
        <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Assignment Details</th>
              <th className="text-center">Status</th>
              <th className="text-center hidden md:block">Action</th>
            </tr>
          </thead>
          <tbody>
            {myAssignments.map((myAssignment) => (
              <MyAssignment_row
                key={myAssignment._id}
                myAssignment={myAssignment}
              ></MyAssignment_row>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MyAssignment;