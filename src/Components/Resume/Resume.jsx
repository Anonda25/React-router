import { Navigate } from "react-router-dom";


function Resume({ resume }) {
    // console.log(resume);
    const { name, title, contact } = resume;
    const { phone,email,github, linkedin, } = contact;
    // console.log(contact);
    const hendelShowBtn=()=>[
        Navigate('/Blog')
    ]
  return (
    <div>
      <div className="card glass ">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{title}</p>
          <p>Phone : {phone}</p>
          <p>Email: {email}</p>
          <p>GitHub : {github}</p>
          <p>Linkedin : {linkedin}</p>
          
          <button onClick={hendelShowBtn} className="btn">
            ShowToDetels
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resume