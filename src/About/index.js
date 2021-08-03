import React, {useState, useEffect} from 'react';
import '../App.css';
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  console.log('location', location);
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    console.log('useEffect');
    return () => {
      console.log('cleanUp');
    }
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        About
      </header>
    </div>
  );
}

export default About;