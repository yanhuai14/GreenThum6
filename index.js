const express = require('express');
const app = express();

// Define route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to GreenThumb! Our gardening assistant app takes the guesswork out of plant care, with a database of thousands of plants, personalized care reminders, and a platform to consult with fellow gardeners.');
});

// Define route for the plant database page
app.get('/plant-database', (req, res) => {
  res.send('Explore our database of thousands of plants, and find the perfect additions to your green space.');
});

// Define route for the care reminders page
app.get('/care-reminders', (req, res) => {
  res.send('Never forget to water or fertilize your plants again! Our personalized care reminders will keep you on track with your plant care routine.');
});

// Define route for the gardening community page
app.get('/gardening-community', (req, res) => {
  res.send('Connect with fellow gardeners, share tips and tricks, and get advice on plant care and cultivation.');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});