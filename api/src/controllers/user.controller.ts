import { PrismaClient } from '@prisma/client';
import { Response, Request, NextFunction } from 'express';
import bcryptjs from 'bcryptjs';
import signJWT from '../functions/signJWT';

const prisma = new PrismaClient({ log: ['query', 'info'] });

const userController = {
    validateToken: async (_req: Request, res: Response, _next: NextFunction) => {
        const token = res.locals.jwt//get id user and token from middleware
        const user = await prisma.usuario.findMany({
            where: {
                AND: {
                    id: token.id,
                    token: token.token
                }
            }
        });

        if (user.length === 0) {
            return res.status(403).json({
                authorized: false
            });
        }
        return res.status(200).json({
            authorized: true
        });
    },
    register: async (req: Request, res: Response, _next: NextFunction) => {
        let { email, password, idPersona } = req.body;

        bcryptjs.hash(password, 10, (hashError, hash): any => {
            if (hashError) {
                return res.status(500).json({
                    message: hashError.message,
                    error: hashError
                });
            }

            //Insert user into db
            return prisma.usuario.create({
                data: {
                    email,
                    password: hash,
                    idPersona
                }
            }).then(user => {
                return res.status(201).json(user);
            }).catch(error => {
                return res.status(500).json({
                    message: error.message,
                    error: error
                });
            })
        });
    },
    login: async (req: Request, res: Response, _next: NextFunction) => {
        let { email, password } = req.body;

        try {
            const user = await prisma.usuario.findUnique({
                where: {
                    email
                }
            });

            if (!user) {
                throw 'El correo ingresado no existe, crea una cuenta para poder ingresar.';
            }

            bcryptjs.compare(password, user.password, (_error, result): any => {
                try {
                    if (result) {
                        signJWT(user, (_error, token): any => {
                            if (_error) {
                                return res.status(401).json({
                                    authorized: false,
                                    error: _error
                                });
                            } else if (token) {
                                return prisma.usuario.update({
                                    where: { email },
                                    data: { token },
                                }).then(() => {
                                    return res.status(200).json({
                                        token
                                    });
                                }).catch(err => {
                                    return res.status(500).json({
                                        error: err
                                    })
                                })
                            }
                        });
                    } else {
                        throw 'La contaseña ingresada es incorrecta.';
                    }
                } catch (error) {
                    res.status(401).json({
                        message: error
                    })
                }
            });
        } catch (error) {
            res.status(401).json({
                message: error
            })
        }
    },
    logout: async (_req: Request, res: Response, _next: NextFunction): Promise<any> => {
        try {
            const token = res.locals.jwt//get id user and token from middleware
            const user = await prisma.usuario.update({
                where: { id: token.id },
                data: { token: null },
            });
            if (user.token === null) {
                delete res.locals.jwt;
                return res.status(200).json({
                    logout: true
                });
            }
            return res.status(500).json({
                logout: false
            });
        } catch (error) {
            res.status(401).json({
                message: error
            })
        }
    },
    getAll: async (_req: Request, res: Response, _next: NextFunction): Promise<any> => {
        try {
            const users = await prisma.usuario.findMany({
                include: {
                    persona: true
                }
            })
            if (!users) {
                throw 'No se encontraron resultados';
            }
            return res.status(200).json(users);
        } catch (error) {
            res.status(500).json({
                message: error
            })
        }
    }
}

export default userController;








