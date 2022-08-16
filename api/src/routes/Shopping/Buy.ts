//@ts-nocheck

import express  from "express";
import {Request, Response, NextFunction} from 'express'
import Stripe from "stripe";
const router = express.Router()


const stripe = new Stripe(process.env.SECRET_KEY)

router.post('/buy', async (req:Request, res:Response, _next:NextFunction)=>{

    
    try {
        const {id, amount} = req.body
        const payment = await stripe.paymentIntents.create({
            amount,
            currency:'usd',
            description:'freddie mercury',
            payment_method:id,
            confirm:true
        })
        res.status(201).json({success: 'successfull payment'})
    } catch (error) {
        res.json({message: error.raw.message})
    }

})
export default router;