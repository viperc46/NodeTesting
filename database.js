const mongo = require('mongodb').MongoClient;

class Database{
    async connect(){
        const _this = this; 
        var mongoDB = 'mongodb+srv://viper:ducoface222@sbigbot-ohetw.azure.mongodb.net/SbigData?retryWrites=true&w=majority'

        mongoose.connect(mongoDB, { useNewUrlParser: true });
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'MongoDB connection error:'));

    }
}

