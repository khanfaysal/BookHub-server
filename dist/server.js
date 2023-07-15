"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDB = exports.connectDB = void 0;
const mongodb_1 = require("mongodb");
const config_1 = __importDefault(require("./config"));
const url = config_1.default.database_url || 'mongodb://localhost:27017';
const dbName = 'your-database-name';
let db;
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield mongodb_1.MongoClient.connect(url);
        db = client.db(dbName);
        console.log('Connected to MongoDB');
    }
    catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
});
exports.connectDB = connectDB;
const getDB = () => {
    if (!db) {
        throw new Error('Database not connected');
    }
    return db;
};
exports.getDB = getDB;
