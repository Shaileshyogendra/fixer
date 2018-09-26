alert("Try connecting charger!");
function batteryManager(){
navigator.getBattery().then(function(batteryManager){
    //get battery level and show it in %age
    var level = Math.floor(batteryManager.level * 100),
    fill= document.querySelector(".fill");
    document.querySelector(".percent").innerHTML = level+ "%";
    fill.style.height = level*2+"px";
    if(batteryManager.charging){
        fill.style.backgroundColor = "skyblue";
        document.querySelector("#chrg").innerHTML = "Charging...⚡";
    }else{
        fill.style.backgroundColor = "lightgreen";
        document.querySelector("#chrg").innerHTML = "";
    }
    if(level <= 20){
        fill.style.backgroundColor  = "red";
        powerSavingMode = true;
    }
});
}
setInterval(batteryManager, 1000);