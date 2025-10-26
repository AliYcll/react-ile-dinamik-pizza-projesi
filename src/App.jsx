import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Success from "./pages/Success";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [orderData, setOrderData] = useState(null);

  return (
    <Router>
      <ScrollToTop />
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/order"
          render={() => <Order setOrderData={setOrderData} />}
        />
        <Route
          path="/success"
          render={() => <Success orderData={orderData} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
