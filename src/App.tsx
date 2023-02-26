import "./App.css";
import { Suspense } from "react";

import BaseRoutes from "@routes/Routes";
import Preloader from "@components/Preloader/Preloader";

const App = () => {
  return (
    <>
      <div className="App">
        <Suspense fallback={<Preloader />}>
          <BaseRoutes />
        </Suspense>
      </div>
    </>
  );
};

export default App;
