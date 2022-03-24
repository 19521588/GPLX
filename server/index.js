const express = require('express');
const mongoose = require('mongoose');

const authRouter = require('./routers/auth')

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://Admin:1747011476cH.@gplx.xfihf.mongodb.net/GPLX?retryWrites=true&w=majority`, {
            // useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false
        })
        console.log("MongoDB connected")
    } catch (err) {
        console.log(err.message)
        process.exit(1)

    }
}
connectDB()

const app = express();

app.use('/api/auth', authRouter)


const PORT = 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))