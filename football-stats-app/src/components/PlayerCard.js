/* PlayerCard.css */
import { Card, CardContent, Typography } from "@mui/material";

const PlayerCard = ({ player }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{player.name}</Typography>
        <Typography variant="subtitle1">{player.team}</Typography>
        <Typography>Goals: {player.goals}</Typography>
        <Typography>Assists: {player.assists}</Typography>
        <Typography>Matches: {player.matchesPlayed}</Typography>
      </CardContent>
    </Card>
  );
};

export default PlayerCard;
