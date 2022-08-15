import jwt from 'jsonwebtoken';
import { SERVER_TOKEN_EXPIRETIME, SERVER_TOKEN_ISSUER, SERVER_TOKEN_SECRET } from '../app';
import IUser from '../interfaces/user';

const signJWT = (user: IUser, callback: (error: Error | null, token: string | null) => void): void => {
    var timeSinchEpoch = new Date().getTime();
    var expirationTime = timeSinchEpoch + Number(SERVER_TOKEN_EXPIRETIME) * 100000;
    var expirationTimeInSeconds = Math.floor(expirationTime / 1000);

    try {
        jwt.sign(
            {
                id: user.id
            },
            SERVER_TOKEN_SECRET,
            {
                issuer: SERVER_TOKEN_ISSUER,
                algorithm: 'HS256',
                expiresIn: expirationTimeInSeconds
            },
            (error, token) => {
                if (error) {
                    callback(error, null);
                } else if (token) {
                    callback(null, token);
                }
            }
        );
    } catch (error: any) {
        callback(error, null);
    }
}

export default signJWT;