import { useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";

const CustomerDashboardCard = () => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <Card
      sx={{
        maxWidth: "400px",
        bgcolor: theme.palette.primary.light,
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="120"
        image="image/customerDashboard.jpg"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ color: theme.palette.secondary.main }}
        >
          Customer Dashboard
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.grey[800] }}>
          Access your personalized dashboard securely. Unlock additional
          features and personalized tracking options by logging in to our
          website. Your journey to efficient tracking starts here!
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() =>
            router.push("https://customer.sundarbancourierltd.com/")
          }
          variant="contained"
        >
          View Dashboard
        </Button>
      </CardActions>
    </Card>
  );
};

export default CustomerDashboardCard;
