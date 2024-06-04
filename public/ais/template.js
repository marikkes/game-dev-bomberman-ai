// AIs are only allowed to import from ai-info-gate.js. Do not import from any other file.


// Variable to store the assigned player id when creating the AI object.
var my_id;

// Function to create the AI decision maker object. Must return an object with a get_action function.
export function makeAi(id) {
  my_id = id;
  return {
    get_action: get_action,
  };
}

// Returns the AI-s chosen action. For legal actions see the list of possible actions.
// Use methods from ai-info-gate.js to get information about the game state.
function get_action() {
    
}