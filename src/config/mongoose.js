const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()


exports.dbconnect = () => {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to database'))
    .catch(() => console.log('Failed to connect to database.'));
}
