import express from 'express'
import { Object } from '../models/object.js'
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const object = await Object.find({ "Id": "cauliflower1" })
        res.json(object[0])
    } catch (error) {
        console.log(error);
        res.send(error)
    }
})

export default router
