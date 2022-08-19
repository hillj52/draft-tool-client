import { useTeamValue } from '../../../hooks/use-team-value';
import { useActions } from '../../../hooks/use-actions';
import { Player } from '../../../models/player';
import { Team } from '../../../models/team';
import Card from '../../UI/card/card';
import TeamCardPlayer from './team-card-player';
import classes from './team-card.module.css';

interface TeamCardProps {
  team: Team;
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  const value = useTeamValue(team);

  const { featureTeam } = useActions();

  const renderBench = () => {
    if (!team.bench) {
      return [
        <TeamCardPlayer key="0" player={undefined} position="Bench" />,
        <TeamCardPlayer key="1" player={undefined} position="Bench" />,
        <TeamCardPlayer key="2" player={undefined} position="Bench" />,
        <TeamCardPlayer key="3" player={undefined} position="Bench" />,
        <TeamCardPlayer key="4" player={undefined} position="Bench" />,
        <TeamCardPlayer key="5" player={undefined} position="Bench" />,
        <TeamCardPlayer key="6" player={undefined} position="Bench" />,
      ];
    } else {
      const bench: (Player | undefined)[] = [...team.bench];
      while (bench.length < 6) {
        bench.push(undefined);
      }
      return bench.map((benchPlayer, index) => (
        <TeamCardPlayer
          key={`b${index}`}
          player={benchPlayer}
          position="Bench"
        />
      ));
    }
  };

  return (
    <section className={classes['team-card']}>
      <Card onClick={() => featureTeam(team.id)}>
        <header className={classes.header}>
          <div>{team.name}</div>
          <div>{team.owner}</div>
          <div>
            <span className={classes.money}>Budget: {team.money}</span>
          </div>
          <div>
            <span className={classes.money}>Value: {value}</span>
          </div>
        </header>
        <hr className={classes.border} />
        <TeamCardPlayer player={team.qb} position="QB" />
        <TeamCardPlayer player={team.rb1} position="RB" />
        <TeamCardPlayer player={team.rb2} position="RB" />
        <TeamCardPlayer player={team.wr1} position="WR" />
        <TeamCardPlayer player={team.wr2} position="WR" />
        <TeamCardPlayer player={team.flex} position="Flex" />
        <TeamCardPlayer player={team.op} position="OP" />
        <TeamCardPlayer player={team.te} position="TE" />
        <TeamCardPlayer player={team.k} position="K" />
        <TeamCardPlayer player={team.dst} position="DST" />
        <br />
        {renderBench()}
      </Card>
    </section>
  );
};

export default TeamCard;
