import { Request, Response, NextFunction } from "express";

const Index = (req: Request, res: Response, next: NextFunction) =>
  res.status(201).json({ success: true, message: "Books Index" });

const Show = (req: Request, res: Response, next: NextFunction) =>
  res.status(201).json({ success: true, message: "Books show" });

export const Books = { Index, Show };
