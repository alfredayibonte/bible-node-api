import { Request, Response, NextFunction } from "express";

const NotFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404);
  const error = new Error(`Not Found ${req.originalUrl}`);
  next(error);
};

const ErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    stack: err.stack,
  });
};

export { NotFound, ErrorHandler };
