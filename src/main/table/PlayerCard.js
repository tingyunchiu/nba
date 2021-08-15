import React from 'react';
import { useParams } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { players } from '../../players.js';
import './Card.css'

function PlayerCard() {
  const index = useParams();
  const player = players.filter(player =>
    player.name === index.id.replaceAll('_', ' '))[0]

  return (
    <div className="cardcontainer">
      <Card className="card">
        <CardContent>
          <Typography variant="h4" component="h2" className="name">
            { player.name }
          </Typography>
          <Typography variant="h6" component="h2" className="team">
           { player.team_name}
          </Typography>
          {Object.keys(player).slice(3).map(key =>
            <div className="detailcontainer">
            <Typography className="col">{key}</Typography>
            <Typography color="textSecondary">{player[key]}</Typography>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default PlayerCard;