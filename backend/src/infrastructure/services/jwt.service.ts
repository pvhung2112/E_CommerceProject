import jwt from 'jsonwebtoken';
import { JWT_CONFIG } from '../configs/jwt';
 // Tạo token(header.payload.sign) header là ngầm , payload
export class JwtService {
  
  static generateAccessToken(payload: any): string {
    return jwt.sign(payload, JWT_CONFIG.ACCESS.SECRET as string, {
      expiresIn: JWT_CONFIG.ACCESS.EXPIRATION,
    } as any);
  }

  static verifyAccessToken(token: string): any {
    try {
      return jwt.verify(token, JWT_CONFIG.ACCESS.SECRET as string);
    } catch (error) {
      throw new Error('Invalid access token');
    }
  }


  static generateRefreshToken(payload: any): string {
    return jwt.sign(payload, JWT_CONFIG.REFRESH.SECRET as string, {
      expiresIn: JWT_CONFIG.REFRESH.EXPIRATION,
    } as any);
  }

  
  static verifyRefreshToken(token: string): any {
    try {
      return jwt.verify(token, JWT_CONFIG.REFRESH.SECRET as string);
    } catch (error) {
      throw new Error('Invalid refresh token');
    }
  }

  static decodeToken(token: string): any {
    return jwt.decode(token);
  }
}