// Ensure the WebApp is ready
Telegram.WebApp.ready();

// Access init data and start parameter
const userData = Telegram.WebApp.initDataUnsafe;
const tgWebAppStartParam = Telegram.WebApp.startParam;

// Append the start parameter to the user data
userData['tgWebAppStartParam'] = tgWebAppStartParam;

// Display user information in the HTML
const userInfoElement = document.getElementById('user-info');
userInfoElement.textContent = `User Info: ${JSON.stringify(userData, null, 2)}`;

// Log to console for debugging
console.log("User Data:", userData);
console.log("Start Param:", tgWebAppStartParam);
