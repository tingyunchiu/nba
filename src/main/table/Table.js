import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { FormControlLabel, IconButton } from "@material-ui/core";
import InfoIcon from '@material-ui/icons/Info';
import './Table.css'

function Table({displayData}) {
  const Info = ({ index }) => {
    const handleEditClick = () => {
      window.open("/player/" + index.replaceAll(' ', '_'), "_blank")
    };

    return (
      <FormControlLabel
        control={
          <IconButton
            color="secondary"
            aria-label="add an alarm"
            onClick={handleEditClick}
          >
            <InfoIcon style={{ color: "#2ab8b0"}} />
          </IconButton>
        }
      />
  );
};
  const columns= []
  const col = ['Name', 'Team', 'Details','Games', 'Points', 'Rebounds', 'Assists', 'Steals', 'Blocks']
  col.forEach(
    item => {
      if (item === 'Name' || item === 'Team'){
        columns.push({field: item, headerName: item, width: 160, editable: false})
      } else if(item === 'Details') {
        columns.push({field: 'Details', headerName: 'Details', width: 130, editable: false,
          renderCell: (params) => {
            return (
              <div>
                <Info index={params.row.id} />
              </div>
            );
          }
        })
      }
      columns.push({field: item, headerName: item, width: 130, editable: false})
    })

  const rows = []
  displayData.forEach(player => {rows.push({
    id: player.name,
    Name: player.name,
    Team: player.team_name,
    Games: player.games_played,
    Points: player.points_per_game,
    Rebounds: player.rebounds_per_game,
    Assists: player.assists_per_game,
    Steals: player.steals_per_game,
    Blocks: player.blocks_per_game,
    Details: player
  })}
  )
  rows.sort((a, b) => b.Points - a.Points);
  return (
    <div className="table">
      <div style={{ height: 500, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={15}
            rowsPerPageOptions={[15]}
          />
      </div>
    </div>
  );
}

export default Table;


