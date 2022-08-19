import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import {
  featuredPlayerSelector,
  featuredTeamSelector,
  isAuthSelector,
} from '../../store/selectors';
import AuthForm from '../auth/auth-form';
import AvailablePlayers from '../player/available-player/available-players';
import PlayerDetails from '../player/player-details/player-details';
import TeamDetails from '../team/team-details/team-details';
import Teams from '../team/teams/teams';
import Modal from '../UI/modal/modal';

const Dashboard: React.FC = () => {
  const isAuth = useTypedSelector(isAuthSelector);
  const featuredPlayer = useTypedSelector(featuredPlayerSelector);
  const featuredTeam = useTypedSelector(featuredTeamSelector);

  const { featurePlayer, featureTeam } = useActions();

  const playerModalCloseHandler = () => {
    featurePlayer();
  };

  const teamModalCloseHandler = () => {
    featureTeam();
  };

  return (
    <main>
      {!isAuth ? (
        <AuthForm />
      ) : (
        <section>
          <Teams />
          <br />
          <AvailablePlayers />
          {featuredPlayer && (
            <Modal onClose={playerModalCloseHandler}>
              <PlayerDetails player={featuredPlayer} />
            </Modal>
          )}
          {featuredTeam && (
            <Modal onClose={teamModalCloseHandler}>
              <TeamDetails team={featuredTeam} />
            </Modal>
          )}
        </section>
      )}
    </main>
  );
};

export default Dashboard;
