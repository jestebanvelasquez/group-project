import express from 'express';
import cors from 'cors';
import routes from './routes/index.routes';
import dotenv from 'dotenv';
dotenv.config();

export const SERVER_TOKEN_EXPIRETIME = process.env.SERVER_TOKEN_EXPIRETIME || 3600;
export const SERVER_TOKEN_ISSUER = process.env.SERVER_TOKEN_ISSUER || "coolIssuer";
export const SERVER_TOKEN_SECRET = process.env.SERVER_TOKEN_SECRET || "superencryptedsecret";

const server = express();

server.use(express.json())//transforma body a json

//midlewares:
server.use((_req: any, _resp: any, next: () => void) => {
  next();
}, cors({ maxAge: 84600 }));

// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const allowedOrigins = ['*'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

// Then pass these options to cors:
server.use(cors(options));

server.use('/', routes);

export default server;