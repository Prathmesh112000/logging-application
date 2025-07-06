import fs from "fs/promises";

const FILE_PATH = "./logs.json";

export const readLogs = async () => {
  try {
    await fs.access(FILE_PATH).catch(async () => {
      await fs.writeFile(FILE_PATH, JSON.stringify([]));
    });
    const data = await fs.readFile(FILE_PATH, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    throw new Error("Error reading logs");
  }
};

export const writeLog = async (logs) => {
  try {
    await fs.writeFile(FILE_PATH, JSON.stringify(logs, null, 2));
  } catch (err) {
    throw new Error("Error writing logs");
  }
};
