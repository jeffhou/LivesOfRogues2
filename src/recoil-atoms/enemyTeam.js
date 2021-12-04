import { atom } from "recoil";

export const EnemyTeamAtom = atom({
  key: "enemy-team",
  default: [
    {
      name: "Eleanor the Great",
      health: {
        current: 21,
        max: 24
      },
      currentInitiative: 0,
      initiativeGain: 3
    },
    {
      name: "Alexander the Philosophical",
      health: {
        current: 11,
        max: 24
      },
      currentInitiative: 0,
      initiativeGain: 4
    },
    {
      name: "Sumi the Solemn",
      health: {
        current: 2,
        max: 24
      },
      currentInitiative: 0,
      initiativeGain: 5
    }
  ]
});
