import React ,{ useState} from 'react'
import './DashboardShip.css'

function DashboardShip({ships, getShipsData}) {

    const [shipType, setshipType] = useState()
    const [weight, setWeight] = useState()
    const [port, setPort] = useState('')

    // getShipsData()




    return (
        <div className="serverUI">
    
        <div class="server-input">

            <div class="server-input-labels">
            <label for="ShipType">Ship Type</label>
            <label for="ShipType">Weight</label>
            <label for="ShipType">Home Port</label>


            
            </div>
            <div class="server-input-details">
            <select name="cars" id="cars"
            onChange = {(e) =>{
                const selectShipType = e.target.value;
                setshipType(selectShipType)
            }}
            defaultValue="Tug"
            >
            <option value="Tug" >Tug</option>
            <option value="Cargo">Cargo</option>
            <option value="Barge">Barge</option>
            <option value="High Speed Craft" >High Speed Craft</option>
            </select>
            <input type="text"
            onChange={(e) =>{
                const getweight = e.target.value;
                setWeight(getweight)
            }}
            />
            <input type="text"
            onChange={(e) =>{
                const getport = e.target.value;
                setPort(getport)
            }}
            />

            </div>
            <div class="">
            <button
            onClick={getShipsData}
            >Search</button>
            </div>

         </div>

         <div class="table-content">
                <table>
                    <tr>
                        <th>Ship type</th>
                        <th>Weight</th>
                        <th>Home Port</th>
                        <th>Ship Name</th>
                        <th>Class</th>
                        <th>Image</th>
                    </tr>
                        {
                                ships.filter((ship) => ship.ship_type === shipType && ship.weight_kg === weight && ship.home_port === port).map(data => (
                                <tr key={data.ship_id}>
                                    <td>{ data.ship_type} </td>
                                    <td>{ data.weight_kg} </td>
                                    <td>{ data.home_port} </td>
                                    <td>{ data.ship_name} </td>
                                    <td>{ data.class} </td>
                                    <td><button>Upload Image</button> </td>
                                    </tr>


                            ))
                        }
                        
            

                    
                    
                </table>
            </div>
            
    </div>
    
    )
}

export default DashboardShip
