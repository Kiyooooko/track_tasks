// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
//import { initializeApp } from 'firebase/app';

export const environment = {
  firebase: {
    projectId: 'tracker-1a55a',
    appId: '1:583532468771:web:2a0c35a2651f90cd252f96',
    databaseURL:
      'https://tracker-1a55a-default-rtdb.europe-west1.firebasedatabase.app',
    storageBucket: 'tracker-1a55a.appspot.com',
    apiKey: 'AIzaSyAIAuqzUmImApgRZnvs5emT61sq8_cugww',
    authDomain: 'tracker-1a55a.firebaseapp.com',
    messagingSenderId: '583532468771',
  },
  production: false,
};

//const app = initializeApp(environment.firebase);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
