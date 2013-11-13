var lpu = require('../lib/lotteryPerUser');
var testUser = [1,2,3,4,5];
var testLots = [
  {id:1,name:'red',weight:20},
  {id:2,name:'blue',weight:30},
  {id:3,name:'green',weight:30},
  {id:4,name:'yellow',weight:10},
  {id:5,name:'black',weight:5},
  {id:6,name:'red',weight:5}

];
var lpuins = new lpu(testUser,testLots);
var obj = {};
lpuins.shuffle();
for(var i = 0 ; i < 100; i ++){
  for(var k = 0; k < testUser.length;k++){
    var d = lpuins.drawLots(k);
    if(!obj[d.id]) obj[d.id] = 0;
    obj[d.id] += 1;
  }
}
console.dir(obj);
