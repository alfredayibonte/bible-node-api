import cors from "cors";
import { config } from "dotenv";
import express from "express";

import { Books } from "controllers/Books";
import { Genres } from "controllers/Genres";
import { Translations } from "controllers/Translations";

import { ErrorHandler, Logs, NotFound } from "middlewares/index";

const routes = express();

routes.use(cors());
routes.use(express.json());
routes.use(express.urlencoded({ extended: true }));

config();

routes.use(Logs);

routes.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Hello world!" });
});

routes.use("/books", Books.Index);
routes.use("/genres", Genres.Index);
routes.use("/translations", Translations.Index);

routes.use(NotFound);
routes.use(ErrorHandler);

export default routes;
