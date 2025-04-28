// src/components/MatchCard.jsx

import { Card, CardContent, Typography } from "@mui/material";

const MatchCard = ({ match }) => {
  return (
    <Card className="mb-2">
      <CardContent>
        <Typography variant="body1">
          {match.home} vs {match.away} — {match.score}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MatchCard;
