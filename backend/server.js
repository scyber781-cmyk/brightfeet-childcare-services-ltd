const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000; // Or any other port you prefer

app.use(cors());
app.use(bodyParser.json());

app.post('/api/register', (req, res) => {
  const { parentName, childName, childAge, email, phone } = req.body;

  // In a real application, you would save this data to a database
  // and handle user authentication/creation.
  console.log('Received registration data:');
  console.log(`Parent Name: ${parentName}`);
  console.log(`Child Name: ${childName}`);
  console.log(`Child Age: ${childAge}`);
  console.log(`Email: ${email}`);
  console.log(`Phone: ${phone}`);

  // Send a success response back to the frontend
  res.status(200).json({ message: 'Registration successful!' });
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
