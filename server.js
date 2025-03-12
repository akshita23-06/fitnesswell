const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql2')
const app = express();
const port = 3000;
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',

  })
  connection.connect()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Add this route to serve login.html as the default page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
  });

app.post('/login', (req, res) => {
    const {  email,  password } = req.body;
    console.log(email , password);

    // Basic validation (add more robust validation)
    if ( !email  || !password) {
        return res.status(400).send('All fields are required.');
    }
    const query = "SELECT * FROM users where email="+email+"and password="+password;
    console.log (query);
    // Store user data in a database (replace with your database logic)
    console.log('User registered:', { fullName, email, phoneNumber, password });

    //In a real application you would store the password as a hash.
    //Example of response.
    res.send('Registration successful!');
});

  
  
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});