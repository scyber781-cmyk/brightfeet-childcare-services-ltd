const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const { check, validationResult } = require('express-validator');

const app = express();
const port = process.env.PORT || 5000; // Or any other port you prefer

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        baseUri: ["'self'"],
        fontSrc: ["'self'", "https:", "data:"],
        formAction: ["'self'"],
        frameAncestors: ["'self'"],
        imgSrc: ["'self'", "data:"],
        objectSrc: ["'none'"],
        scriptSrc: ["'self'"],
        scriptSrcAttr: ["'none'"],
        styleSrc: ["'self'", "https:", "'unsafe-inline'"],
        upgradeInsecureRequests: [],
      },
    },
  })
);
app.use(cors({
  origin: ['http://localhost:3000', 'https://www.brightfeetchildcareltd.com'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
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

app.post(
  '/api/contact',
  [
    check('name').trim().notEmpty().withMessage('Name is required'),
    check('email').isEmail().withMessage('Valid email is required'),
    check('message').trim().notEmpty().withMessage('Message is required').isLength({ min: 10 }).withMessage('Message must be at least 10 characters long'),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message } = req.body;
    console.log('Received contact form data:');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    res.status(200).json({ message: 'Message sent successfully!' });
  }
);

app.listen(port, '0.0.0.0', () => {
  console.log(`Backend server running on http://localhost:${port}`);
});