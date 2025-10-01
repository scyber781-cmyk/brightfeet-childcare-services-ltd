module.exports = (req, res) => {
  if (req.method === 'POST') {
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
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};