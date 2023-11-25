"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
exports.Config = {
    secret: process.env.JWT_SECRET || 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5ODgyMjQ0NCwiaWF0IjoxNjk4ODIyNDQ0fQ.5TVMbvZoSSbNxcdP2ltyu4-Qbaec9LMAKlmTnslK8lo',
    corsAllowedOrigin: process.env.CORS_ALLOWED_ORIGIN || 'http://localhost:4500',
};
