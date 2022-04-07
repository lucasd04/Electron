var os = require("os");

// Netwerk
console.log(os.networkInterfaces());
console.log(os.networkInterfaces().en0[1].address);
console.log(os.networkInterfaces().en0[1].mac);

//CPU
console.log(os.cpus());
console.log(os.cpus()[0].model);
console.log(os.cpus()[0].speed);

//OS
console.log(os.type());

//Memory
var mbTotal = ((os.totalmem())/1048576);
var mbFree = ((os.freemem())/1048576);

console.log("There are "+mbFree+"mb free in the memory of "+mbTotal+"mb in total");



document.getElementById('cpuText').innerHTML = os.cpus()[0].model + "<br/>" + "Current clock speed: " + os.cpus()[0].speed + " MHz";
document.getElementById('netwerkText').innerHTML = "IP Address: " + os.networkInterfaces().en0[1].address + "<br/>" + "MAC Address: " + os.networkInterfaces().en0[1].mac;
document.getElementById('geheugenText').innerHTML = "Total amount: " + os.totalmem()/1048576 + " MB <br/>" + "Total amount free: " + os.freemem()/1048576 + " MB";
document.getElementById('osText').innerHTML = "OS: " + os.type;
