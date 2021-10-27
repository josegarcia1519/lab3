console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault(); //preventing from refreshing
	
	console.log('form submit');
	alert("formhasbeensubmitted")
}


let form = document.querySelector('form#contact'); //selects element with name contact. # is the char to use

form.addEventListener('submit', handleSubmit); //when there is submit on the form, run handlesubmit function. using addeventlistener automatically will pass the handle event on line 5 

