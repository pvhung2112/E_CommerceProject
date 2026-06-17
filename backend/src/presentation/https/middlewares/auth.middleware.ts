import { Request, Response, NextFunction } from 'express';
import { JwtService } from '../../../infrastructure/services/jwt.service';
import jwt from 'jsonwebtoken';

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  // Authorization gồm 2 phần: Bearer và token
  // Mà trong token lại gồm 3 phần: header.payload.signature
  const token = req.headers.authorization?.split(' ')[1];  
  //split là tách từ string thành mảng ,còn join là ngược lại
  if (!token) {
    res.status(401).json({ 
      message: 'Token không tồn tại',
      code: 'TOKEN_MISSING'
     })
    return;
  }

  try {
   
    const decoded = JwtService.verifyAccessToken(token); 

    (req as any).user = decoded;
    next(); 
  } catch (error) {
    if(error instanceof jwt.TokenExpiredError){
      res.status(401).json({ 
          message: 'Access Token đã hết hạn',
          code: 'TOKEN_EXPIRED' 
      });
      return;
    }
    if (error instanceof jwt.JsonWebTokenError) {
      res.status(403).json({ 
          message: 'Token không hợp lệ hoặc bị làm giả',
          code: 'TOKEN_INVALID' 
      });
      return;
    }
    res.status(500).json({ 
        message: 'Lỗi hệ thống khi xác thực token',
        code: 'INTERNAL_AUTH_ERROR'
    });
    return;
  }
};