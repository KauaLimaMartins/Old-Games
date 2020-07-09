import { verify } from 'jsonwebtoken';

export default function verifyToken(token: string): boolean {
    try {
        verify(token, String(process.env.SECRET));

        return true;
    } catch {
        return false;
    }
}
