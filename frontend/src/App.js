import './App.css';
import logo3 from './logo3.png'
import Header from "./MyComponents/Header";
import { AllJobs } from "./MyComponents/AllJobs";
import { Footer } from "./MyComponents/Footer";
import { AddJob } from "./MyComponents/AddJob";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initJob;
  if (localStorage.getItem("alljobs") === null) {
    initJob = [];
  }
  else {
    initJob = JSON.parse(localStorage.getItem("alljobs"));
  }


  const onDelete = (job) => {
    console.log("I am ondelete of job", job);

    setAllJobs(alljobs.filter((e) => {
      return e !== job;
    }));
    console.log("deleted", alljobs)
    localStorage.setItem("alljobs", JSON.stringify(alljobs));
  }

  const addJob = (title, desc, sal, time, loc, category, mobileNo, email, postedBy) => {
    console.log("I am adding this job", title, desc, sal, time, loc, category, mobileNo, email, postedBy)
    let sno;
    if (alljobs.length === 0) {
      sno = 0;
    }
    else {
      sno = alljobs[alljobs.length - 1].sno + 1;
    }
    const myJob = {
      sno: sno,
      title: title,
      desc: desc,
      sal: sal,
      time: time,
      loc: loc,
      category: category,
      mobileNo: mobileNo,
      email: email,
      postedBy: postedBy,
    }

    setAllJobs([...alljobs, myJob]);
    console.log(myJob);
  }

  const [alljobs, setAllJobs] = useState(initJob);
  useEffect(() => {
    localStorage.setItem("alljobs", JSON.stringify(alljobs));
  }, [alljobs])

  return (
    <>
      <Router>
        <Header logo={logo3} searchBar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddJob addJob={addJob} />
                <AllJobs alljobs={alljobs} onDelete={onDelete} />
              </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
