import { FormEventHandler, useState } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Dropdown from '../../UI/dropdown/dropdown';
import Input from '../../UI/input/input';
import Button from '../../UI/button/button';
import classes from './player-details.module.css';
import { teamsSelector } from '../../../store/selectors';
import { Player } from '../../../models/player';
import { RosterPosition } from '../../../models/roster-position';
import { Team } from '../../../models/team';
import { Position } from '../../../models/position';
import { useActions } from '../../../hooks/use-actions';
import { useInflation } from '../../../hooks/use-inflation';

interface PlayerDetailsProps {
  player: Player;
}

const PlayerDetails: React.FC<PlayerDetailsProps> = ({ player }) => {
  const teams = useTypedSelector(teamsSelector);

  const { inflation } = useInflation();

  const { featurePlayer, draftPlayer } = useActions();

  const [price, setPrice] = useState(0);
  const [teamId, setTeamId] = useState('-');
  const [rosterPosition, setRosterPosition] = useState<RosterPosition | '-'>(
    '-'
  );

  const filterAvailableStarterPositions = (team: Team, position: Position) => {
    switch (position) {
      case Position.QB:
        return [RosterPosition.QB, RosterPosition.OP].filter((rp) => !team[rp]);
      case Position.RB:
        return [
          RosterPosition.RB1,
          RosterPosition.RB2,
          RosterPosition.OP,
          RosterPosition.FLEX,
        ].filter((rp) => !team[rp]);
      case Position.WR:
        return [
          RosterPosition.WR1,
          RosterPosition.WR2,
          RosterPosition.OP,
          RosterPosition.FLEX,
        ].filter((rp) => !team[rp]);
      case Position.TE:
        return [
          RosterPosition.TE,
          RosterPosition.OP,
          RosterPosition.FLEX,
        ].filter((rp) => !team[rp]);
      case Position.K:
        return [RosterPosition.K].filter((rp) => !team[rp]);
      case Position.DST:
        return [RosterPosition.DST].filter((rp) => !team[rp]);
      default:
        return [];
    }
  };

  const areBenchPositionsAvailable = (team: Team) => {
    if (!team.bench || team.bench.length < 6) {
      return true;
    }
    return false;
  };

  const createTeamPositionDropdownValues = (
    teamId: string,
    position: Position
  ) => {
    const team = teams.find(({ id }) => id === teamId);
    if (!team) {
      throw new Error('Team not found, should not get here');
    }
    const positions = filterAvailableStarterPositions(team, position).map(
      (position) => ({
        id: position,
        displayText: position.toUpperCase(),
      })
    );
    if (areBenchPositionsAvailable(team)) {
      positions.push({
        id: RosterPosition.BENCH,
        displayText: RosterPosition.BENCH.toUpperCase(),
      });
    }
    return positions;
  };

  const submitHandler: FormEventHandler = (event) => {
    event.preventDefault();
    if (rosterPosition !== '-' && price > 0) {
      draftPlayer(player.id, teamId, rosterPosition, price);
      featurePlayer();
    }
  };

  const cancelHandler: FormEventHandler = (event) => {
    event.preventDefault();
    featurePlayer();
  };

  return (
    <section>
      <header className={classes.header}>
        <span className={classes.name}>
          {player.name} - {player.position}
        </span>
        <span className={classes.team}>
          ({player.team} - Bye: {player.byeWeek})
        </span>
      </header>
      <hr />
      <form onSubmit={submitHandler}>
        <main>
          <section className={classes.info}>
            <div
              className={player.drafted ? classes.drafted : classes.available}
            >
              {player.drafted ? 'Drafted' : 'Available'}
            </div>
            <div className={classes.left}>
              <div className={classes.price}>
                {player.drafted ? 'Cost' : 'Max Bid'}:{' '}
                {(player.value * inflation).toFixed(2)}
              </div>
            </div>
          </section>
          <hr />
          <section className={classes.form}>
            <Input
              label="Cost"
              id="cost"
              type="number"
              value={price}
              onChange={(e) => setPrice(+e.target.value)}
              autoFocus
            />
            <Dropdown
              label="Team"
              id="team"
              name="team"
              defaultText="Select a team"
              onChange={(e) => setTeamId(e.target.value)}
              values={teams.map(({ name, owner, id }) => ({
                id,
                displayText: `${name} - ${owner}`,
              }))}
            />
            {teamId === '-' ? null : (
              <Dropdown
                label="Position"
                id="position"
                name="position"
                defaultText="Select a position"
                onChange={(e) =>
                  setRosterPosition(e.target.value as RosterPosition)
                }
                values={createTeamPositionDropdownValues(
                  teamId,
                  player.position
                )}
              />
            )}
          </section>
        </main>
        <hr />
        <section className={classes['form-controls']}>
          <Button primary>Draft</Button>
          <Button onClick={cancelHandler}>Cancel</Button>
        </section>
      </form>
    </section>
  );
};

export default PlayerDetails;
