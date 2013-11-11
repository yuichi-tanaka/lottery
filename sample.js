var lottery = function(rate){
  this.rate = rate;
};

lottery.prototype.drawLots = function(){
  var self = this;
  var t = Math.floor(Math.random() * 100);

  if(t < self.rate){
    return true;
  }
  return false;
};

var initial = 1;
var result = {};
for(var i = 0; i < 100; i++){
  for(var k = 0; k < 100; k++){
    var l = new lottery(1);
    var res = l.drawLots();
    if(!result[i]) result[i] = [];
    result[i].push(res?1:0);
  }
}
console.dir(result);
