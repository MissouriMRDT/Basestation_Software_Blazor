export function getGamepad(index) {
    const gamepads = navigator.getGamepads();
    const ids = gamepads.map(gamepad => gamepad === null ? "" : gamepad.id);
    if (gamepads[index] === undefined || gamepads[index] === undefined) {
        return {
            "IDs": ids,
            "Gamepad": {
                "Axes": [],
                "Pressed": [],
                "Values": [],
                "Connected": false,
                "ID": "",
            }
        };
    }
    return {
        "IDs": ids,
        "Gamepad": {
            "Axes": gamepads[index].axes,
            "Pressed": gamepads[index].buttons.map(button => button.pressed),
            "Values": gamepads[index].buttons.map(button => button.value),
            "Connected": gamepads[index].connected,
            "ID": gamepads[index].id,
        }
    };
}