import React, { useState } from 'react';

export const AddJob = ({ addJob }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [sal, setSal] = useState("");
    const [time, setTime] = useState("");
    const [loc, setLoc] = useState("");
    const [category, setCategory] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [email, setEmail] = useState("");
    const [postedBy, setPostedBy] = useState("");

    // const submit = (e) => {
    //     e.preventDefault();
    //     if (!title || !desc || !sal || !time || !loc || !category || !mobileNo || !email || !postedBy) {
    //         alert("Fields cannot be blank");
    //     } else {
    //         addJob(title, desc, sal, time, loc, category, mobileNo, email, postedBy);
    //         setTitle(""); setDesc(""); setLoc("");
    //         setSal(""); setTime(""); setCategory("");
    //         setPostedBy(""); setMobileNo(""); setEmail("");
    //     }
    // };

    const postData = async (e) => {
        e.preventDefault();
        const myJob = {
            title,
            desc,
            sal: parseInt(sal),
            time,
            loc,
            category,
            mobileNo,
            email,
            postedBy,
        };

        try {
            const response = await fetch('/api/jobs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(myJob),
            });

            if (response.ok) {
                const data = await response.json();
                addJob(data); // Assuming the server returns the newly created job
                setTitle("");
                setDesc("");
                setLoc("");
                setSal("");
                setTime("");
                setCategory("");
                setPostedBy("");
                setMobileNo("");
                setEmail("");
            }
            
            else {
                alert('Failed to add job. Please try again.');
            }
        } catch (error) {
            console.error('Error sending data to server:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    const customCardStyle = {
        width: "55%",
        padding: "20px",
        borderRadius: "40px",
        border: "none",
        left: "34%",
        transform: "translate(-50%, -0%)",
    };

    const customLabelStyle = {
        fontWeight: "bold",
        textAlign: "left",
        marginBottom: "5px",
    };

    const customInputStyle = {
        width: "100%",
        marginBottom: "15px",
    };

    const customButtonStyle = {
        backgroundColor: 'rgb(128, 0, 0)',
        borderRadius: "20px",
        fontWeight: "bold",
        height: "45px",
        width: "100px",
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
    };

    return (
        <div className="container my-3">
            {/* <img src="https://cdn.dribbble.com/users/4412543/screenshots/11086928/media/c23debeaf4452826b6883c90b771e5a8.gif" alt="" style={customImageStyle}/> */}
            <div className="card" style={customCardStyle}>
                <div className="card-body">
                    <h3 className="card-title text-center">Add a Job</h3>
                    <form method='POST'>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label" style={customLabelStyle}>Job Title</label>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" style={customInputStyle} id="title" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="desc" className="form-label" style={customLabelStyle}>Job Description</label>
                            <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" style={customInputStyle} id="desc" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="loc" className="form-label" style={customLabelStyle}>Location</label>
                            <input type="text" value={loc} onChange={(e) => setLoc(e.target.value)} className="form-control" style={customInputStyle} id="loc" />
                        </div>

                        {/* ROW2 */}
                        <div className="row mb-3">
                            <div className="col-md-4">
                                <label htmlFor="sal" className="form-label" style={customLabelStyle}>Salary/month</label>
                                <input type="number" value={sal} onChange={(e) => setSal(e.target.value)} className="form-control" style={customInputStyle} id="sal" />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="time" className="form-label" style={customLabelStyle}>Time</label>
                                <input type="text" value={time} onChange={(e) => setTime(e.target.value)} className="form-control" style={customInputStyle} id="time" />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="category" className="form-label" style={customLabelStyle}>Category</label>
                                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} className="form-control" style={customInputStyle} id="category" />
                            </div>
                        </div>

                        {/* ROW3 */}
                        <div className="row mb-3">
                            <div className="col-md-4">
                                <label htmlFor="postedBy" className="form-label" style={customLabelStyle}>Posted By</label>
                                <input type="text" value={postedBy} onChange={(e) => setPostedBy(e.target.value)} className="form-control" style={customInputStyle} id="postedBy" />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="mobileNo" className="form-label" style={customLabelStyle}>Mobile Number</label>
                                <input type="number" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} className="form-control" style={customInputStyle} id="mobileNo" />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="email" className="form-label" style={customLabelStyle}>Email</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" style={customInputStyle} id="email" />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-sm btn-success" onClick={postData} style={customButtonStyle}>Add Job</button>
                    </form>
                </div>
            </div>
        </div>
    );
};