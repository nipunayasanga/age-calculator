// Get references to HTML elements
const btnEl = document.getElementById("btn"); // Button element
const birthdayEl = document.getElementById("birthday"); // Input field for birthday
const resultEl = document.getElementById("result"); // Element to display result

// Function to calculate age
function calculateAge() {
  // Get the value of the birthday input field
  const birthdayValue = birthdayEl.value;

  // Check if the birthday value is empty
  if (birthdayValue === "") {
    alert("Please enter your birthday"); // Display an alert if the birthday value is empty
  } else {
    // Call the getAge function to calculate the age
    const age = getAge(birthdayValue);
    
    // Display the calculated age in the result element
    resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

// Function to calculate age based on birthday
function getAge(birthdayValue) {
  // Get the current date
  const currentDate = new Date();
  
  // Convert the birthday value to a Date object
  const birthdayDate = new Date(birthdayValue);
  
  // Calculate the difference in years between the current date and the birthday date
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  
  // Calculate the difference in months between the current date and the birthday date
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  // Adjust age if the current month is before the birth month, or if it's the same month but the current day is before the birth day
  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  // Return the calculated age
  return age;
}

// Add event listener to the button element to trigger age calculation when clicked
btnEl.addEventListener("click", calculateAge);
