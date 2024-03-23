import { Request, Response, NextFunction } from "express";

const Index = (req: Request, res: Response, next: NextFunction) =>
  res.status(201).json({ success: true, message: "Translations" });

export const Translations = { Index };
