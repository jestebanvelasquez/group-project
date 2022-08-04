import express from "express";// ESModules
import { PrismaClient } from '@prisma/client';
const router = express.Router()
import{ getArtists, getArtistsId } from './Controllers/artistsController'
const prisma = new PrismaClient()

//Method Post:
// http://localhost:4000/artist

router.post('/', async(req, res) =>{
    const newUser = await prisma.artist.create({
        data: req.body,
        
    })
    
    res.status(201).json({data:newUser})
})

//Method Get:
// http://localhost:4000/artist
router.get('/', getArtists)

//Method Get/:id:
// http://localhost:4000/artist
router.get('/:id', getArtistsId)




export default router;






// json Artista {
//     id            String @id @default(uuid())
//   email         String @unique
//   nickName      String @unique
//   name          String
//   lastName      String
//   city          String
//   country       String
//   eventName     String
//   description   String 
//   price         Int
//   duration      Int
//   isActive      Boolean 
//   categorys     Array ids 
// }

// json usuario{
//     id            String @id @default(uuid())
//     email         String @unique
//     firstName     String
//     lastName      String
//     createAt      DateTime @default(now())
//     updateAt      DateTime
//     show          User_Artist[]// relacion muchos a muchos 1!
// }