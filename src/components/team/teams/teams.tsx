import { MouseEvent } from 'react';
import TeamCard from '../team-card/team-card';
import Button from '../../UI/button/button';
import { useState } from 'react';
import Modal from '../../UI/modal/modal';
import AddTeamForm from '../add-team-form/add-team-form';
import { useActions } from '../../../hooks/use-actions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useEffect } from 'react';
import { teamsSelector } from '../../../store/selectors';
import { useInflation } from '../../../hooks/use-inflation';

const Teams: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const teams = useTypedSelector(teamsSelector);
  const { inflation, moneyRemaining, valueRemaining } = useInflation();
  const { addTeam, fetchTeams } = useActions();

  useEffect(() => {
    fetchTeams();
  }, [fetchTeams]);

  const addTeamClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setModalOpen(true);
  };

  const modalCloseHandler = () => {
    setModalOpen(false);
  };

  const modalSubmitHandler = ({
    teamName,
    teamOwner,
  }: {
    teamName: string;
    teamOwner: string;
  }) => {
    addTeam(teamOwner, teamName);
    setModalOpen(false);
  };

  return (
    <section>
      <Button primary onClick={addTeamClickHandler}>
        Add Team
      </Button>
      <span>
        Total Money Remaining: ${moneyRemaining} Total Value Remaining: $
        {valueRemaining} * {inflation} = ${valueRemaining * inflation}{' '}
      </span>
      <div>
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
      {modalOpen ? (
        <Modal onClose={modalCloseHandler}>
          <AddTeamForm
            onSubmit={modalSubmitHandler}
            onCancel={modalCloseHandler}
          />
        </Modal>
      ) : null}
    </section>
  );
};

export default Teams;
