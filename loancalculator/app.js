// listenr for submit

document.getElementById('loan-form').addEventListener('submit', function(e){
	 
	// hide result
	document.getElementById('results').style.display ='none';
	// show loader
	document.getElementById('loading').style.display ='block';
	setTimeout(calculateResults,1000);

	e.preventDefault()
});

// calculate result from 
function calculateResults() {
	//definig the ui varibles ie form ko varibale define
	const amount =  document.getElementById('amount');
	const interest =  document.getElementById('interest');
	const years =  document.getElementById('years');
	const montlyPayment =  document.getElementById('montly-payment');
	const totalInterest =  document.getElementById('total-interest');
	const totalPayment =  document.getElementById('total-payment');

// creating  varibale for the calculating paramenter
	const principal = parseFloat(amount.value);
	const calculatedInterest = parseFloat(interest.value) / 100 / 12;
	const calculatedPayments = parseFloat(years.value) * 12;
	
// computing montly payment with new varibale
	const x = Math.pow(1 + calculatedInterest, calculatedPayments);
	const monthly = (principal*x*calculatedInterest)/(x-1);
// check montly is finite using validation
	if(isFinite(monthly)){
		montlyPayment.value = monthly.toFixed(2);
		totalPayment.value = (monthly * calculatedPayments).toFixed(2);
		totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);7
		
		// show result and hide loading 
		document.getElementById('results').style.display ='block';
		document.getElementById('loading').style.display ='none';

	}else{
		// displaying error if occurs 
		// using create elment method 
		// showError function call
		showError("Please Check Your Number.");
	}


}

// showError Function
function showError (error) {

	// show result and hide loading 
		document.getElementById('results').style.display ='none';
		document.getElementById('loading').style.display ='none';

	// get element
	const card = document.querySelector('.card');
	const heading = document.querySelector('.heading');
	const errorDiv = document.createElement('div');
	errorDiv.className = 'alert alert-danger';
	errorDiv.append(document.createTextNode(error));

	// insert the error above heading
	// card.insertBefore(key1: k lae insert garnu parni , key2:k ko mathi );
	card.insertBefore(errorDiv, heading);
	// clear error after a while
	setTimeout(clearError, 3000);
}

// fucntion clearError
function clearError () {
	document.querySelector('.alert').remove();
}