import { Request, Response, NextFunction } from "express";

export const Logs = (req: Request, res: Response, next: NextFunction) => {
  // do logging
  console.log(`Resource requested: ${req.method} ${req.originalUrl}`);
  next();
};
