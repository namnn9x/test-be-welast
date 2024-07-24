import { Router } from "express";
import reposRouter from "./repos";

const router = Router()
router.use(reposRouter)

export default router