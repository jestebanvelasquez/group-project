import { PrismaClient } from '@prisma/client';
import { Response, Request } from 'express';

const prisma = new PrismaClient({ log: ['query', 'info'] });

const artistController = {
    getArtists: async (_req: Request, res: Response) => {
        const artists = await prisma.artist.findMany({
            // include:{

            // }
        })
        res.status(200).json(artists)
    }
}

/* 
export const createArtist = async (req: Request) => {
    // res.status(201).json('hola desde controllers')
    try {
        const newArtist = await prisma.artist.create({ data: req.body })
        return newArtist
        // res.status(201).json({data: newArtist})
    } catch (error) {
        return error
    }
} */

/* export const getArtistsId = async (id: string) => {
    try {
        const artistId = await prisma.artist.findFirst({
            where: {
                id
            }
        });
        return artistId
    } catch (error) {
        return error
    }
} */


/* export const getArtistsName = async (req: Request, res: Response) => {
    console.log(req.query);
    try {
        if (req.query.name) {
            const artistName = await prisma.artist.findMany({
                where: {
                    name: `${req.query.name}`
                }
            });
            console.log(artistName);
            res.status(200).json({ data: artistName });
        }

        // if (nickName) {
        // if(!artistName ){
        //     res.status(404).json({data:'no hay artistas con ese nombre'})

        // }

        // return artistName
        // }
    } catch (error) {
        return error
    }
} */
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
export default artistController;