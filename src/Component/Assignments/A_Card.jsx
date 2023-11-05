/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const A_Card = ({ assignment }) => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
  const {
    _id,
    email,
    assignment_name,
    due_date,
    assignment_image,
    marks,
    level,
    description,
  } = assignment;

  const handleUpdate = id =>{
    if(user?.email == email){
        navigate(`/updateAssignment/${id}`)
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'You Can not Update it',
            showConfirmButton: true,
        })
    }
  }
  return (
    <div className="card p-4 flex flex-col md:flex-row items-center justify-between card-side bg-base-100 shadow-xl">
      <figure className="w-[300px] h-[200px] rounded">
        <img className="w-full h-full object-contain" src={assignment_image} alt="Movie" />
      </figure>
      <div className="card-body p-4 flex-1">
        <h2 className="card-title">{assignment_name}</h2>
        <p>{description}</p>
        <div className="flex">
          <p className='text-lg font-semibold text-[#3741c4]'>{level}</p>
          <p>Mark: <span className="font-bold">{marks}</span></p>
          <p className="font-semibold">Deadline: {due_date}</p>
        </div>
      </div>
      <div className="card-actions">
        <div className="flex items-center flex-row md:flex-col gap-4 md:space-y-4 mr-0 md:w-24">
          <button className="btn btn-outline btn-ghost w-full">View</button>
          {/* <Link to={`updateCoffee/${_id}`}> */}
          <button onClick={()=>handleUpdate(_id)} className="btn btn-outline btn-ghost w-full">Update</button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default A_Card;
