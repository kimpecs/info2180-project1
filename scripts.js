<script>

  document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const messageDiv = document.querySelector(".message");

    form.addEventListener("submit", function(event) {
      event.preventDefault()}; 

     
      const emailInput = document.getElementById("email");
      const userEmail = emailInput.value.trim(); 

      if (userEmail === "") {
        messageDiv.textContent = "Please enter a valid email address."};
       else {
        messageDiv.textContent = `Thank you! Your email address ${userEmail} has been added to our mailing list!`};
        emailInput.value = "";
    
    );
  );
</script>
