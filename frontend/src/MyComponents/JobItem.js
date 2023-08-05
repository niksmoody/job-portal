import React from 'react';

export const JobItem = ({ job, onDelete }) => {

  let customCardStyle = {
    width: "350px",
    borderRadius: "20px"
  };

  let customHrStyle = {
    margin: 0,
    marginBottom: 10
  };

  let customBtnStyle = {
    width: "30%",
  }

  return (
    <div className="card mb-3" style={customCardStyle}>
      <div className="card-body d-flex flex-column" >
        <h4>{job.title}</h4>
        <p>{job.desc}</p>
        <hr style={customHrStyle} />
        <p><strong>Salary: </strong> {job.sal}/- per month</p>
        <p><strong>Time: </strong> {job.time}</p>
        <p><strong>Location: </strong> {job.loc}</p>
        <p><strong>Category: </strong> {job.category}</p>
        <p><strong>Mobile Number: </strong> {job.mobileNo}</p>
        <p><strong>Email: </strong> {job.email}</p>
        <p><strong>Posted By: </strong> {job.postedBy}</p>
        <button className="btn btn-sm btn-danger mt-auto" onClick={() => { onDelete(job) }} style={customBtnStyle}>Delete</button>
      </div>
    </div>
  );
};



