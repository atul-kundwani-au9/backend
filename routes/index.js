const indexRouter = require('express').Router();
const isAuthChecker = require('../auth/isAuth');

const authRouter = require('./authRouter');
const imageRouter = require('./imageRouter');
const jsonPatchRouter = require('./jsonPatchRouter');
const addressRouter = require('./addressRouter');

// public routes
indexRouter.use('/auth', authRouter);

/* NOTE: I have made separted routes for Address, JsonPatch and Images. It is because if in future we want to add new end point
to these routes, then we easily increase the end point and the code will be scalable
In the same it contains separate files of controllers and models */

// protected routes
indexRouter.use('/address', isAuthChecker, addressRouter);
indexRouter.use('/jsonPatch', isAuthChecker, jsonPatchRouter);
indexRouter.use('/image', isAuthChecker, imageRouter);

module.exports = indexRouter;
