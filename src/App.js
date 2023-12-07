import './App.css';
import ImageGrallery from './ImageGrallery';
import { useRef, useState } from 'react';


function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);

    //APIURL
    const endpointURL =
    `https://pixabay.com/api/?key=41119626-55ca3ff5c5f5e058ecc9c9ad6&q=${ref.current.value}&image_type=photo`;

    //APIを叩く
    fetch(endpointURL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.hits)
      setFetchData(data.hits);
    });
  };

  return (
    <div className="container">
      <h2>画像検索アプリ</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type='text' placeholder='画像を探す' ref={ref} />
      </form>
      <ImageGrallery fetchData={fetchData} />
    </div>
  );
}

export default App;
