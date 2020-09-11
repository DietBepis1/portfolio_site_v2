const mongoose = require('mongoose');
const config = require('config');

//grab MongoURI from default.json
const db = config.get('mongoURI');

//connection settings
connectSettings = {
    'useNewUrlParser': true,
    'useUnifiedTopology': true,
}

const connectDB = async () => {
    try {
        await mongoose.connect(db, connectSettings);
        console.log('YAY! MongoDB has connected! ᕙ(▀̿̿Ĺ̯̿̿▀̿ ̿) ᕗ');
    } catch(err) {
        console.error(err.message);
        //exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;