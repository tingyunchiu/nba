import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function PlayerCard({player}) {
  return (
    <Card >
      <CardContent>
        <Typography variant="h5" component="h2">
          player.name
        </Typography>
        <Typography variant="h5" component="h2">
          player.team_name
        </Typography>
        {Object.keys(player).slice(3).forEach((col) =>
      		<Typography color="textSecondary"> {col} + ": " + player[col]</Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default PlayerCard;