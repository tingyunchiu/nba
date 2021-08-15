import { players } from '../../../players.js';

const teamSize = new Map();

players.forEach(item => {
	if (teamSize.get(item.team_acronym) === undefined){
		teamSize.set(item.team_acronym, 1);
	}else {
		teamSize.set(item.team_acronym, teamSize.get(item.team_acronym) +1)
	}
})

export default teamSize;