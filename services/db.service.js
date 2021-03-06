const mongoose = require('mongoose');

const initClient = () => {
    mongoose.set('useCreateIndex', true);
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(() => {
        console.log('Mongoose is connected');
    }, (error) => {
        console.log('ERROR - Mongoose is not connected');
        console.error(error);
    });
};

module.exports = {initClient};