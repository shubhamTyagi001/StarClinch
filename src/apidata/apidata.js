import React, { useEffect, useState } from "react";
import "./api.css";

function Api() {
  const [val, setval] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/4/list/1?api_key=4e44d9029b1270a757cddc766a1bcb63"
    )
      .then((res) => res.json())
      .then((data) => setval(data.results));
  }, []);

  return (
    <div className="getitems">
      {val.map((res) => {
        return (
          <div key={res.id}>
            <div className="moviecard">
              <div className="image_div">
                <img
                  className="main_img"
                  src={`https://image.tmdb.org/t/p/original${
                    res && res.poster_path
                  }`}
                  alt=" "
                />
              </div>
              <div className="content_div">
                <div className="name_postdiv">
                  <h3 className="title">{res.title}</h3>
                </div>
                <div className="lower_text">
                  <h3>{res.release_date}</h3>

                  <div className="bottom_text">
                    <p className="bottom_vote">
                      popularity:
                      <br /> {res.popularity}
                    </p>
                    <p className="bottom_vote">
                      VoteCount:
                      <br /> {res.vote_count}
                    </p>
                  </div>
                </div>
              </div>
              <div className="select">
                <p className="text2">Select</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Api;
