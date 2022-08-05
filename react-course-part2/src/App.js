import { Route } from "react-router-dom";

import AllMeetupsPages from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <Route path="/">
        <AllMeetupsPages />
      </Route>
      <Route path="/new-meetups">
        <NewMeetupPage />
      </Route>
      <Route path="/favorites">
        <FavoritesPage />
      </Route>
    </div>
  );
}

export default App;
