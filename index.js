const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // Change this to your desired port number

// Use middleware to parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define a route to handle POST requests
app.post('/uploadhwid', (req, res) => {
    const receivedHWID = req.body; // Assuming you are sending the HWID in the request body

    // You can process the received HWID here, e.g., store it in a database
    console.log('Received HWID:', receivedHWID);

    // Send a response back to the client (optional)
    res.send('HWID received successfully');
});

// Define a route to handle GET requests
app.get('/uploadhwid', (req, res) => {
    const receivedHWID = req.body; // Assuming you are sending the HWID in the request body

    // You can process the received HWID here, e.g., store it in a database
    console.log('Received HWID:', receivedHWID);

    // Send a response back to the client (optional)
    res.send('HWID received successfully');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
