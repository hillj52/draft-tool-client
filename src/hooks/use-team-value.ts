import { Team } from '../models/team';

export const useTeamValue = (team: Team) => {
  let value = 0;
  if (team.qb) {
    value += team.qb.value;
  }
  if (team.rb1) {
    value += team.rb1.value;
  }
  if (team.rb2) {
    value += team.rb2.value;
  }
  if (team.wr1) {
    value += team.wr1.value;
  }
  if (team.wr2) {
    value += team.wr2.value;
  }
  if (team.flex) {
    value += team.flex.value;
  }
  if (team.op) {
    value += team.op.value;
  }
  if (team.te) {
    value += team.te.value;
  }
  if (team.k) {
    value += team.k.value;
  }
  if (team.dst) {
    value += team.dst.value;
  }
  if (team.bench) {
    value += team.bench.reduce((acc, { value }) => acc + value, 0);
  }
  return value;
};
