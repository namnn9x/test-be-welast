import axios from "axios";
import { Router } from "express";
import { getRepos } from "../../lib/repos";

const router = Router();
const reposRouter = Router();
reposRouter.use("/repos", router);

router.use("/get-list", async (_, res) => {
  try {
    const sortedRepos = await getRepos()
    res.json(sortedRepos);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

export default reposRouter;
