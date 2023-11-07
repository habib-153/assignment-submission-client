import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import MyAssignment_row from "./MyAssignment_row";

const MyAssignment = () => {
    const {user} = useContext(AuthContext)
    const [myAssignments, setMyAssignments] = useState([])
    const url = `http://localhost:5000/submittedAssignments?email=${user?.email}`

    useEffect(()=>{
        axios.get(url)
        .then(res =>{
          setMyAssignments(res.data)
        })
    },[url])

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