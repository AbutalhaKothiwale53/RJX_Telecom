import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import TeleTalk from './TeleTalk.css';

const URL = "http://localhost:1200/plans";

const AddPlan = () => {
  const [planData, setPlanData] = useState({
    planValue: "",
    data: "",
    calls: "",
    addOns: "",
  });
  const [formsErros, setFormsErrors] = useState({planValue: '', data: ''});
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [mandatory, setMandatory] = useState(false);
	const [valid, setValid] = useState(true);
	const [minVal, setMinVal] = useState(200);
	const [minData, setMinData] = useState(20);
  const [message] = useState({
		"MANDATORY": "Enter all the forms fields",
		"ERROR": "Something went wrong",
		"PLANVALUE_ERROR": "Plan value cannot be less than 200",
		"DATA_ERROR": "Data should be 20GB or more",
	});

  function submit(e) {
    e.preventDefault();
    // if(!planData.planValue || !planData.data || !planData.calls || !planData.addOns){
    //   setMandatory(true);
    // }
    if(planData.planValue === "" || planData.data === "" || planData.calls === "" || planData.addOns === ""){
      setMandatory(message.MANDATORY);
      setValid(valid);
    }else{
      setErrorMessage("");
      setValid(false);
      let newPlans = {
        planValue: planData.planValue,
        data: planData.data,
        calls: planData.calls,
        addOns: planData.addOns
      }
      axios.post(URL, newPlans)
      .then((res) => {
        setPlanData([...planData, res.data]);
        setSuccessMessage(`New Plan has been added with the id ${res.data.id} `);
        setPlanData("");
        console.log('=>', planData)
      })
      .catch((err) => {
        setErrorMessage(err.message);
      })
    }
  }

  function handleChange(e) {
    setSuccessMessage("");
		setErrorMessage("");
		setMandatory("");
    let { name, value } = e.target;
    setPlanData({ ...planData, [name]: value });

    //set the details state
		switch(name) {
			case "planValue":
        setMinVal(value);
        if(minVal > 200){
          setValid(true);
          setPlanData(value);
        }else{
          setErrorMessage(message.PLANVALUE_ERROR);
        }
			break;

      case "data":
        setMinData(value);
        if(minData > 20){
          setValid(true);
          setPlanData(value);
        }else{
          setErrorMessage(message.DATA_ERROR);
        }
      break;

      default:
      break;  
		}
  }

  return (
    <React.Fragment>
      <h2>Create a new Plan</h2>
      <Form onSubmit={submit} className='Plan-Form' style={{width: '30rem', alignItems:'center',}}>
        <Form.Group className="mb-3" >
          <Form.Label>Plan Value</Form.Label>
          <Form.Control
            type="number"
            name="planValue"
            value={minVal}
            onChange={handleChange}
            required
          />
          <Form.Text className="text-danger">{errorMessage}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label> Data (20GB/Month)</Form.Label>
          <Form.Control
            type="number"
            name="data"
            value={minData}
            onChange={handleChange}
            required
          />
          <Form.Text className="text-danger">{errorMessage}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Unlimited Calls</Form.Label> <br />
          Yes &nbsp;
          <input
            name="calls"
            type="radio"
            id="yes"
            onChange={handleChange}
            required
          />
          &nbsp; No &nbsp;
          <input
            name="calls"
            type="radio"
            id="no"
            onChange={handleChange}
            required
          />
          <Form.Text></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>AddOns</Form.Label>
          <Form.Control
            name="addOns"
            as="textarea"
            style={{ height: "50px", border: "1px solid black" }}
            className="form-controlm"
            onChange={handleChange}
          />
          <Form.Text></Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button><br/>
        <Form.Text className="text-success">{successMessage}</Form.Text>
        <Form.Text className="text-danger">{errorMessage}</Form.Text>
      </Form>
    </React.Fragment>
  );
};

export default AddPlan;
