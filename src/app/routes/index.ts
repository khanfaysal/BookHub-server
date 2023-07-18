import express from "express";
import { BookRoutes } from "../modules/books/books.route";
import { UserRoutes } from "../modules/user/user.route";

const router = express.Router();
const moduleRoutes = [
    {
        path:'/books',
        route: BookRoutes
    },
    {
        path:'/user',
        route: UserRoutes
    },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
