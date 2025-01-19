
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './db.js';
import { FromData } from './fromData.model.js';



dotenv.config({});

const app = express();
app.use(cors());
// middleware
app.use(express.json());





app.post("/fromSubmit", async (req, res) => {
    console.log('JJJJJJJ')
    try {
        const { name, email, phone, details } = req.body;
        if (!name || !email || !phone || !details) {
            return res.status(400).json({ message: "Something went missing.", missing: true, success: false });
        }

        const fromData = new FromData(
            { name, email, phone, details }
        );

        const response = await fromData.save();
        let fromDataId = response._id;

        return res.status(200).json({
            message: 'from submitted successfully',
            success: true,
            fromDataId
        });
    } catch (e) {
        console.log('ERROR', e);
        return res.status(500).json({ message: "Internal Server Error.", missing: false, success: false });
    }
});




const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    connectDb();
    console.log(`listening on ${PORT}`);
})