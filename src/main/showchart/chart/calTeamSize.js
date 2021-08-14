import { players } from '../../../players.js';

const teamSize = new Map();

players.forEach(item => {
	if (teamSize.get(item.team_name) === undefined){
		teamSize.set(item.team_name, 1);
	}else {
		teamSize.set(item.team_name, teamSize.get(item.team_name) +1)
	}
})

export default teamSize;