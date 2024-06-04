import { getActionsInfo } from "../ai-info-gate.js";

var my_id;

export function makeAi(id) {
  my_id = id;
  return {
    get_action: get_action,
  };
}

function get_action() {
  const actions = getActionsInfo();
  return actions.no_action;
}
