var lotteryPerUser = function(users,items){
  this.users = users || [];
  this.items = items || [];
  this.lottery = {};
};
module.exports = lotteryPerUser;

lotteryPerUser.prototype.setUsers = function(users){
  this.users = users;
};
lotteryPerUser.prototype.addUser = function(user){
  this.users.push(user);
};
lotteryPerUser.prototype.setItems = function(items){
  this.items = items;
};
lotteryPerUser.prototype.addItems = function(item){
  this.items.push(item);
};
lotteryPerUser.prototype.shuffle = function(){
  var self = this;
  Object.keys(self.users).forEach(function(data){
    //初期化
    self[data] = [];
    Object.keys(self.items).forEach(function(item){
      self[data].concat();
    });
  });
};
