import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://sumopaul1998:rTGTNTO2CFLrXkyk@cluster0.hdnuq.mongodb.net/');
        // await mongoose.connect("mongodb://127.0.0.1:27017/bigbusket")
        console.log('mongodb connection established');
    } catch (e) {
        console.log('mongodb connection failed');
        console.log(e);
    };
}
export default connectDb;