import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const CreateAssignments = () => {
    const {user} = useContext(AuthContext)
    //const email = user.email
  const handleCreateAssignment = (e) => {
    e.preventDefault();

    const email = user.email
    const form = e.target;
    const assignment_name = form.assignment_name.value;
    const due_date = form.due_date.value;
    const assignment_image = form.assignment_image.value;
    const marks = form.marks.value;
    const level = form.level.value;
    const description = form.description.value;

    const newAssignment = {
      email,
      assignment_name,
      due_date,
      assignment_image,
      marks,
      level,
      description,
    };
    
    console.log(newAssignment);

    fetch(
      "https://assignment-11-server-side-category-0001.vercel.app/assignments",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newAssignment),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Assignment Created successfully",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Close",
          });
        }
      });
  };
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content w-full">
          <form
            onSubmit={handleCreateAssignment}
            className="card card-body w-full shadow-2xl bg-base-100"
          >
            <h2 className="text-3xl p-4 border-l-4 border-[#37c44e] font-bold">
              Create A New Assignment
            </h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Assignment Title
                    </span>
                  </label>
                  <input
                    type="text"
                    name="assignment_name"
                    placeholder="Enter Assignment Title"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Due Date</span>
                  </label>
                  <input
                    type="date"
                    name="due_date"
                    placeholder="Enter Due Date"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Thumbnail/Image Url
                    </span>
                  </label>
                  <input
                    type="url"
                    name="assignment_image"
                    placeholder="Enter Image URL"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Marks</span>
                  </label>
                  <input
                    type="number"
                    name="marks"
                    placeholder="Enter Assignment Marks"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="mt-2 space-y-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Level</span>
                </label>
                <select name="level" className="select select-bordered w-full text-lg">
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Description</span>
                </label>
                <textarea
                  type="text"
                  name="description"
                  placeholder="Write description about the assignment"
                  className="input h-24 input-bordered"
                  required
                />
              </div>
              <button className="btn w-full bg-gradient-to-r from-[#37c44e] to-[#269136] hover:to-[#338540] text-[#FFF] ">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAssignments;
