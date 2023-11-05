import axios from "axios";
import { useEffect, useState } from "react";
import A_Card from "./A_Card";

const Assignments = () => {
    const [assignments, setAssignments] = useState([])
    const url = 'http://localhost:5000/assignments'

    useEffect(()=>{
        axios.get(url)
        .then(res =>{
          setAssignments(res.data)
        })
    },[])
    return (
        <div>
            <h2 className="mt-5 text-3xl md:text-5xl font-semibold text-center py-3 border-b-2">All Assignments</h2>
            <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-semibold">Level</span>
                </label>
                <select name="level" className="select select-bordered w-full text-lg">
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4">
                {
                    assignments.map(assignment => <A_Card 
                    key={assignment._id} assignment={assignment}
                    ></A_Card>)
                }
            </div>
        </div>
    );
};

export default Assignments;