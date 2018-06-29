// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyBf6y51qJPvpFyLEXPJJyzG7IeOjHTH7sQ",
    authDomain: "mitwitter2-0.firebaseapp.com",
    databaseURL: "https://mitwitter2-0.firebaseio.com",
    projectId: "mitwitter2-0",
    storageBucket: "mitwitter2-0.appspot.com",
    messagingSenderId: "32860498332"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
