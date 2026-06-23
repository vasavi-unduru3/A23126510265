import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CircularProgress,
  Alert,
  Chip,
  Box,
} from "@mui/material";
import api from "../api/axios";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await api.get("/notifications");

      if (response.data.notifications) {
        setNotifications(response.data.notifications);
      } else if (Array.isArray(response.data)) {
        setNotifications(response.data);
      } else {
        setNotifications([]);
      }
    } catch (err) {
      console.log(err);

      if (err.response) {
        setError(`Server Error: ${err.response.status}`);
      } else if (err.code === "ECONNABORTED") {
        setError("Request timed out.");
      } else {
        setError("Unable to connect to server.");
      }

      // Temporary sample data if API fails
      setNotifications([
        {
          type: "Sample Notification",
          message:
            "The API server is currently unavailable.",
          timestamp: new Date().toLocaleString(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
      >
        Notification Dashboard
      </Typography>

      <Typography
        variant="h6"
        align="center"
        sx={{ mb: 3 }}
      >
        Total Notifications: {notifications.length}
      </Typography>

      {loading && (
        <Box textAlign="center">
          <CircularProgress />
          <Typography sx={{ mt: 2 }}>
            Loading...
          </Typography>
        </Box>
      )}

      {!loading && error && (
        <Alert severity="warning" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {notifications.map((item, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Chip
              label={item.type || item.Type}
              color="primary"
              sx={{ mb: 2 }}
            />

            <Typography>
              {item.message || item.Message}
            </Typography>

            <Typography
              variant="caption"
              color="text.secondary"
            >
              {item.timestamp || item.Timestamp}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default Notifications;