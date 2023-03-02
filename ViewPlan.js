import React, {useState, useEffect, UseRef} from 'react';
import axios from 'axios';

const url = "https://localhost:4000/plans";

export default function ViewPlan() {

	const [planDetails, setPlanDetails] = useState();
	const [errorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');

	const [message] = useState({
		"ERROR": "Something went wrong",
		"DELETE_SUCCESS": "Deleted Successfully",  
	});

	//useEffect can be used if required to fetch the plan details when the component is mounted
	functiono fetchDetails() {
		//axios call be made here for fetching details
		//success -> set the state planDetails with the response received.
		//error -> set the error message as "Something went wrong"
	}

	function remove(id) {
		//url -> http://localhost:4000/plans/<plan ID>
		//success -> set the success messgae as "Deleted Successfully"
		//error -> set the error message as "Something went wrong"
	}

	return (
		<React.Fragment>
			{/*display message based on condition */}
			<p>{/*display successMessage*/}</p>
			<p>{/*display errorMessage*/}</p>
			<h6>Plan Details</h6>
			<div className='row'>
				<div key="plan.id" className='card'>
				<div className='card-body'>
				<b>Plan ID: </b>
				<span>{/*id*/}</span></br>
				<b>Plan Value: </b>
				<span>{/* planValue*/}</span></br>
				<b>Data: </b>
				<span>{/* data */}</span></br>
				<b>Unlimited Calls: </b>
				<span>{/*calls*/}</span></br>
				<b>AddOns: </b>
				<span>{/*addOns*/}</span></br>   
				</div>
				</div>
				<button type='submit'>Delete</button>
			</div>

		</React.Fragment>
	);
}  