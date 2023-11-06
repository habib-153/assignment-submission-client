import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, assignment_name, marks);

    const form = e.target;
    const assignment_pdf = form.assignment_pdf.value;
    const note = form.note.value;
    const submittedAssignment = {
      assignment_name,
      assignment_pdf,
      email,
      marks,
      note,
      assignment_image,
    };

    console.log(submittedAssignment);
    fetch("http://localhost:5000/submittedAssignments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(submittedAssignment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Assignment Submitted successfully",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Close",
          });
        }
      });
  };

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
            <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
              className="btn btn-outline bg-[#1fe23c]  btn-ghost hover:bg-[#15b32c]"
            >
              Take Assignment
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <form onSubmit={handleSubmit}>
                  <h3 className="font-bold text-xl">Submit Your Assignment</h3>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">
                        Assignment pdf Link
                      </span>
                    </label>
                    <input
                      type="url"
                      name="assignment_pdf"
                      placeholder="Enter Assignment pdf Link"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold">Note</span>
                    </label>
                    <textarea
                      type="text"
                      name="note"
                      placeholder="Write a Quick Short note about the assignment if you have any."
                      className="input h-20 input-bordered"
                      required
                    />
                  </div>
                  <button className="mt-4 btn btn-outline bg-[#1fe23c]  btn-ghost hover:bg-[#15b32c]">
                    Submit
                  </button>
                </form>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
