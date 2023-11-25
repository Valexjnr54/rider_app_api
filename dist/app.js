"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const rateLimitMiddleware_1 = __importDefault(require("./middlewares/rateLimitMiddleware"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config/config");
const userAuthRoutes_1 = require("./routes/Auths/userAuthRoutes");
const riderAuthRoutes_1 = require("./routes/Auths/riderAuthRoutes");
const adminAuthRoutes_1 = require("./routes/Auths/adminAuthRoutes");
const userDeliveryRoutes_1 = require("./routes/Users/userDeliveryRoutes");
const proposalRoutes_1 = require("./routes/Riders/proposalRoutes");
const userProposalRoutes_1 = require("./routes/Users/userProposalRoutes");
const deliverRoutes_1 = require("./routes/Riders/deliverRoutes");
const operatingRoute_1 = require("./routes/Admin/operatingRoute");
const route_1 = require("./routes/route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(rateLimitMiddleware_1.default);
app.use((0, cors_1.default)({ origin: config_1.Config.corsAllowedOrigin }));
const route = "/api/v1";
// Configure your routes here
app.get('/', (_req, res) => {
    return res.send('Express Typescript on Vercel');
});
// Authentication Routes Starts
app.use(route + "/auth", userAuthRoutes_1.userAuthRouter);
app.use(route + "/auth", riderAuthRoutes_1.riderAuthRouter);
app.use(route + "/auth", adminAuthRoutes_1.adminAuthRouter);
// Authentication Routes Ends
// User Routes Starts
app.use(route + "/user", userDeliveryRoutes_1.userDeliveryRouter);
app.use(route + "/user", userProposalRoutes_1.userProposalRouter);
// User Routes Starts
// Rider Routes Starts
app.use(route + "/rider", proposalRoutes_1.riderProposalRouter);
app.use(route + "/rider", deliverRoutes_1.riderDeliveryRouter);
// Rider Routes Starts
// Admin Routes Starts
app.use(route + "/admin", operatingRoute_1.adminOperatingRouter);
// Admin Routes Starts
app.use(route, route_1.router);
app.use(express_1.default.urlencoded({ extended: true }));
exports.default = app;
