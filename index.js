// Function to find matching drivers
function findMatching(drivers, name) {
    return drivers.filter(driver => 
      driver.toLowerCase() === name.toLowerCase()
    );
  }
  
  // Function for fuzzy matching
  function fuzzyMatch(drivers, partialName) {
    return drivers.filter(driver => 
      driver.toLowerCase().startsWith(partialName.toLowerCase())
    );
  }
  
  // Function to match names in object array
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }