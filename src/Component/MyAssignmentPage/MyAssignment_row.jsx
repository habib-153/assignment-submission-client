/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const MyAssignment_row = ({ myAssignment }) => {
  const {
    obtained_marks,
    feedback,
    assignment_name,
    examinee,
    email,
    marks,
    status,
  } = myAssignment;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{assignment_name}</div>
            <div className="text-sm opacity-50">{examinee}</div>
            <div className="text-sm opacity-50">Marks: {marks}</div>
          </div>
        </div>
      </td>
      <th className="text-center">
        {status === "confirmed" ? (
            <div className="flex flex-col text-center">
                <span className="font-bold md:text-lg text-[#22d315e1]">
            Check Completed
          </span>
          <button
          onClick={() => document.getElementById("my_modal_1").showModal()}
          className="btn btn-outline md:hidden"
        >
          See Details
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-xl">Hello! Dear</h3>
            <div className="py-4 space-y-2">
              <p>Your Obtained Mark: {obtained_marks}</p>
              <p>Feedback: {feedback}</p>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
            </div>
          
        ) : (
          <span className="">Pending</span>
        )}
      </th>
      <th className="text-center hidden md:block">
        {
           obtained_marks ? (
            <>
            <button
          onClick={() => document.getElementById("my_modal_1").showModal()}
          className="btn btn-outline"
        >
          See Details
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-xl">Hello! Dear</h3>
            <div className="py-4 space-y-2">
              <p>Your Obtained Mark: {obtained_marks}</p>
              <p>Feedback: {feedback}</p>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog></>
          ) : (
            <span className="">Pending</span>
          )
        }
      </th>
    </tr>
  );
};

export default MyAssignment_row;


