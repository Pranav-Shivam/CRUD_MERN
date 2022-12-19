const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/testdb")

const connectDB=async()=>{
    try {
        const con=await mongoose.connect("mongodb://localhost:27017/testdb",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }) 
        console.log(`MongoDB connected : ${con.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports=connectDB