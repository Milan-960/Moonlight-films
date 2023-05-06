import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { auth, db } from "@shared/firebase";

import { useAppDispatch } from "@store/hooks";
import { setCurrentUser } from "@store/slice/authSlice";

// This is the first way
const Home = lazy(async () => ({
  default: (await import("@pages/home-page")).Home,
}));

// Add a fixed delay so you can see the loading state
async function DelayForDemo(promise: any) {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  return promise;
}

const Explore = lazy(() => DelayForDemo(import("@pages/Explore")));
const History = lazy(() => DelayForDemo(import("@pages/History")));
const MovieWatch = lazy(() => DelayForDemo(import("@pages/Movie/MovieWatch")));
const MovieInfo = lazy(() => DelayForDemo(import("@pages/Movie/MovieInfo")));
const Profile = lazy(() => DelayForDemo(import("@pages/Profile")));

const Protected = lazy(() => DelayForDemo(import("@common/Protected")));

const Auth = lazy(() => DelayForDemo(import("@pages/Auth")));
const Bookmarked = lazy(() => DelayForDemo(import("@pages/Bookmarked")));

const Error = lazy(() => DelayForDemo(import("@pages/Error")));
const Search = lazy(() => DelayForDemo(import("@pages/Search")));
const TVInfo = lazy(() => DelayForDemo(import("@pages/TV/TVInfo")));
const TVWatch = lazy(() => DelayForDemo(import("@pages/TV/TVWatch")));

// 2nd mathod
// const Home = lazy(async () => {
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   return await import("@pages/home-page");
// });

const BaseRoutes = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  // const currentUser = useAppSelector((state) => state.auth.user);

  const [isSignedIn, setIsSignedIn] = useState(
    Number(localStorage.getItem("isSignedIn")) ? true : false
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        dispatch(setCurrentUser(null));
        setIsSignedIn(false);
        localStorage.setItem("isSignedIn", "0");
        return;
      }

      setIsSignedIn(true);
      localStorage.setItem("isSignedIn", "1");

      if (user.providerData[0].providerId === "google.com") {
        onSnapshot(doc(db, "users", user.uid), (doc) => {
          dispatch(
            setCurrentUser({
              displayName:
                doc.data()?.lastName + " " + doc.data()?.firstName || "",
              email: user.email,
              emailVerified: user.emailVerified,
              photoURL: doc.data()?.photoUrl || "",
              uid: user.uid,
            })
          );
        });
      } else if (user.providerData[0].providerId === "facebook.com") {
        onSnapshot(doc(db, "users", user.uid), (doc) => {
          dispatch(
            setCurrentUser({
              displayName:
                doc.data()?.lastName + " " + doc.data()?.firstName || "",
              email: user.email,
              emailVerified: user.emailVerified,
              photoURL: doc.data()?.photoUrl || "",
              // user.photoURL + "?access_token=" + doc.data()?.token || "",
              // doc.data()?.photoUrl.startsWith("https://i.ibb.co") ?
              uid: user.uid,
            })
          );
        });
      } else {
        onSnapshot(doc(db, "users", user.uid), (doc) => {
          dispatch(
            setCurrentUser({
              displayName:
                doc.data()?.lastName + " " + doc.data()?.firstName || "",
              photoURL: doc.data()?.photoUrl || "",
              email: user.email,
              emailVerified: user.emailVerified,
              uid: user.uid,
            })
          );
        });
      }
    });
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, location.search]);

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="movie/:id" element={<MovieInfo />} />
      <Route path="tv/:id" element={<TVInfo />} />
      <Route path="movie/:id/watch" element={<MovieWatch />} />
      <Route path="tv/:id/watch" element={<TVWatch />} />
      <Route path="explore" element={<Explore />} />
      <Route path="search" element={<Search />} />
      <Route path="auth" element={<Auth />} />
      <Route
        path="bookmarked"
        element={
          <Protected isSignedIn={isSignedIn}>
            <Bookmarked />
          </Protected>
        }
      />
      <Route
        path="history"
        element={<Protected isSignedIn={isSignedIn}>{<History />}</Protected>}
      />
      <Route
        path="profile"
        element={
          <Protected isSignedIn={isSignedIn}>
            <Profile />
          </Protected>
        }
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default BaseRoutes;
