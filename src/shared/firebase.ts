import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRrmSoZJ6f8wMnAahFZtjnUFWIPXvfZtU",
  authDomain: "moonlight-movie.firebaseapp.com",
  projectId: "moonlight-movie",
  storageBucket: "moonlight-movie.appspot.com",
  messagingSenderId: "24438338141",
  appId: "1:24438338141:web:4e936572063d1bef6713b4",
  measurementId: "G-6DGB7R41T2",
};

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
//   measurementId: process.env.REACT_APP_measurementId,
// };

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
