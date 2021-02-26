import React,{useState} from 'react'
import RocketLogo from "./Assets/icons8-rocket-64.png";
import './Dashboard.css'

function Dashboard() {

    const [capsules, setCapsules] = useState([])
    const [rockets, setRockets] = useState([])
    const [landpad, setlandpad] = useState([])
    const [disableLandingbtn, setDisableLandingbtn] = useState(true)
    const [clicked, setClicked] = useState(false)
    const [clicked2, setClicked2] = useState(false)
    const [landId, setLandId] = useState('')



    function getCapsulesData()
    {
        
        var axios = require('axios');

        var config = {
          method: 'get',
          url: 'http://localhost:4000/capsules',
        };
        
        axios(config)
        .then(function (response) {
        setCapsules(response.data)
        console.log(capsules)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    
    
    function getRocketsData()
    {
        
        var axios = require('axios');

        var config = {
          method: 'get',
          url: 'http://localhost:4000/rockets',
        };
        
        axios(config)
        .then(function (response) {
        setRockets(response.data)
        console.log(rockets)
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    function getLaunchPadsData()
    {
        
        var axios = require('axios');

        var config = {
          method: 'get',
          url: 'http://localhost:4000/landpads',
        };
        
        axios(config)
        .then(function (response) {
        setlandpad(response.data)
        console.log(landpad)
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    const disableBtn = (e) =>
    {
        var reg =/[^0-9A-Z-]/g;

        setLandId(e.target.value)

        if(e.target.value === e.target.value.replace(reg, "") || e.target.value === "")
        {
            // this.setState({disableLandingbtn : false})
            setDisableLandingbtn(false)
        }
        else{
            setDisableLandingbtn(true)

            
        }
    }

    function handleCapsuleClick()
    {
        setClicked(true)
        getCapsulesData()
    }

    function handleRocketClick(){
        setClicked2(true)
        getRocketsData()
    }


    return (
        <div>

            <div className="dashboard">
                        
                <div className="dashboard-display">
                {
                    clicked? 
                    <div>
                        <h3>Capsules</h3>
                        {capsules.map((cap)=>(
                            <ul className="capsuleData">
                                
                            <li key={cap.capsule_serial}>{cap.capsule_serial}</li>
                            <li key={cap.capsule_serial}>{cap.capsule_id}</li>
                            <li key={cap.capsule_serial}>{cap.status}</li>
                            <li key={cap.capsule_serial}>{cap.original_launch}</li>

                            </ul>

                        ))}
                    </div>
                    : null
                }

                {
                    clicked2?
                    <div>
                        <h3>Rockets</h3>
                        {
                            rockets.map((rocket) =>(
                                <ul>
                                    
                                <li key={rocket.id}> {rocket.id}</li>
                                <li key={rocket.id}> {rocket.country}</li>
                                <li key={rocket.id}> {rocket.company}</li>

                                </ul>
                            ))
                        }
                    </div>
                    :null
                    
                }
                {
                    landpad.filter(land => land.id = landId).map(data => (
                        <p key={data.id} > {data.status} </p>
                    ))


                }




            </div>
            <div class="dashboard-control">
                <div class="buttons">
                    <button
                    onClick={handleCapsuleClick}
                    >
                        Capsules</button>
                </div>
                <div class="buttons">
                    <button
                    onClick={handleRocketClick}
                    >
                    <img src={RocketLogo} alt=""/>

                    </button>                
                </div>
                <div class="buttons">
                    <input type="text"
                    onChange={disableBtn}
                    placeholder="Launchpad ID"/>

                    <button className="btn-launchpad"
                    disabled={disableLandingbtn}
                    onClick={getLaunchPadsData}
                    >Launchpad</button>
                </div>

            </div>
            
        </div>
    
                            
        </div>

    )
}

export default Dashboard
