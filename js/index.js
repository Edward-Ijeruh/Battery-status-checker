let chargingState = document.getElementById("charging-state");
let chargingStatus = document.getElementById("charging-status");

window.navigator.getBattery()
    .then(batteryManager => {
        const updateLevel = () => {
            chargingState.textContent = `${batteryManager.level * 100}%`
        }
        updateLevel();
        const updateStatus = () => {
            if (batteryManager.charging === true) {
                chargingStatus.textContent = "Charging";
                chargingStatus.style.color = "green";
            } else {
                chargingStatus.textContent = "Not charging";
                chargingStatus.style.color = "red";
            }
        }
        updateStatus();
        batteryManager.addEventListener("chargingchange", updateStatus);
        batteryManager.addEventListener("levelchange", updateLevel);
        
    });

        
    