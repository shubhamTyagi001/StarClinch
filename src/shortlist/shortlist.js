import React from "react";
import "./Shortlist.css";
import Api from "../apidata/apidata";
function Shortlist() {
  return (
    <div className="Singer maxwidth">
      <div>
        <h1 className="singer heading">Shortlist</h1>
        <p className="medium2">Details :</p>
      </div>
      <div className="details_div">
        <div>
          <p className="mediumHeading">Event Date</p>
          <p className="smallHeading"> 2023-02-22</p>
        </div>
        <div>
          <p className="mediumHeading">Location</p>
          <p className="smallHeading"> Delhi, India</p>
        </div>
        <div className="budget_div">
          <p className="mediumHeading">Budget</p>
          <div className="budget_tag">
            <p className="mediumHeading">₹500,000</p>
          </div>
        </div>
      </div>
      <center>
        <h1 className="SingersHeading1">Singers</h1>
        <p className="textmaxwidth">Select an artist that matches your vibe.</p>
      </center>
      <Api />
    </div>
  );
}

export default Shortlist;
