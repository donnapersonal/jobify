import { Router } from "express";
const router = Router();

import { getAllJobs, getSingleJob, createJobs, editJob, deleteJobs, showStats } from "../controllers/jobController.js";
import { validateJobInput, validateIdParam } from "../middleware/validationMiddleware.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";

router
  .route("/")
  .get(getAllJobs)
  .post(checkForTestUser, validateJobInput, createJobs);

router
  .route("/stats")
  .get(showStats)

router
  .route("/:id")
  .get(validateIdParam, getSingleJob)
  .patch(checkForTestUser, validateJobInput, validateIdParam, editJob)
  .delete(checkForTestUser, validateIdParam, deleteJobs);

export default router;