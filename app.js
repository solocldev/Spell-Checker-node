import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import getObject from './Routes/getObject.js'
import addLog from './Routes/addLog.js'

const app = express()

dotenv.config()
app.use(cors())
app.use(express.json())
mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log('connected to mongo')).catch(error => console.error(error))

app.use('/api/get', getObject)
app.use('/api/add', addLog)

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log('Server started on 4000')
})