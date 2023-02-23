import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const app = initializeApp({
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// });

const firebaseConfig = {
  apiKey: "AIzaSyBMgU74V10ev-PNOeYR_I94GWP3Q7dNVAU",
  authDomain: "web-server-183311.firebaseapp.com",
  projectId: "web-server-183311",
  storageBucket: "web-server-183311.appspot.com",
  messagingSenderId: "558395013527",
  appId: "1:558395013527:web:c7c941fd5954798cc16cd2",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyC5V0Pm-YJV9h0kyX9aBgrKrs3_J3R2Foo",
//   authDomain: "pvt-comments.firebaseapp.com",
//   databaseURL: "https://pvt-comments-default-rtdb.firebaseio.com",
//   projectId: "pvt-comments",
//   storageBucket: "pvt-comments.appspot.com",
//   messagingSenderId: "700353567702",
//   appId: "1:700353567702:web:f36bbbae9c78ac1e3ea277",
// };
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// export const db = initializeFirestore(app, {
//   experimentalForceLongPolling: true,
// });
export const auth = getAuth(app);
