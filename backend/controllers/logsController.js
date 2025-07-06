import Joi from "joi";
import { readLogs, writeLog } from "../utils/fileHandler.js";
import { filterLogs } from "../services/logService.js";

// Schema validation
const logSchema = Joi.object({
  level: Joi.string().valid("error", "warn", "info", "debug").required(),
  message: Joi.string().required(),
  resourceId: Joi.string().required(),
  timestamp: Joi.string().isoDate().required(),
  traceId: Joi.string().required(),
  spanId: Joi.string().required(),
  commit: Joi.string().required(),
  metadata: Joi.object().required(),
});

export const ingestLog = async (req, res, next) => {
  try {
    const { error } = logSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const logs = await readLogs();
    logs.unshift(req.body);
    await writeLog(logs);
    const io = req.app.get("io");
    io.emit("newLog", req.body);

    res.status(201).json(req.body);
  } catch (err) {
    next(err);
  }
};

export const getLogs = async (req, res, next) => {
  try {
    const logs = await readLogs();
    const filtered = filterLogs(logs, req.query);
    res.status(200).json(filtered);
  } catch (err) {
    next(err);
  }
};
export const deleteLogs=async (req, res, next) => {
  try {
    const fs = await import("fs/promises");
    await fs.writeFile("./logs.json", JSON.stringify([], null, 2));
    res.status(200).json({ message: "All logs cleared." });
  } catch (err) {
    next(err);
  }
}