import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button } from '@material-ui/core';

import './Search.css';

import teams from './findTeams.js';

function Search({ searchingTeam, searchingPlayer}) {
  const [selectedTeam, setSelectedTeam] = useState('');
  const [selectedPlayer, setSelectedPlayer] = useState('');

  const handleChangeTeam = (event) => {
    setSelectedTeam(event.target.value);
  };

  const handleChangePlayer = (event) => {
    setSelectedPlayer(event.target.value);
  };

  const clickedSearch = (event) => {
    searchingTeam(selectedTeam);
    searchingPlayer(selectedPlayer)
  };

  return (
    <div className="search">
      <div className="container">
        <h2 className="item">Team: </h2>
        <FormControl>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value ={selectedTeam}
          onChange={handleChangeTeam}
          >
          <MenuItem value = ''> All </MenuItem>
          {teams.map((team) =>
            <MenuItem value = {team}> {team} </MenuItem>
          )}
          </Select>
        </FormControl>
      </div>
      <div className="container">
        <h2 className="item">Player's Name: </h2>
        <TextField id="standard-basic" onChange={handleChangePlayer}/>
      </div>
      <div className="container">
        <Button style={{backgroundColor: "#e0e0e0"}} variant="contained" onClick={clickedSearch}>
          Search
        </Button>
      </div>
    </div>
  );
}

export default Search;