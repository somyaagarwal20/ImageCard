
import './App.css';
import NavBar from './Nav_Bar';
import HomeCarousel from './HomeCarousel';
// import Imagedata from './Imagedata';
import Card from './Cards';
import { useEffect, useState } from 'react';
const ncard = (val) => {
  return <Card key={val.id} imgsrc={val.image} Title={val.Title} desc={val.desc} price={val.price} category={val.category} />;


}
function App() {

  const [Data, setData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {

      try {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json();
        setData(data);
      }
      catch (error) {
        console.log("Error Occured", error);
      }
    };
    fetchdata();
  }, []);
  return (
    <div>
      <NavBar />
      <HomeCarousel />

      <div className="hello">
        {Data.map((val, index) => (
          <div key={val.id} className='col-md-3'>
            {ncard(val)}

          </div>

        ))}
      </div>
    </div>

  );

}

export default App;
