const MAX_PENDING = 20; // Stop sending data when this number of updates are pending.
const UPDATE_INTERVAL = 100; // ms

export function start(ref) {
    let interval = setInterval(() => {
        try {
            const gamepads = navigator.getGamepads().map(gamepad => {
                if (gamepad === null || gamepad === undefined) return {
                    "Axes": [],
                    "Pressed": [],
                    "Values": [],
                    "Connected": false,
                    "ID": "",
                };
                else return {
                    "Axes": gamepad.axes,
                    "Pressed": gamepad.buttons.map(button => button.pressed),
                    "Values": gamepad.buttons.map(button => button.value),
                    "Connected": gamepad.connected,
                    "ID": gamepad.id,
                }
            });
            if (Object.keys(ref._callDispatcher._pendingAsyncCalls).length > MAX_PENDING) {
                clearInterval(interval);
            }
            ref.invokeMethodAsync("Update", gamepads).catch(() => clearInterval(interval));
        } catch {
            clearInterval(interval);
        }
    }, UPDATE_INTERVAL);
    return interval;
}