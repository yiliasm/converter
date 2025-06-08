function convertToMiles() {
  const kmInput = document.getElementById("kmInput").value;
  const result = document.getElementById("result");

  if (kmInput === "" || isNaN(kmInput) || kmInput < 0) {
    result.textContent = "Please enter a valid non-negative number.";
    result.style.color = "red";
    return;
  }

  const kilometers = parseFloat(kmInput);
  const miles = kilometers * 0.621371;
  result.textContent = `${kilometers} km is approximately ${miles.toFixed(2)} miles.`;
  result.style.color = "green";
}

function clearFields() {
  document.getElementById("kmInput").value = "";
  document.getElementById("result").textContent = "";
}
