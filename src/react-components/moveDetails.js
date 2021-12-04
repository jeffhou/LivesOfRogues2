import { PlayerTeamAtom } from "recoil-atoms/playerTeam";
import { EnemyTeamAtom } from "recoil-atoms/enemyTeam";
import { GamePhaseAtom, GamePhases } from "recoil-atoms/gamePhase";
import { useRecoilState } from "recoil";
import { safeRecoilUpdate } from "./../util";

export function MoveDetails(props) {
  const [gamePhaseState, setGamePhaseState] = useRecoilState(GamePhaseAtom);
  const [enemyTeamState, setEnemyTeamState] = useRecoilState(EnemyTeamAtom);
  const [playerTeamState, setPlayerTeamState] = useRecoilState(PlayerTeamAtom);
  const targetIndex = gamePhaseState.target.index;

  const dismissMoveDetails = safeRecoilUpdate(() => {
    setGamePhaseState((state) => {
      return Object.assign({}, state, {
        phase: "move-select",
        currentUnit: {
          team: "player",
          unitIndex: (state["currentUnit"]["unitIndex"] + 1) % 3
        }
      });
    });
  });

  return (
    <div className="move-details-container" onClick={dismissMoveDetails}>
      <div className="current-unit-name">{props.currentUnit.name}</div>
      <div className="current-unit-move">
        <strong>{props.currentUnit.name}</strong> hits{" "}
        <strong>Eleanor the Great</strong> for {console.log(targetIndex)}
        {/* TODO – change this to ^^ target unit  */}
        <span className="current-unit-move-damage">10 damage</span>!
        {/* TODO – change this to ^^ actual damage  */}
      </div>
      <div className="current-unit-target">
        <div>Eleanor the Great</div>
        {/* TODO – change this to ^^ target unit  */}
      </div>
      <div className="move-details-dismiss-text">click anywhere to dismiss</div>
    </div>
  );
}
