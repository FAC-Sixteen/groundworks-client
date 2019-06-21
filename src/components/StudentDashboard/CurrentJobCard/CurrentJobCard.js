import React, { useState, useEffect } from "react";
import "./CurrentJobCard.css";
import axios from "axios";

const StudentCurrentJobCard = props => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/api/client/all-briefs");
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <ul className={props.StudentCurrentJobCard ? "showing" : "hidden"}>
      {data.map((value, index) => {
        return (
          <li key={index}>
            {
              <div className="StudentCurrentJobCard">
                <div className="StudentCurrentJobCard--container">
                  <h2 className="StudentCurrentJobCard--projectname">
                    {value.companyName}
                  </h2>
                  <p className="StudentCurrentJobCard--projectdesc">
                    Brief: {value.projectBrief}
                  </p>
                  <div className="StudentCurrentJobCard--contactcontainer">
                    <div className="StudentCurrentJobCard--contactdetailsdiv">
                      <h4>Project: {value.projectName}</h4>
                      <h4>Contact: {value.contactPerson}</h4>
                    </div>
                    <div className="StudentCurrentJobCard--projectdetailsdiv">
                      <h4>Pay: {value.projectPrice}</h4>
                      <h4>Hours: {value.estimatedWorkload}</h4>
                      <h4>Due: {value.projectDeadline}</h4>
                    </div>
                  </div>
                  <div className="StudentCurrentJobCard--downloadbrief">
                    <span className="StudentCurrentJobCard--downloadbrief__name">
                      Brief File Name
                    </span>
                    <button>Download</button>
                  </div>
                </div>
              </div>
            }
          </li>
        );
      })}
    </ul>
  );
};

export default StudentCurrentJobCard;
