
import './App.css';
import NavBar from './Nav_Bar';
import HomeCarousel from './HomeCarousel';
import Imagedata from './Imagedata';
import Card from './Cards';
const ncard = (val) => {
  return <Card key={val.id} imgsrc={val.imgurl} Title={val.Title} desc={val.desc} />;


}
function App() {
  return (
    <div>
      <NavBar />
      <HomeCarousel />

      <div className="hello">
        {Imagedata.map((val, index) => (
          <div key={val.id} className='col-md-3'>
            {ncard(val)}

          </div>

        ))}
      </div>
    </div>

  );

}

export default App;
