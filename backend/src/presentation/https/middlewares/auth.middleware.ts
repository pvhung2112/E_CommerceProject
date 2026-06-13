import { Request, Response, NextFunction } from 'express';
import { JwtService } from '../../../infrastructure/services/jwt.service';

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  // Authorization gồm 2 phần: Bearer và token
  // Mà trong token lại gồm 3 phần: header.payload.signature
  const token = req.headers.authorization?.split(' ')[1];  
//split là tách từ string thành mảng ,còn join là ngược lại
  if (!token) {
    res.status(401).json({ message: 'Token không tồn tại' });
    return;
  }

  try {
   
    const decoded = JwtService.verifyAccessToken(token); 

    (req as any).user = decoded;
    next(); 
  } catch (error) {
    res.status(403).json({ message: 'Token không hợp lệ hoặc hết hạn' });
    return;
  }
};