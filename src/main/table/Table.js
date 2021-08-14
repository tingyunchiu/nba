import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Link from "@material-ui/core/Link";

import './Table.css'
function Table({displayData}) {
  const columns= []
  const col = ['Team', 'Name', 'Games', 'Points', 'Rebounds', 'Assists', 'Steals', 'Blocks']
  col.forEach(
    item => {columns.push({field: item, headerName: item,  width: 180, editable: false})})
  columns.push({field: 'Details', headerName: 'Details',  width: 180, editable: false,
    renderCell: (params) => (
      <Link href="#" onClick={() => window.open("PlayerCard.js", player = {params.value})}>More</Link>
    )
  })

  const rows = []
  displayData.forEach(player => {rows.push({
    id: player.name,
    Team: player.team_name,
    Name: player.name,
    Games: player.games_played,
    Points: player.points_per_game,
    Rebounds: player.rebounds_per_game,
    Assists: player.assists_per_game,
    Steals: player.steals_per_game,
    Blocks: player.blocks_per_game,
    Details: player
  })}
  )

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