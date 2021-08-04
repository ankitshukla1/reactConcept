import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { debounce, throttle } from '../utils/utilFun';
import './home.css';

var Home = () => {
  let history = useHistory();

  const [searchText, setSearchText] = useState('');
  const [employee, setEmployee] = useState([]);
  const [searchedEmployee, setSearchedEmployee] = useState([]);

  const getEmployeeList = async() => {
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let empList = await res.json();
    setEmployee(empList);
  };

  const search = (searchTextValue) => {
    const searchedEmp = employee.filter((emp) => {
      return emp.name.toLowerCase().includes(searchTextValue);
    })
    setSearchedEmployee(searchedEmp);
  }

  const searchEmployee = (event) => {
    setSearchText(event.target.value);
    var searchEmployeeOnce = debounce(function() {
      search(event.target.value)
    }, 2000);
    searchEmployeeOnce();
  }

  const goToDetail = (empData) => {
    history.push("/detail", empData);
  }

  useEffect(() => {
    getEmployeeList();
    return () => {
      console.log('cleanUphome');
    }
  }, [])

  const EmpList = () => {
    if(searchText.length > 0) {
      return (
        <tbody>
          {searchedEmployee.map((emp, index) => (
            <tr key={index.toString()}>
              <td>{emp.id}</td>
              <td className="lnkRouter" onClick={() => goToDetail(emp)}>{emp.name}</td>
            </tr>
          ))}
        </tbody>
      )
    }
    return (
      <tbody>
        {employee.map((emp, index) => (
          <tr key={index.toString()}>
            <td>{emp.id}</td>
            <td className="lnkRouter" onClick={() => goToDetail(emp)}>{emp.name}</td>
          </tr>
        ))}
      </tbody>
    );
  }
  
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
            <EmpList />
          </table>
      </div>
    </div>
  );
}

export default Home;