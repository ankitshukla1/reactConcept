import React, {useState, useEffect} from 'react';
import '../../App.css';
import { useLocation } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  console.log('location', location);
  const [detail, setDetail] = useState(null);

  const getDetail = () => {
    console.log(detail);
  }

  useEffect(() => {
    console.log('useEffect');
    setDetail(location.state);
    return () => {
      console.log('cleanUp');
    }
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        Detail
      </header>
    </div>
  );
}

export default Detail;