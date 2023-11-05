import axios from "axios";
import { useEffect, useState } from "react";
import A_Card from "./A_Card";

const Assignments = () => {
    const [assignments, setAssignments] = useState([])
    const [displayAssignments, setDisplayAssignments] = useState([]);
    const url = 'http://localhost:5000/assignments'

    useEffect(()=>{
        axios.get(url)
        .then(res =>{
          setAssignments(res.data)
          setDisplayAssignments(res.data)
        })
    },[])
    
    const handleAssignmentFilter = (level) => {
        console.log(level)
        if(level === 'All'){
            setDisplayAssignments(assignments);
            console.log("all")
        }
        else if(level === 'Easy'){
            const easy = assignments.filter(assignment => assignment.level === 'Easy');
            setDisplayAssignments(easy);
            console.log('easy')
        }
        else if(level === 'Medium'){
            const medium = assignments.filter(assignment => assignment.level === 'Medium');
            setDisplayAssignments(medium);
        }
        else if(level === 'Hard'){
            const hard = assignments.filter(assignment => assignment.level === 'Hard');
            setDisplayAssignments(hard);
        }
      }

    return (
        <div>
            <h2 className="mt-5 text-3xl md:text-5xl font-semibold text-center py-3 border-b-2">All Assignments</h2>
                <details className="dropdown">
        <summary className="m-1 btn">Level</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={()=> handleAssignmentFilter('All')}>
            <a>All</a>
          </li>
          <li onClick={()=> handleAssignmentFilter('Easy')}>
            <a>Easy</a>
          </li>
          <li onClick={()=> handleAssignmentFilter('Medium')}>
            <a>Medium</a>
          </li>
          <li onClick={()=> handleAssignmentFilter('Hard')}>
            <a>Hard</a>
          </li>
        </ul>
      </details>
            <div className="mt-4 grid grid-cols-1 gap-4">
                {
                    displayAssignments.map(assignment => <A_Card 
                    key={assignment._id} assignment={assignment}
                    ></A_Card>)
                }
            </div>
        </div>
    );
};

export default Assignments;