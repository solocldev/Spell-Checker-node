import express from 'express'
import { Object } from '../models/object.js'
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const object = await Object.aggregate([{ $sample: { size: 1 } }])
        res.json(object)
    } catch (error) {
        console.log(error);
        res.send(error)
    }
})

export default router
