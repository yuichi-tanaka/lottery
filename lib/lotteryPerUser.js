var lotteryPerUser = function(users,items){
  this.users = users || [];
  this.items = items || [];
  this.lottery = [];
  this.usersLottery = {};
};
module.exports = lotteryPerUser;

var nextLottery = function(val,user){
  var self = this;
  ++val;
  if(val>=100) val = 0;
  var res = self.usersLottery[user].some(function(d){return d===val;});
  if(res) return nextLottery.bind(self)(val,user);
  self.usersLottery[user].push(val);
  return self.items[self.lottery[val]];
};
var checkProbability = function(probabilities){
  var self = this;
  var total = 0;
  var probability = 0;
  Object.keys(self.items).forEach(function(itemKey){
    total += self.items[itemKey].weight;
  });
  Object.keys(self.items).forEach(function(itemKey){
    probability += Math.round((self.items[itemKey].weight/total)*100);
  });
  return probability===100;
};

lotteryPerUser.prototype.setUsers = function(users){
  this.users = users;
};
lotteryPerUser.prototype.addUser = function(user){
  this.users.push(user);
};
lotteryPerUser.prototype.setItems = function(items){
  this.items = items;
  this.shuffle();
};
lotteryPerUser.prototype.addItems = function(item){
  this.items.push(item);
  this.shuffle();
};
lotteryPerUser.prototype.shuffle = function(){
  var self = this,
  total = 0;
  self.usersLottery = {};
  var check = checkProbability.bind(self)([1,2,3]);
  Object.keys(self.items).forEach(function(itemKey){
    var weight= self.items[itemKey].weight;
    total += weight;
  });
  Object.keys(self.items).forEach(function(itemKey){
    var probability = Math.round((self.items[itemKey].weight/total)*100);
    for(var i = 0; i < probability; i++){
      self.lottery.push(itemKey);
    }
  });

};
lotteryPerUser.prototype.drawLots = function(user){
  var self = this;
  var t = Math.floor(Math.random() * 100);
  if(!self.usersLottery[user] || (self.usersLottery[user] instanceof Array && self.usersLottery[user].length >= 100) ) self.usersLottery[user] = [];
  return nextLottery.bind(self)(t,user);
};

