import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import './home.css';

var Home = () => {
  let history = useHistory();

  const [searchText, setSearchText] = useState('');
  const [employee, setEmployee] = useState([]);
  const [searchedEmployee, setSearchedEmployee] = useState([]);

  const getEmployeeList = async() => {
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let empList = await res.json();
    console.log(empList);
    setEmployee(empList);
  };

  const search = (searchTextValue) => {
    const searchedEmp = employee.filter((emp) => {
      console.log(emp.name.search(searchTextValue));
      return emp.name.toLowerCase().includes(searchTextValue);
    })
    setSearchedEmployee(searchedEmp);
  }

  const searchEmployee = (event) => {
    console.log(event.target.value);
    search(event.target.value);
    setSearchText(event.target.value);
  }

  const goToDetail = (empId) => {
    history.push(`/about`, { id:  empId});
  }

  useEffect(() => {
    console.log('useEffectHome');
    getEmployeeList();
    return () => {
      console.log('cleanUphome');
    }
  }, [])
  
  return (
    <div className="home">
      <header className="homeHeader">
        Home
      </header>
      <div className="searchDiv">
        <input
          type='text'
          placeholder="Search Employee"
          className="inputBox"
          value={searchText}
          onChange={value => searchEmployee(value)}
        ></input>
      </div>
      <div className="employeeList">
          <table className="employee">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
              </tr>
            </thead>
            {searchText.length > 0 ? (
              <tbody>
                {searchedEmployee.map((emp, index) => (
                  <tr key={index.toString()}>
                    <td>{emp.id}</td>
                    <td className="lnkRouter" onClick={() => goToDetail(emp.id)}>{emp.name}</td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <tbody>
                {employee.map((emp, index) => (
                  <tr key={index.toString()}>
                    <td>{emp.id}</td>
                    <td className="lnkRouter" onClick={() => goToDetail(emp.id)}>{emp.name}</td>
                  </tr>
                ))}
              </tbody>
            )}
            
          </table>
      </div>
    </div>
  );
}

export default Home;