// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";
export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyDQVkSVidyyZHG3HMqmEJ7EfB9AEEJBcXU",
    authDomain: "simon-805e1.firebaseapp.com",
    databaseURL: "https://simon-805e1-default-rtdb.firebaseio.com",
    projectId: "simon-805e1",
    storageBucket: "simon-805e1.firebasestorage.app",
    messagingSenderId: "675746694458",
    appId: "1:675746694458:web:34fac41885629f73777c03",
    measurementId: "G-E2DWF1Y1LK"
  }
};
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
