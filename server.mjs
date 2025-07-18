// import express from "express";
// import { createFiles } from "./controller.mjs";
// import { globalMiddleware, localMiddleware } from "./middleware.mjs";
// import { errorController, undefinedRouteHandler } from "./error.mjs";
// const server = express();
// const port = 5000;

// server.use(express.json());

// server.use(globalMiddleware);

// server.post("/files", localMiddleware, createFiles);
// server.get("/files", localMiddleware, createFiles);

// // Catch-all route
// server.all(/^.*$/, undefinedRouteHandler);

// // error controller
// server.use(errorController);

// server.listen(port, () => {
//   console.log(`server started on ${port}`);
// });

import express from "express";
import "dotenv/config";

import {
  registerController,
  loginController,
  forgotPasswordController,
} from "./controllers/user.mjs";
import { prizeController } from "./controllers/prize.mjs";
import { globalMiddleware, authMiddleware } from "./middleware.mjs";
import { errorController, undefinedRouteHandler } from "./error.mjs";
const server = express();
const port = process.env.PORT || 8000;

server.use(express.json());

server.use(globalMiddleware);

server.post("/register", registerController);
server.post("/login", loginController);
server.post("/forgot_password", forgotPasswordController);
server.get("/prize", authMiddleware, prizeController);

// Catch-all route
server.all(/^.*$/, undefinedRouteHandler);

// error controller
server.use(errorController);

server.listen(port, () => {
  console.log(`server started on ${port}`);
});
