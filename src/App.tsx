import "./App.css";
import { Suspense } from "react";

import BaseRoutes from "@routes/Routes";
import Preloader from "@components/Preloader/Preloader";

import { HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
    <>
      <div className="App">
        <HelmetProvider>
          <Suspense fallback={<Preloader />}>
            <BaseRoutes />
          </Suspense>
        </HelmetProvider>
      </div>
    </>
  );
};

export default App;
