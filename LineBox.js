//--------------------------------------------------
//
//  shuffuleText
//
//--------------------------------------------------

(function(){

  var gb = jp.co.sjPlus;

  function LineBox($target) {

    this.$target = $target;
    this.$lineBox = '<div class="lineBox">' +
                      '<div class="lineBoxLine lineT"></div>' +
                      '<div class="lineBoxLine lineR"></div>' +
                      '<div class="lineBoxLine lineB"></div>' +
                      '<div class="lineBoxLine lineL"></div>' +
                    '</div>';

    this.$wrap = null;
    this.$lt = null;
    this.$lr = null;
    this.$lb = null;
    this.$ll = null;

    this.t=0;this.r=0;this.l=0;this.b=0;
    this.w=0;this.h=0;

    this.ready();
    // this.run();

  }

  LineBox.prototype = {

    ready: function () {

      this.$target.prepend(this.$lineBox);

      this.$wrap = this.$target.find('.lineBox');
      this.$lt = this.$target.find('.lineT');
      this.$lr = this.$target.find('.lineR');
      this.$lb = this.$target.find('.lineB');
      this.$ll = this.$target.find('.lineL');

      this.w = this.$target.width();
      this.h = this.$target.height();

      TweenMax.set($('.lineBoxLine'), {backgroundColor: '#000','position': 'absolute'});

      TweenMax.set(this.$wrap, {width: '100%',height: '100%','position': 'absolute',left:0,top:0});
      TweenMax.set(this.$lt, {width: 0,height: 1,left: 0,top: 0});
      TweenMax.set(this.$lr, {width: 1,height: 0,left: this.w,top: 0});
      TweenMax.set(this.$lb, {width: 0,height: 1,left: this.w,top: this.h});
      TweenMax.set(this.$ll, {width: 1,height: 0,left: 0,top: this.h});
    
    },

    motion: function() {

      var self = this;
      var tl = new TimelineMax();

      tl
        .to(this.$lt, 0.7, {
            width: '100%',
            ease : Power4.easeIn,
        })
        .to(this.$lr, 0.7, {
            height: '100%',
            ease : Power4.easeIn,
        },'-=0.7')
        .to(this.$lb, 0.7, {
            width: '100%',
            left: 0,
            ease : Power4.easeIn,
        },'-=0.7')
        .to(this.$ll, 0.7, {
            height: '100%',
            top: 0,
            ease : Power4.easeIn,
        },'-=0.7')
        .to(this.$ll, 0.7, {
            width: '100%',
            ease : Power4.easeOut,
        },'-=0.0');

    },

    setEvents: function () {

      
    },

    run: function () {

      var self = this;

      this.motion();

    }

  }

  gb.LineBox = LineBox;

})();