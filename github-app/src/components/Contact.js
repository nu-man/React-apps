import { useState } from "react";

function Contact() {
  const [formdata, setFormdata] = useState({
    email: "",
    fullname: "",
    firstvisit: "",
    findvalue: "",
    primaryReason: "",
    info: "",
    howEasy: "",
    howLikely: "",
    comments: "",
  });
  const Onchnagehandler = (e) => {
    setFormdata({
        ...formdata,
        [e.target.name]: e.target.value
    })
  };
  const onSubmitHandler=(e)=>{
    e.preventDefault();
    console.log(formdata);
  }
  return (
    <>
      <div className="container">
        <center>
          <h2>Contact Form</h2>
        </center>
        <form onSubmit={onSubmitHandler}>
          <label>Email</label>
          <input type="email" name="email" onChange={Onchnagehandler}></input>
          <label>Name</label>
          <input type="text" name="fullname" onChange={Onchnagehandler}></input>
          <fieldset>
            <legend>
              Is this your first visit to website? <br></br>
            </legend>
            <label>Yes</label>
            <input
              type="radio"
              htmlFor="Yes"
              name="firstvisit"
              value="Yes"
              onChange={Onchnagehandler}
            ></input>
            <br></br>
            <label>No</label>
            <input
              type="radio"
              htmlFor="No"
              name="firstvisit"
              value="No"
              onChange={Onchnagehandler}
            ></input>
            <br></br>
          </fieldset>
          <fieldset>
            <legend>
              Were you able to find what you need? <br></br>
            </legend>
            <label>Yes</label>
            <input
              type="radio"
              htmlFor="Yes"
              name="findvalue"
              value="Yes"
              onChange={Onchnagehandler}
            ></input>
            <br></br>
            <label>No</label>
            <input
              type="radio"
              htmlFor="No"
              name="findvalue"
              value="No"
              onChange={Onchnagehandler}
            ></input>
            <br></br>
          </fieldset>
          <legend>What is the primary reason for your visit to website</legend>
          <textarea
            
            maxLength="50"
            name="primaryReason"
            onChange={Onchnagehandler}
          ></textarea>

          <label>
            If you did not find what you needed,please tell me what you were
            looking for?
          </label>
          <textarea
            
            maxLength="50"
            name="info"
            onChange={Onchnagehandler}
          ></textarea>

          <fieldset>
            <legend>
              How easy is it for you to find the information on the site:
            </legend>
            <label>Very Easy</label>
            <input
              type="radio"
              htmlFor="very"
              name="howEasy"
              onChange={Onchnagehandler}
            ></input>
            <br></br>
            <label> Easy</label>
            <input
              type="radio"
              htmlFor="easy"
              name="howEasy"
              onChange={Onchnagehandler}
            ></input>
            <br></br>
            <label>Average</label>
            <input
              type="radio"
              htmlFor="average"
              name="howEasy"
              onChange={Onchnagehandler}
            ></input>
            <br></br>
            <label>Difficult</label>
            <input
              type="radio"
              htmlFor="difficult"
              name="howEasy"
              onChange={Onchnagehandler}
            ></input>
            <br></br>
          </fieldset>
          <fieldset>
            <legend>
              What is the likelihood that you will return to the site:
            </legend>
            <label>Extremely likely</label>
            <input
              type="radio"
              htmlFor="exterme"
              name="howLikely"
              onChange={Onchnagehandler}
            ></input>
            <br></br>
            <label>Very likely</label>
            <input
              type="radio"
              htmlFor="very"
              name="howLikely"
              onChange={Onchnagehandler}
            ></input>
            <br></br>
            <label>Moderately likely</label>
            <input
              type="radio"
              htmlFor="moderate"
              name="howLikely"
              onChange={Onchnagehandler}
            ></input>
            <br></br>
            <label>unlike to return</label>
            <input
              type="radio"
              htmlFor="unlike"
              name="howLikely"
              onChange={Onchnagehandler}
            ></input>
            <br></br>
          </fieldset>
          <label>Please provide any additional comments or suggestions</label>
          <textarea
            
            maxLength="50"
            name="comments"
            onChange={Onchnagehandler}
          ></textarea>

          <input
            type="submit"
            value="Submit the contact form"
            className="btn btn-dark btn-block"
            onChange={Onchnagehandler}
          ></input>
        </form>
      </div>
    </>
  );
}
export default Contact;

/*
 Input tag atttribute: name is used to capture input value by Onchnagehandler
  => input tag name should be same as component state name



*/
