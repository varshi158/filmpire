import { CssBaseline } from "@mui/material"; // Ensures consistent baseline styles across different browsers
import { Route, Routes } from "react-router-dom"; // Handles routing for different pages

import useStyles from "./styles";
import { Movies, MovieInformation, Actors, Profile, Navbar } from "./component-exports";


const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />

        {/* App routes */}
        <Routes>
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/" element={<Movies />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;