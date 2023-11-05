import { useLoaderData } from "react-router-dom";

const Details = () => {
  const assignment = useLoaderData();

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
  return (
    <div className="h-screen p-4 my-8  justify-between items-center mx-auto card-side">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <figure className="flex-1 rounded">
          <img className="w-full h-full" src={assignment_image} alt="Movie" />
        </figure>
        <div className="flex-1 card-body space-y-2 p-2">
          <h2 className="card-title">{assignment_name}</h2>
          <p className="font-semibold ">{level}</p>
          <div className="flex gap-2 font-semibold text-[14px]">
            <p className="">Type: {marks}</p>
            <p>{due_date}</p>
          </div>
          <p>{description}</p>
          <div className="w-full text-center">
            <button className="btn btn-outline bg-[#1fe23c]  btn-ghost hover:bg-[#15b32c]">Take Assignment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
