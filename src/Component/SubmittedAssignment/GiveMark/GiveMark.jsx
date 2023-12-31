/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

// import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//     'pdfjs-dist/build/pdf.worker.min.js',
//     import.meta.url,
//   ).toString();
const GiveMark = () => {
  const assignment = useLoaderData();
  const { _id,
    assignment_name,
    examinee,
    assignment_pdf,
    email,
    marks,
    note,
    assignment_image,
    status,
  } = assignment;
  const [pdf]=useState(assignment_pdf)

  const handleConfirm = (e) =>{
    e.preventDefault();

    const form = e.target;
    const obtained_marks = form.obtained_marks.value;
    const feedback = form.feedback.value;
    const status = 'confirmed'

    const updatedSubmittedAssignment = {
        obtained_marks, feedback, status
    };

    fetch(`https://assignment-11-server-side-category-0001.vercel.app/submittedAssignments/${_id}`,{
        method: 'PATCH',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedSubmittedAssignment)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        if(data.modifiedCount > 0){
            Swal.fire({
                icon: 'success',
                title: 'Marks Updated',
                showConfirmButton: true,
            })
         }
    })
}
  return (
    <div className="mt-12 p-4">
      <h2 className="md:text-3xl text-lg p-4 border-l-4 border-[#37c44e] font-bold">
        Evaluate Assignment: {assignment_name}
      </h2>
      <p className="text-[18px] mt-6">Note: {note}</p>
      <p className="my-4">
        Submitted Answer pdf:{" "}
        <a className="font-semibold text-[#37c44e]" href={assignment_pdf}>
          Click here
        </a>
      </p>
      <div>
        {/* <Document file={pdf}>
        <Page />
      </Document> */}

        {/* <Document file={assignment_pdf} onLoadSuccess={onDocumentLoadSuccess} workerSrc="/pdf.worker.js">
          <Page pageNumber={pageNumber} />
        </Document> */}
        <iframe src={pdf} width='100%' height="480" allow="autoplay"></iframe>
      </div>
      <form onSubmit={handleConfirm} action="">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Obtained Marks</span>
          </label>
          <input
            type="number"
            name="obtained_marks"
            placeholder="Enter Mark"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Feedback</span>
          </label>
          <textarea
            type="text"
            name="feedback"
            placeholder="Feedback on student answer"
            className="input h-20 input-bordered"
            required
          />
        </div>
        <button className="mt-4 btn btn-outline bg-[#1fe23c]  btn-ghost hover:bg-[#15b32c]">
          Submit
        </button>
      </form>
    </div>
  );
};

export default GiveMark;
