import axios from "axios";
import { useEffect, useState } from "react";
import A_Card from "./A_Card";
import './A.css'

const Assignments = () => {
    const [assignments, setAssignments] = useState([])
    const [displayAssignments, setDisplayAssignments] = useState([]);
    const [count, setCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const [itemsPerPage, setItemPerPage] = useState(5);

    const numberOfPages = Math.ceil(count/itemsPerPage)
    const pages = [...Array(numberOfPages).keys()]
    const url = `http://localhost:5000/assignments?page=${currentPage}&size=${itemsPerPage}`

    useEffect(()=>{
        fetch('http://localhost:5000/assignmentsCount')
        .then(res => res.json())
        .then(data=> setCount(data.count))
    },[])

    useEffect(()=>{
        axios.get(url)
        .then(res =>{
          setAssignments(res.data)
          setDisplayAssignments(res.data)
        })
    },[currentPage, itemsPerPage, url])
    
    const handleAssignmentFilter = (level) => {
        //console.log(level)
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
      const handleItemPerPage = e =>{
        const value = parseInt(e.target.value)
        console.log(value)
        setItemPerPage(value)
        setCurrentPage(0)
    }

    const handlePrev =()=>{
        if (currentPage>0){
            setCurrentPage(currentPage -1)
        }
    }

    const handleNext =()=>{
        if (currentPage < pages.length-1){
            setCurrentPage(currentPage+1)
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
            <div className='pagination'>
                <p>CurrentPage: {currentPage+1}</p>
                <button onClick={handlePrev}>Prev</button>
                {
                    pages.map(page =><button 
                        className={currentPage === page ? 'selected': undefined}
                        onClick={()=>setCurrentPage(page)}
                        key={page}
                        >{page + 1}</button>)
                }
                <button onClick={handleNext}>Next</button>
                <select className="bg-slate-300 p-2 rounded-lg" value={itemsPerPage} onChange={handleItemPerPage} name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </div>
        </div>
    );
};

export default Assignments;