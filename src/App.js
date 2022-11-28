import { useState } from "react";
import "./styles.css";

const typeOfMusic = {
  EDM: [
    { name: "Animals / Martin Garrix", rating: "5/5" },
    { name: "The Nights / Avincii", rating: "4.5/5" },
    { name: "Goosebumps / Travis Scott", rating: "4/5" }
  ],
  RAP: [
    { name: "Rap God / Eminem", rating: "5/5" },
    { name: "Not Afraid / Eminem", rating: "4.5/5" },
    { name: "Still D.R.E / Dr.Dre, Snoop Dogg", rating: "5/5" }
  ],
  Retro: [
    { name: "Neele Neele Ambar Par / Kishor Kumar", rating: "5/5" },
    { name: "Tere Bina Zindagi se / Lata Mangeshkar", rating: "4/5" },
    { name: "Chura Liya Hai Tumne Jo Dil Ko / Asha Bhosle", rating: "4/5" }
  ]
};

export default function App() {
  const [meaning, setMeaning] = useState("Retro");

  function itemClickHandler(item) {
    setMeaning(item);
  }

  return (
    <div className="App">
      <h1>Music Recommendation</h1>
      <p>Checkout my favorite songs. Select a genre to get started </p>

      <div>
        {Object.keys(typeOfMusic).map((item) => (
          <button onClick={() => itemClickHandler(item)} style={{}}>
            {item}
          </button>
        ))}
      </div>

      <hr />

      <div className="display">
        <ul>
          {typeOfMusic[meaning].map((song) => (
            <li key={song.name}>
              {" "}
              <div className="song-name">{song.name}</div>
              <div className="song-rating">{song.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
