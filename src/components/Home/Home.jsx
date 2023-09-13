/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './Home.css'
import Cart from '../Cart/Cart'
import Swal from 'sweetalert2/src/sweetalert2.js'


const Home = () => {

    const [allActors, setAllActors] = useState([]);
    const [selectedActors, setSelectedActors] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [remaining, setRemaining] = useState(0);

    useEffect(() => {
        fetch("./data.json")
          .then((res) => res.json())
          .then((data) => setAllActors(data));
    }, []);

    // console.log(allActors)

    const handleSelectActor = (actor) => {
        const isExist = selectedActors.find((item) => item.id == actor.id);

        let cost = actor.salary;
        let budget = 20000;

        if (isExist) {
            // return alert("Already booked");
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Already booked!",
            });
        } 
        else {
            selectedActors.forEach((item) => {
                cost = cost + item.salary;
            });
            const remaining = budget - cost;

            if (cost > budget){
                // return alert("The budget is over");
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "The budget is over!",
                });
            }
            else {
                setTotalCost(cost);
                setRemaining(remaining);
                setSelectedActors([...selectedActors, actor]);
            }
        }
    }
    // console.log(selectedActors)

  return (
    <div className='container'>
        <div className='home-container'>
            <div className="card-container">
                {allActors.map((actor) => (
                    <div key={actor.id} className="card">
                        <div className="card-img">
                            <img src={actor.image} alt="" className='photo'/>
                        </div>
                        <h2>{actor.name}</h2>
                        <p><small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, est!</small></p>
                        <div className="info">
                            <p><small>Salary: {actor.salary} $</small></p>
                            <p><small>{actor.role}</small></p>
                    </div>
                    <button onClick={() => handleSelectActor(actor)} className='card-btn'>Select</button>
                    </div>
                ))}
            </div>
            
            <div className='cart-container'>
                <Cart 
                selectedActors={selectedActors}
                totalCost={totalCost}    
                remaining={remaining}
                ></Cart>
            </div>
        </div>
    </div>
  )
}

export default Home
