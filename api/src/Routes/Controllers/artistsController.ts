import { PrismaClient } from '@prisma/client';
import { Response,Request } from 'express';
const prisma = new PrismaClient({log: ['query', 'info']})//para ver que es lo que hace prisma por debajo
// export const postUser = async (req:Request, res:Response) => {
//     const 
// }

export const createArtist = async (req:Request) => {
    // res.status(201).json('hola desde controllers')
    try {
        
        const newArtist = await prisma.artist.create( {data : req.body})
        return newArtist
        // res.status(201).json({data: newArtist})
    } catch (error) {
        return error
    }
}


export const getArtists = async (_req:Request, res:Response) => {
    

    const artists = await prisma.artist.findMany({
        // include:{
            
        // }
    })
    res.status(200).json(artists)
}





export const getArtistsId = async (id:string) => {
    console.log('hola desde id');
    try {
        
        const artistId = await prisma.artist.findFirst({
            where:{
                id
            }
        })
        return artistId
        // res.status(200).json({data:artistId})
    } catch (error) {
        return error
    }
} 


export const getArtistsName = async (req: Request, res: Response) => {
    console.log(req.query.name)

    try {
        // if (nickName) {
        const artistName = await prisma.artist.findMany({
            where: {
                name: {
                    contains: `${req.query.name}`
                }
            },
        })
        // if(!artistName ){
        //     res.status(404).json({data:'no hay artistas con ese nombre'})
            
        // }
        res.status(200).json({ data: artistName })
        
        // return artistName
        // }
    } catch (error) {
        return error
    }
}
// export const getArtistsName = async (req: Request, res: Response) => {
//     console.log(req.query.name)

//     try {
//         // if (nickName) {
//         const artistName = await prisma.artist.findMany({
//             where: {
//                 name: {
//                     contains: `${req.query.name}`,
//                 },
//             },
//         })
//         // return artistName
//         res.status(201).json({ data: artistName })
//         // }
//     } catch (error) {
//         return error
//     }
// }


