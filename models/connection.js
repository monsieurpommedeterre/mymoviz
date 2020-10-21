var mongoose = require('mongoose');
require('dotenv').config();

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology: true,
    useNewUrlParser: true
}

mongoose.connect(process.env.MONGO_CONNECTION,
    options,
    function(err){
        console.log(err)
    }
)

module.exports = mongoose