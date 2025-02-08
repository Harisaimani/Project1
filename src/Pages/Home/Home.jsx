import React from 'react';
import './Home.css';
import Tourdata from '../TourData/Tourdata';
const Home = () => {
  // const [searchQuery, setSearchQuery] = useState('');
  // const [search, setSearch] = useState([]);
  // const handleSearch = async () => {
  //   try {
  //     const response = await fetch(`http://localhost:5000/api/posts/search?query=${searchQuery}`);
  //     const data = await response.json();
  //     setSearch(data);
  //   } catch (error) {
  //     console.error('Error searching posts:', error);
  //   }
  // };
  return (
    <>
    <div className="Container">
      <div className='bgimage'>
        <div className='title NamesList'>
            {/* <h1><b>S</b>ai <b>T</b>ours</h1> */}
            {/* <div className="search-bar">
      <input
        type="text"
        // value={searchQuery}
        // onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by placename..."
      />
      <button>Search</button>
    </div> */}
            {/* <p>Explore the extraordinary with Sai Tours,where our passion for travel is reflected in each meticulously planned tour<br/>,promising you a seamless and enriching adventure.Sai Tours Guiding you through the wonders of the world,ensuring every step of your journey is filled with awe,<br/> excitement, and the joy of exploration.</p> */}
      </div>
      </div>
    </div>
    <Tourdata />
    </>
  );
};

export default Home;
