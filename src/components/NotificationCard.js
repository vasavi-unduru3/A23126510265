import { Card, CardContent, Typography } from "@mui/material";

function NotificationCard({ notification }) {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">
          {notification.Type ||
            notification.type ||
            "Notification"}
        </Typography>

        <Typography>
          {notification.Message ||
            notification.message ||
            "No message"}
        </Typography>

        <Typography color="gray">
          {notification.Timestamp ||
            notification.timestamp ||
            ""}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NotificationCard;