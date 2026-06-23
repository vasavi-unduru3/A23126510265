import { AppBar, Toolbar, Typography } from "@mui/material";
import Notifications from "./pages/Notifications";

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Notification Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Notifications />
    </>
  );
}

export default App;