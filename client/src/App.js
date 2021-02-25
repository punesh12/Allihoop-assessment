import './App.css';
import React, {useState} from 'react'
import Dashboard from './Dashboard';
import DashboardShip from './DashboardShip';
import Pagination from "./Pagination";

function App() {
  const [ships, setships] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage] = useState(5)

    function getShipsData()
    {
        
        var axios = require('axios');

        var config = {
          method: 'get',
          url: 'http://localhost:4000/ships',
        };
        
        axios(config)
        .then(function (response) {
        setships(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
   



  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = ships.slice(indexOfFirstPost, indexOfLastPost)

  // chanage page
  const paginat = (pageNumbers)=> setCurrentPage(pageNumbers);


  return (
    <div className="App">
      {/* <Dashboard /> */}
      <DashboardShip ships={currentPosts} getShipsData={getShipsData} />
      <Pagination postPerPage={postPerPage} totalPosts={ships.length} paginate={paginat}/>

    </div>
  );
}

export default App;
