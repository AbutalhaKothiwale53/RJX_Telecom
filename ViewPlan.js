import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import TeleTalk from "./TeleTalk.css";

const URL = "http://localhost:1200/plans";
// const URL = "https://jsonplaceholder.typicode.com/posts";
const ViewPlan = () => {
    
    const [planData, setPlanData] = useState([]);
    const [mandatory, setMandatory] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        axios.get(URL)
        .then((res) => {
            setPlanData(res.data);
        })
        .catch((err) => {
            setErrorMessage(err.message);
        });
    },[]);
    function deletePlan() {

    }
  return (
    <div >
        <h2>Plan Details</h2>
        <div className="grid">
        
            {planData.map((plan) => {
                const {id, planValue, data, calls, addOns} = plan;
                return (
                    <Card.Body key={plan.id} className='card'>
                    <Card.Text>Plan ID: {id}</Card.Text>
                    <Card.Text>Plan Value: {planValue}</Card.Text>
                    <Card.Text>Data: {data}</Card.Text>
                    <Card.Text>Unlimited Calls: {calls}</Card.Text>
                    <Card.Text>AddOns: {addOns}</Card.Text>
                    <Button className="btn-danger" type="submit" onClick={deletePlan}>Delete</Button>
                </Card.Body>
                )
            })}
        </div>
    </div>
  )
}

export default ViewPlan
