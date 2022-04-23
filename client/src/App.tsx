import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import Router from "./Router";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="min-h-screen">
          <Router />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
