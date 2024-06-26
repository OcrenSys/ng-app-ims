/* eslint-disable @typescript-eslint/no-explicit-any */
interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  /**
   * Built-in environment variable.
   * @see Docs https://github.com/chihab/dotenv-run/packages/angular#node_env.
   */
  [key: string]: unknown;
  // Add your environment variables below
  readonly NODE_ENV: string;
  readonly IMS_FIREBASE_API_KEY: string;
  readonly IMS_FIREBASE_AUTH_DOMAIN: string;
  readonly IMS_FIREBASE_PROJECT_ID: string;
  readonly IMS_FIREBASE_STORAGE_BUCKET: string;
  readonly IMS_FIREBASE_MESSAGING_SENDER_ID: string;
  readonly IMS_FIREBASE_APP_ID: string;
  readonly IMS_FIREBASE_MEASUREMENT_ID: string;

  readonly IMS_SERVER_URL: string;
  readonly IMS_SERVER_API: string;

}

/*
 * Remove all the deprecated code below if you're using import.meta.env (recommended)
 */

/****************************** DEPREACTED **************************/
/**
 * @deprecated process.env usage
 * prefer using import.meta.env
 * */
// declare var process: {
//   env: {
//     NODE_ENV: string;
//     [key: string]: any;
//   };
// };

// If your project references @types/node directly (in you) or indirectly (as in RxJS < 7.6.0),
// you might need to use the following declaration merging.
// declare namespace NodeJS {
//   export interface ProcessEnv {
//     readonly NODE_ENV: string;
//     // Add your environment variables below
//   }
// }

// If you're using Angular Universal and process.env notation, you'll need to add the following to your tsconfig.server.json:
/* In your tsconfig.server.json */
// {
//   "extends": "./tsconfig.app.json",
//   ...
//   "exclude": [
//     "src/env.d.ts"
//   ]
// }

/*********************************************************************/
