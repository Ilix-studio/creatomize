const mongoose = require("mongoose");

const connectionString = "process.env.DATABASE_CONNECTION";

const connectDB = async() => {
    try {
        await mongoose.connect(connectionString,{
            useUnifiedTopology: true,
            useNewUrlParser:true
        });
        console.log(`MongoDb connected 😎`);
    } catch (error) {
        console.log(`MongoDb fail to connect 🤒`);
        console.log(error);
        process.exit(1);
    }
}
module.exports=connectDB;