import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import './TeleTalk.css';

const URL = "http://localhost:1200/plans";
const ViewPlan = () => {
    
    const [planData, setPlanData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); 

    function deletePlan(id) { 
        axios.delete(URL + '/' + id)
        .then(res => {
            axios.get(URL)
            .then(res => {
                setPlanData(res.data);
            })
            setSuccessMessage(`Deleted Successfully with id ${id}`);
            
        })
        .catch(err => {
            setErrorMessage('Something Went Wrong!');
        })
    }

    useEffect(() => {
        axios.get(URL)
        .then((res) => {
            setPlanData(res.data);
            
        })
        .catch((err) => {
            setErrorMessage(err.message);
        });
    },[]);

  return (
    <div >
        <h2>Plan Details</h2>
        <span className="text-success">{successMessage}</span>
        <span className="text-danger">{errorMessage}</span>
        <div className="grid">
           
            {planData.map((plan) => {
                const {id, planValue, data, calls, addOns} = plan;
                return (
                    <Card.Body key={id} className='card'>
                    <Card.Text>Plan ID: {id}</Card.Text>
                    <Card.Text>Plan Value: {planValue}</Card.Text>
                    <Card.Text>Data: {data}</Card.Text>
                    <Card.Text>Unlimited Calls: {calls}</Card.Text>
                    <Card.Text>AddOns: {addOns}</Card.Text>
                    <Button className="btn-danger" type="submit" 
                    onClick={() => deletePlan(id)}><Trash /> </Button>
                </Card.Body>
                )
            })}
           

        </div>
    </div>
  )
}

export default ViewPlan
