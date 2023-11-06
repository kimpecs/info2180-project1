
function isValidEmail(email) {
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return emailRegex.test(email);
}


document.addEventListener("DOMContentLoaded", (event) => {

	const form = document.forms[0];
	const emailInput = document.getElementById("email");
	
	form.addEventListener("submit", (event) => {
		event.preventDefault();

		const email = emailInput.value;
		const msg = document.getElementsByClassName("message")[0];
		
		if(isValidEmail(email)) {			
			msg.innerHTML = `Thank you! Your email address ${email} has been added to our mailing list!`;
		} else {
			msg.innerHTML = "Please enter a valid email address."
		}
	})
});
