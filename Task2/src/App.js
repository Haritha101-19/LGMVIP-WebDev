import React from 'react';
import './App.css';
import Card from './card';
import Loader from'./loader';

function App() {
  const[dataLoad,setdataLoad]=React.useState(false);
  const[userData,setuserData]=React.useState([]);
  const[buttonClick,setbuttonClick]=React.useState(false);
  function handleClick(){
    setbuttonClick(true);
    fetch('https://reqres.in/api/users?page=1').then((response)=>response.json())
    .then((res)=>{
      console.log(res)
      setuserData(res.data);
      setInterval(()=>{setdataLoad(true)},2000)
    })
    .catch((err)=>{console.log(err)});
  };

  return (
    <section className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://letsgrowmore.com">LetsGrowMore</a>
            <ul className="navbar-nav me-5 ms-auto">
              <li className="navbar-item"><button className="btn" type="submit" onClick={handleClick}>Get Users</button></li>
            </ul>
        </div>
      </nav>
    

      <div className="containerBody">
        <div className="justify-content-center">
          {buttonClick ? (dataLoad ? 
          (<Card userData={userData}/>) :
          (<div className="loader">
            <Loader></Loader>
          </div>)) :
          (<div className="col-6 col-sm-8 beforecardload">
            <h4>"Empty list"</h4>
            <p>To get data click on Get Users button</p>
          </div>)}
        </div>
      </div>
    </section>
  );
}

export default App;
