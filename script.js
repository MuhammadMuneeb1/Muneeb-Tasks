/* Change Backgorund Color on Button Click! */
function changeColor(color) {
  document.body.style.backgroundColor = color;
}

/* Geolocation and Ip Address */

// Check Current Geo-Location;
document.getElementById("geoButton").onclick = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
};

function showPosition(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  alert(`Your Current Location is:
 Latitude: ${latitude},
 Longitude: ${longitude}`);
}

// Check Current Ip Address;
function getIPAddress() {
  fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      const ipAddress = data.ip;
      const formattedIpAddress = formatIPv4Address(ipAddress);
      alert("Your IP Address is:", formattedIpAddress);
    })
    .catch((error) => {
      console.error("An error occurred while fetching the IP address:", error);
    });
}

function formatIPv4Address(ipAddress) {
  const parts = ipAddress.split(".");
  if (parts.length === 4) {
    return parts.map((part) => parseInt(part, 10)).join(".");
  }
  return ipAddress;
}
