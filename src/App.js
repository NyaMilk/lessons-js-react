import React from "react";
import AdminPanel from "./modules/pages/AdminPanel/AdminPanel";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <AdminPanel />
    </Provider>
  );
}

export default App;
