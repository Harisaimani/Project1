import React, { useState, useEffect } from 'react';
import './Tourdata.css';

const TourData = () => {
  const [tourData, setTourData] = useState([]);
  const [stateName, setStateName] = useState('');
  const [districts, setDistricts] = useState('');
  const [type, setType] = useState('');
const [stateData,setStateData] = useState([]);


  useEffect(() => {
    // Fetch existing posts from the server
    fetch('https://tourserver.onrender.com/states')
    // fetch('http://localhost:5000/states')
      .then(response => response.json())
      .then(data => setStateData(data))
      .catch(error => console.error(error));
  }, []);
  
  useEffect(() => {
    const fetchData = async () => {
      let url = 'https://tourserver.onrender.com/files';
      if (stateName || districts || type) {
        url += `?stateName=${stateName}&districts=${districts}&type=${type}`;
      }

      try {
        const response = await fetch(url);
        const data = await response.json();
        setTourData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [stateName, districts, type]);
console.log(tourData)
  const handleStateChange = (value) => {
    setStateName(value);
    setDistricts(''); // Reset districts when state changes
  };
  const filteredTourData = tourData.filter(tour => {
    if (stateName && tour.stateName !== stateName) {
      return false;
    }
    if (districts && tour.districts !== districts) {
      return false;
    }
    if (type && tour.type !== type) {
      return false;
    }
    return true;
  });

  return (
    // <div className="tour-data-container">
    <>
      <div className="filters">
        <select
          value={stateName}
          onChange={(e) => handleStateChange(e.target.value)}
        >
          <option value="">Select State</option>
          {stateData.map((state, index) => (
    <option key={index} value={state.statename}>{state.statename}</option>
  ))}
        </select>
        <select
  value={districts}
  onChange={(e) => setDistricts(e.target.value)}
>
  <option value="">Select District</option>
  {stateData.map((state, stateIndex) => (
    state.statename === stateName && // Filter districts by selected state
    state.districtNames.map((district, districtIndex) => (
      <option key={`${stateIndex}-${districtIndex}`} value={district}>
        {district}
      </option>
    ))
  ))}
</select>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Select Type</option>
          {/* Add type options */}
          <option value="Beach">Beachs</option>
          <option value="Temple">Temples</option>
          <option value="Hill Station">Hill Stations</option>
          <option value="Historical place">Historical places</option>
          <option value="Island">Islands</option>
          <option value="Dam">Dams</option>
          <option value="WaterFalls">WaterFalls</option>
          <option value="Park">Parks</option>
          <option value="Museum">Museums</option>
          <option value="River">Rivers</option>
        </select>
      </div>
      <div className='No-data'>
      {filteredTourData.length === 0 ? (
        <h1>No data available.</h1>
      ) : (
        filteredTourData.map((tour, index) => (
          <div key={index} className="tour-item">
            <h2>{index + 1}.{tour.placename}</h2><br />
            <img src={`https://tourserver.onrender.com${tour.imagePath}`} alt="placeimage" className='tour-images' />
            <p>{tour.description}</p>
            <a
              href={`https://www.google.com/maps?q=${tour.latitude},${tour.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Map
            </a>
            {/* <iframe src={tour.stateName} width="600" height="450"></iframe> */}
          </div>
        ))
      )}
    </div>
    {/* // </div> */}
    </>
  );
};

export default TourData;
