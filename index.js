import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js'
import expenseRoutes from './routes/expense.js'
dotenv.config();
const app = express();
app.use(cors({
    origin: "*",
}));

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/expense', expenseRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB Connected"))
.catch((err)=> console.log("MongoDB Error:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`);
})
