import { players } from '../../players.js';

const teams = [];

players.forEach(item => {
	if (!teams.includes(item.team_name)){
		teams.push(item.team_name)
	}
})

export default teams;