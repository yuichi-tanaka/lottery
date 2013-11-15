lottery
=======
installation
=======
you can install using Node Package Manager(npm)
```shell:install
npm install node-lottery
```
How to use
=======
```
var lottery = require('node-lottery'),
users = ['user1','user2','user3'],
lots = [{name:'lot1' , weight:1},{name:'lot2' , weight:1},{name:'lot3' , weight:1},{name:'lot4' , weight:2}];
(new lottery(users,lots)).shuffle();
```

