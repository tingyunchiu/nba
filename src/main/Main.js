import React, {useState, useEffect } from 'react';
import Search from './search/Search.js';
import ShowChart from './showchart/ShowChart.js';
import Table from './table/Table.js';

import './Main.css';

import { players } from '../players.js';

function Main() {

  const [displayData, setDisplayData] = useState(players);
  const [searchTeam, setSearchTeam] = useState('');
  const [searchPlayer, setSearchPlayer] = useState('');

  const searchingTeam = (e) =>{
    setSearchTeam(e)
  }
  const searchingPlayer = (e) =>{
    setSearchPlayer(e)
  }

  useEffect(() => {
    setDisplayData(
      players.filter(player => player.team_name.includes(searchTeam) && player.name.toLowerCase().includes(searchPlayer.toLowerCase())
      )
    )
  }, [searchTeam, searchPlayer])

  return (
    <div className = "main">
      <Search searchingTeam = {searchingTeam} searchingPlayer = {searchingPlayer} />
      <ShowChart />
      <Table displayData = {displayData}/>
    </div>
  );
}

export default Main;