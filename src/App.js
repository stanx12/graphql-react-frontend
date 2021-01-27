import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { Auth, Bookings, Events } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect from="/" to="/auth" exact />
        <Route path="/auth" component={Auth} />
        <Route path="/bookings" component={Bookings} />
        <Route path="/events" component={Events} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
