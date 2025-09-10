// functions/src/index.ts (Firebase v2)
import {setGlobalOptions} from "firebase-functions/v2/options";
import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

// Export auth functions
export {onUserSignup} from "./firebase/authentication";
export {onUserDelete} from "./firebase/authentication";

// Minimal sample endpoint
export const hello = onRequest(async (req, res) => {
  if (req.method !== "GET") {
    res.status(405).send("Method Not Allowed");
    return;
  }
  logger.info("hello called", {ip: req.ip});
  res.status(200).json({
    ok: true,
    message: "Hello from dad-firebase-functions-template!",
  });
});

// Global defaults (safe + cheap). Tweak later per function if needed.
setGlobalOptions({
  region: "us-central1",
  memory: "256MiB",
  maxInstances: 10,
});