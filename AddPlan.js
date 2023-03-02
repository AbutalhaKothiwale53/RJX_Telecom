import React, {useState} from 'react';
import axiox from 'axios';

const url = "http://localhost:4000/plans";

export default function AddPlan() {
	const [planData, setPlanData] = useState({
		planValue: '',
		data: '',
		calls: '',
		addOns: ''   
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

	const submit = (e) => {
		e.preventDefault();
		/*
		if any of the fields in the form is empty, set mandatory to true
		else set it to false and add the new plan details to the db
		if the plan details are added succesfully, set the appropriate message
		 "Plan created succesfully with ID <Plan Id>"
		 else set the error message "Something went wrong"
		*/
	};

	function handleChange(e) {
		setSuccessMessage("");
		setErrorMessage("");
		setMandatory("");
		let { name, value } = e.target;

		//set the details state
		switch(name) {
			case "planValue":
			break;
		case "data"":
		break;
		default:
		break;  
		}
		//if the value of all the properties of the formErrors are qual to "", 
		//set value of valid state to true, else se it to false
		
	};

	return <React.Fragment>
	<div>
		<div className="row">
			<div className="col-md-6 offset-md-3">
				<div className="card">
					<div>
						<h6>Create a new Plan</h6>
					</div>
					<div>
						<form onSubmit={submit}>
							<div className="form-group">
								<label htmlFor="">Plan Value</label>
								<input type="number" name="planValue" value={minVal}
								onChange={handleChange} className='form-control'/>
								<span></span>
							</div>
							<div className='form-group'>
								<label htmlFor="">Data (GB/Month)</label>
								<input type="number" className='form-control'
								name='data'
								value={minData}
								onChange={handleChange}
								/>
								<span></span>								
							</div>
							<div className=form-group>
								<label htmlFor="">Unlimited Calls</label>
								<div className='form-check form-check-inline'>
								<label htmlFor="">Yes</label>
								<input type="radio" name="calls" id="yes" onChange={handleChange} className='form-control'>
								</div>
								<div className='form-check form-check-inline'>
								<label htmlFor="">No</label>
								<input type="radio" name="calls" id="no" onChange={handleChange} className='form-control'>
								</div>
							</div>
							<div className='form-group'>
								<labe>Add-Ons</labe>
								<textarea name="addOns" cols="83" className='form-controlm' onChange={handleChange} />
							</div>
							<div className='form-groupm'>
							<!--bind the disabled attributes of the button to the value of 'valid' state-->
							<button type='submit'className='btn btn-primary'
							style={{
								backgroundColor: "rgba(0, 33, 65",
								border: "rgba(0, 33, 65)",
								fontSize: "15px"  
							}}
							>
							Add Plan
							</button>
							</div>


						</form>
					</div>	
					<div className='text-danger'></div>
					<div className='text-success'></div>
					<div className='text-danger'></div>
				</div>
			</div>
		</div>
	</div>
	</React.Fragment>
} 