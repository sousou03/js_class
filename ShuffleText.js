//--------------------------------------------------
//
//  shuffuleText
//
//--------------------------------------------------

(function(){

  var gb = jp.co.sjPlus;

  function ShuffleText($target,countstep) {

    this.$target = $target;

    this.str = null;
    this.SHUFFLE_STEP = 1000/60, //シャッフルの間隔値
    this.COUNT_STEP = countstep || 20, //カウントダウンの間隔値
    this.SHUFFLE_STR = '!"#$%&\'()*+,-./:,<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~', //シャッフル文字列

    this.ready();
    this.run();

  }

  ShuffleText.prototype = {

    ready: function () {

      TweenMax.set(this.$target, {
        width: this.$target.width(),
        height: this.$target.height(),
      });

      this.str = this.$target.text(); //対象セレクタのテキスト
      this.$target.text('');
    
    },

    shuffleText: function() {

      var self = this;

      var count = -1; //カウントダウン
      var txt = ''; //表示テキスト

      var countID = setInterval(function(){count++;}, this.COUNT_STEP);
      var shuffleID = setInterval(function(){

          self.$target.text('');

          for( var i=0; i<self.str.length; i++ ){
            txt = self.SHUFFLE_STR[ Math.floor(Math.random()*self.SHUFFLE_STR.length) ];
            if( count >= i ) txt = self.str.charAt(i);
            self.$target.append(txt);
          };
          
          if(count >= self.str.length ){
            clearInterval(shuffleID);
            clearInterval(countID);
          };

        },self.SHUFFLE_STEP);

    },

    setEvents: function () {

      
    },

    run: function () {

      var self = this;

      this.shuffleText();

    }

  }

  gb.ShuffleText = ShuffleText;

})();