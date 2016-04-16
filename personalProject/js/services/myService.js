angular.module("nameMaker").service('randomService', function(){

  var alphabet = [["b", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"],
     ["a", "e", "i", "o", "u", "y"]];

   this.randomName = function(num, iter, nameList){
     this.newName = [];
      if(!isNaN(num) && !isNaN(iter)) {
        this.logTrack = [];
        for(var j = 0; j < iter; j++){
          for(var i = 0; i < num; i++) {
            var aNum;
            var selector;
            if(this.logTrack[0] === 0 && this.logTrack[1] === 0){
              selector = Math.floor(Math.random() * 2);
              aNum = Math.floor(Math.random() * alphabet[1].length);
              newName.push(alphabet[1][aNum]);
              logTrack.push(1);
              if(this.logTrack.length > 2){
                this.logTrack.shift();
              }
            }
            else if(this.logTrack[0] === 1 && this.logTrack[1] === 1){
              selector = Math.floor(Math.random() * 2);
              aNum = Math.floor(Math.random() * alphabet[0].length);
              newName.push(alphabet[0][aNum]);
              logTrack.push(0);
              if(this.logTrack.length > 2){
                this.logTrack.shift();
              }
            }
            else {
              selector = Math.floor(Math.random() * 2);
              aNum = Math.floor(Math.random() * alphabet[selector].length);
              newName.push(alphabet[selector][aNum]);
              logTrack.push(selector);
              if(this.logTrack.length > 2){
                this.logTrack.shift();
              }
            }
          }

          var rawName = this.newName.join('');
          var finalName = rawName.charAt(0).toUpperCase() + rawName.substring(1);
          finalName.charAt(0).toUpperCase();
          nameList.push(finalName);
          newName = [];
        }
      return nameList;
    }
  }

});