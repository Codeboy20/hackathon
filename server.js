const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// const routes = require('./routes');
// app.use('/api', routes);


// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/hospitalDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log("Connected to MongoDB"))
//   .catch(err => console.error(err));

// app.listen(5000, () => {
//   console.log('Server is running on port 5000');
// });


// const MONGOURI= "mongodb+srv://jaydeep1:ABC@12345@cluster0.jb0xk.mongodb.net/HospitalDB?retryWrites=true&w=majority&appName=Cluster0"

const MONGOURI = "mongodb://localhost:27017/hospitalDB"

const connectDB = async () => {
    try {
        await mongoose.connect(MONGOURI);


        console.log("Connected to MongoDB!!!");

    }
    catch (error) {
        console.log("Connection Error in (/DB/index): ", error);
        process.exit(1);
    }
}

app.listen(5000, () => {
  connectDB();
  console.log('Server is running on port 5000');
});


