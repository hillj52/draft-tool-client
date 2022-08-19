import { MouseEvent } from 'react';
import { Player } from '../../../models/player';
import { Team } from '../../../models/team';
import { RosterPosition } from '../../../models/roster-position';
import { useTeamValue } from '../../../hooks/use-team-value';
import { MdDelete } from 'react-icons/md';
import Button from '../../UI/button/button';
import classes from './team-details.module.css';
import { useActions } from '../../../hooks/use-actions';

interface TeamDetailsProps {
  team: Team;
}

const TeamDetails: React.FC<TeamDetailsProps> = ({ team }) => {
  const { undraftPlayer } = useActions();

  const value = useTeamValue(team);

  const handleDeleteClick = (
    event: MouseEvent<HTMLButtonElement>,
    id: string,
    position: RosterPosition,
    price: number
  ) => {
    event.preventDefault();
    undraftPlayer(id, team.id, position);
  };

  const renderTableRow = (
    position: RosterPosition,
    player: Player | undefined,
    key?: string
  ) => (
    <tr key={key}>
      <td>{position.toUpperCase()}</td>
      <td>{player && player.name}</td>
      <td>{player && `${player.team} - ${player.byeWeek}`}</td>
      <td>{player && player.value}</td>
      <td>{player && player.price}</td>
      <td>
        {player && (
          <Button
            size="small"
            onClick={(e) =>
              handleDeleteClick(e, player.id, position, player.price)
            }
          >
            <MdDelete />
          </Button>
        )}
      </td>
    </tr>
  );

  return (
    <main>
      <header className={classes.header}>
        <div>{`${team.name} - ${team.owner}`}</div>
        <div>{`Value: ${value} Budget: ${team.money}`}</div>
      </header>
      <hr />
      <div className={classes.table}>
        <table>
          <thead>
            <tr>
              <th>Position</th>
              <th>Player</th>
              <th>Team</th>
              <th>Value</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {renderTableRow(RosterPosition.QB, team.qb)}
            {renderTableRow(RosterPosition.RB1, team.rb1)}
            {renderTableRow(RosterPosition.RB2, team.rb2)}
            {renderTableRow(RosterPosition.WR1, team.wr1)}
            {renderTableRow(RosterPosition.WR2, team.wr2)}
            {renderTableRow(RosterPosition.FLEX, team.flex)}
            {renderTableRow(RosterPosition.OP, team.op)}
            {renderTableRow(RosterPosition.TE, team.te)}
            {renderTableRow(RosterPosition.K, team.k)}
            {renderTableRow(RosterPosition.DST, team.dst)}
            {team.bench &&
              team.bench.map((player) =>
                renderTableRow(RosterPosition.BENCH, player, player.id)
              )}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default TeamDetails;
