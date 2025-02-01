import React, { useState } from "react";
import axios from "axios";

import WordHeader from "./WordHeader.js";
import Photos from "./Photos.js";
import "./Search.css";

export default function Search() {
  let [wordQuery, setWordQuery] = useState("");
  let [wordData, setWordData] = useState("");
  let [photoData, setPhotoData] = useState("");

  let wordKey = "82f43b0671f2tb328187o7be4ab620aa";
  let photosKey = "Pl7LGDcAukaMLUCze9lfAs9P5JkiRMueoBQPWKKE7rT07LeIZfURrCtt";

  function handleWordChange(event) {
    setWordQuery(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.shecodes.io/dictionary/v1/define?word=${wordQuery}&key=${wordKey}`;
    axios.get(url).then(showWordData);

    let photosUrl = `https://api.pexels.com/v1/search?query=${wordQuery}&per_page=6&orientation=landscape`;
    axios
      .get(photosUrl, { headers: { Authorization: photosKey } })
      .then(showPhotos);
  }

  function showPhotos(response) {
    setPhotoData(response.data.photos);
  }

  function showWordData(response) {
    setWordData({
      word: response.data.word,
      meanings: response.data.meanings,
      phonetic: response.data.phonetic,
    });
  }

  return (
    <div className="Search">
      <label htmlFor="Word Search">What are you looking for ???</label>
      <form onSubmit={handleSubmit}>
        <input
          id="Word Search"
          type="search"
          placeholder="Let me know..."
          onChange={handleWordChange}
        />
        <input type="submit" value="Go for it" />
      </form>
      <WordHeader results={wordData} />
      <Photos results={photoData} />
    </div>
  );
}
