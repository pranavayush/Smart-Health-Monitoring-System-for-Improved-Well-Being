document.getElementById("appointmentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("pname").value;
  let dept = document.getElementById("department").value;
  let date = document.getElementById("date").value;

  // Random token number
  let token = Math.floor(1000 + Math.random() * 9000);

  document.getElementById("successMsg").innerHTML =
    `✅ Appointment Confirmed! <br> Patient: <b>${name}</b> <br> Department: <b>${dept}</b> <br> Date: <b>${date}</b> <br> Token No: <b>${token}</b>`;
    
  // Reset form
  document.getElementById("appointmentForm").reset();
});
