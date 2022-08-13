//@ts-nocheck
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({ log: ['query', 'info'] });
import { Response, Request, } from 'express';
import Jwt from 'jsonwebtoken';
import bcryp from 'bcrypt'




export const signUp = async (req: Request, res: Response) => {
    try {
        const user = await prisma.users.findFirst({
            where: {
                email: req.body.email
            }
        })
        if (user) {
            return res.status(400).json({ succes: false, error: "User/Email Already Exists" })
        }
        const hashedPassword = await bcryp.hash(
            req.body.password,
            Number(process.env.SALT_ROUNDS)
        )
        console.log(req.body.rol);
        //guardando el user
        const newUser = await prisma.users.create({
            data: {
                email: req.body.email,
                password: hashedPassword,//password cifrada
                city: req.body.city,
                country: req.body.country,
                rol: req.body.rol,
            }
        })
        //creando  el token para el ADMIN:
        if(newUser.rol === 'ADMIN'){
            const adminToken:string = Jwt.sign({user_id: newUser.id}, process.env.TOKEN_SECRET_ADMIN!)
            return res.header('auth-token', adminToken).json({ succes: true, data: newUser.email })
        }
        console.log(newUser.id);
        //creando  el token para el ARTIST:
        if(newUser.rol === 'ARTIST'){
            const artistToken:string = Jwt.sign({user_id: newUser.id}, process.env.TOKEN_SECRET_ARTIST!)
            return res.header('auth-token', artistToken).json({ succes: true, data: newUser.email })
        }
        //creando  el token para el USER:
        if(newUser.rol === 'CONTRACTOR'){const accessToken: string = Jwt.sign({ user_id: newUser.id }, process.env.TOKEN_SECRET_CONTRACTOR!)
        return res.header('auth-token', accessToken).json({ succes: true, data: newUser.email })
    }
    } catch (error) {
        return error
    }
}


export const signIn = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ error: ' Email y Password required' })
        }
        const user = await prisma.users.findUnique({
            where: {
                email: email,
            }
        })
        if (!user) {
            return res.status(404).json({ succes: false, error: 'Email ó Password Incorrecto' })
        }
        const comparePassword = await bcryp.compare(password, user?.password!)
        if (!comparePassword) {
            return res.status(404).json({ succes: false, error: 'Email ó Password Incorrecto' })
        }

         //creando  el token para el ADMIN:
        if(user.rol === 'ADMIN'){
            const adminToken:string = Jwt.sign({user_id: user.id}, process.env.TOKEN_SECRET_ADMIN!)
            return res.header('auth-token', adminToken).json({ succes: true, data: user.email})
        }
        //creando  el token para el ARTIST:
        if(user.rol === 'ARTIST'){
            const artistToken:string = Jwt.sign({user_id: user.id}, process.env.TOKEN_SECRET_ARTIST!)
            return res.header('auth-token', artistToken).json({ succes: true, data: user.email })
        }
        //creando  el token para el CONTRACTOR:
        const token = Jwt.sign({ user_id: user?.id }, process.env.TOKEN_SECRET_CONTRACTOR!)
        return res.status(200).header('auth-token', token).json({ succes: true, data: user.email })
    } catch (error) {
        return res.status(404).json({ succes: false, error: 'Error Server' })
    }
}




export const soloAdmin = async (req: Request, res: Response) => {
    
    try {
    
        const admin = await prisma.users.findUnique({
            where:{
                id: req.user_id
            }
        })
        // res.status(201).json({ data: 'hola desde solo admin' , admin})
        if(admin.rol === 'ADMIN') return res.send(true)
        else{
            return res.send(false)
        }
    } catch (error) {
        return error
    }
}

export const soloArtist = async (_req: Request, res: Response) => {
    res.status(201).json({ data: 'hola desde solo artist' })
}

export const soloContractror = async (_req: Request, res: Response) => {
    res.status(201).json({ data: 'hola desde solo contractor' })
}