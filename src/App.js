import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { addData } from "./actions";

import axios from "axios";

const App = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.data);

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { results },
      } = await axios.get(
        "https://api.unsplash.com/search/users?query=nas&client_id=PWuLcm4KmXnbpPzmhzKRrI8iPFZt1gry5kar_-lu7lg"
      );

      dispatch(addData(results));
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {data.length &&
        data?.length &&
        data.map((card) => (
          <div className="card">
            <img src={card.profile_image.large} alt="" />
            <div>
              <h2>Name: {card.name}</h2>
              <h2>Username: {card.username}</h2>
              <h2>Likes: {card.total_likes}</h2>
              <h2>Id: {card.id}</h2>
            </div>
          </div>
        ))}
    </div>
  );
};

export default App;
