import express from 'express'
import { Object } from '../models/object.js'
const router = express.Router()

router.post('/', async (req, res) => {
    const Id = req.body.Id
    const Log = req.body.Log
    try {
        let ob = await Object.find({ Id: Id })
        ob = ob[0]
        if (ob['Logs']) {
            let match = false
            const newOb = ob['Logs'].map(item => {
                console.log(item, Log);
                if (item['Log'] === Log) {
                    match = true
                    return {
                        Log,
                        Num: item.Num ? item.Num + 1 : 1
                    }
                }
                return {
                    Log: item['Log'] ? item['Log'] : Log,
                    Num: item['Num'] ? item['Num'] : 1
                }
            })
            if (!match) {
                newOb.push({ Log, Num: 1 })
            }
            console.log(newOb)
            const obj = await Object.findOneAndUpdate({ Id: Id }, { $set: { Logs: newOb } }, { new: true })
            res.json(obj)
            return
        }

        const object = await Object.findOneAndUpdate(
            { Id: Id },
            { $set: { Logs: [...ob['Logs'], { Log, Num: 1 }] } },
            { new: true }
        )
        res.json(object)
    } catch (error) {
        console.log(error);
        res.send(error)
    }
})

export default router