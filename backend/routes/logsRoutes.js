import express from "express";
import {
  ingestLog,
  getLogs,
  deleteLogs
} from "../controllers/logsController.js";

const router = express.Router();

router.post("/", ingestLog);
router.get("/", getLogs);
router.delete("/", deleteLogs);
export default router;
