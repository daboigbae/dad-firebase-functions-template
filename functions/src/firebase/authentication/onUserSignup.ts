// functions/src/firebase/authentication.ts
import * as functions from "firebase-functions/v1";
import * as logger from "firebase-functions/logger";

// Handle new user creation
export const onUserSignup = functions.auth
  .user()
  .onCreate(async (user) => {
    logger.info("New user created", {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      creationTime: user.metadata?.creationTime,
    });

    // Add your custom logic here for new user signup
    // Examples:
    // - Create user profile in Firestore
    // - Send welcome email
    // - Set up default preferences
    // - Add to analytics
    // - Create user-specific collections
    
    // Example: Log the signup event
    logger.info("User signup processed successfully", { uid: user.uid });
  });
