//3. Write a function/API that will return all the tweets to show on the
//dashboardof a particular user. Please make sure to return the data in json.

import express from 'express'
import Users from '../models/userModel.js'

const userRouter = express.Router()

userRouter.get('/tweets/:id', async(req, res) => {
    const tweet = await Users.findById(req.params.id)
    if(tweet){
        res.send(tweet)
    } else{
        res.send({message: 'not found'})
    }
})

export default userRouter;

//for sending data in json format we write in main file of backend

app.use(express.json());