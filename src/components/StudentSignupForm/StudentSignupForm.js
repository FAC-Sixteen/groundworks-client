import React, { useState } from 'react';
import './StudentSignupForm.css';
import axios from 'axios';

function StudentSignupForm() {
  const [data, setData] = useState({firstName:"", lastName: "", email: "",
    phoneNumber: "", password: "", university: "", yearOfStudy: "",
    courseStudied: "", aboutYou: "", LinkedinURL: ""});

  const handleChange = (event) => {
    setData({
      ...data, [event.target.name]: event.target.value
    })   //rest parameter adds to current state without replacing/deleting it
  }     //second param line 12 matches key-value pairs in state object line 6

  const handleSubmit = (event) => {
    event.preventDefault();

  const addStudent = async () => {
    console.log(`Fake submitting: ${data}`);
    try {
      return await
      axios.post('/api/student/sign-up', data)
    } catch(error) {
      console.error(error)
    }
  }
  addStudent();
  setData({firstName:"", lastName: "", email: "",   //clear form on submit
      phoneNumber: "", password: "", university: "", yearOfStudy: "",
      courseStudied: "", aboutYou: "", LinkedinURL: ""});
  }

  return (
    <div>

    <form className="SignupForm" onSubmit={handleSubmit}>
      <fieldset className="Signup--Fieldset">
        <legend>Student Signup</legend>

    <div className="Signup--div-p1">
    <div className="Signup--row">
      <label className="Signup--label" for="firstName">First Name:
      <input className="Signup--input" id="firstName" type="text"
        name="firstName" value={data.firstName} onChange={handleChange} />
      </label>
    </div>
    <div className="Signup--row">
      <label className="Signup--label" for="lastName">Last Name:
      <input className="Signup--input" id="lastName" type="text" name="lastName"
        value={data.lastName} onChange={handleChange}  /></label>
    </div>
    <div className="Signup--row">
      <label className="Signup--label" for="email">Email:
      <input className="Signup--input" id="email" type="text" name="email"
        value={data.email} onChange={handleChange} /></label>
    </div>
    <div className="Signup--row">
      <label className="Signup--label" for="phoneNumber">Phone Number:
      <input className="Signup--input" id="phoneNumber" type="text"
        name="phoneNumber" value={data.phoneNumber} onChange={handleChange} />
      </label>
    </div>
    <div className="Signup--row">
      <label className="Signup--label" for="password">Password:
      <input className="Signup--input" id="password" type="text" name="password"
        value={data.password} onChange={handleChange} /></label>
    </div>
    </div>

{/*Second half of form displayed separately on mobile */}
    <div className="Signup--div-p2">
    <div className="Signup--row">
      <label className="Signup--label" for="university">University:
      <input className="Signup--input" id="university" type="text"
        name="university" value={data.university} onChange={handleChange}/>
      </label>
    </div>
    <div className="Signup--row">
      <label className="Signup--label" for="yearOfStudy">Year of Study:
      <input className="Signup--input" id="yearOfStudy" type="text"
        name="yearOfStudy" value={data.yearOfStudy} onChange={handleChange}/>
      </label>
    </div>
    <div className="Signup--row">
      <label className="Signup--label" for="courseStudied">Course of Study:
      <input className="Signup--input" id="courseStudied" type="text"
        name="courseStudied" value={data.courseStudied} onChange={handleChange}/>
      </label>
    </div>
    <div className="Signup--row">
      <label className="Signup--label" for="aboutYou">About Yourself:
      <input className="Signup--input" id="aboutYou "type="text" name="aboutYou"
        value={data.aboutYou} onChange={handleChange} /></label>
    </div>
    <div className="Signup--row">
      <label className="Signup--label" for="LinkedinURL">LinkedinURL:
      <input className="Signup--input" id="LinkedinURL "type="text"
        name="LinkedinURL" value={data.LinkedinURL} onChange={handleChange} />
      </label>
    </div>
    </div>

    <input className="SignupForm--submit" type="submit" name="submit"
      value="submit" />

      </fieldset>
    </form>
    </div>
  )
}

export default StudentSignupForm;