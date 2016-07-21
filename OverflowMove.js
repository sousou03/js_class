//--------------------------------------------------
//
//  shuffuleText
//
//--------------------------------------------------

(function(){

  var gb = jp.co.sjPlus;

  function OverflowMove($target,countstep) {

    this.$target = $target;
    this.$inner = null;
    this.inner = '<div class="OMInner"></div>';

    // this.isShuffle = flag || false;
    this.countstep = countstep || 20;

    this.t=0;this.r=0;this.l=0;this.b=0;
    this.w=0;this.h=0;

    this.ready();
    // this.run();

  }

  OverflowMove.prototype = {

    ready: function () {

      this.w = this.$target.width();
      this.h = this.$target.height();

      this.$target.wrapInner(this.inner); 
      this.$inner = this.$target.find('.OMInner');

      TweenMax.set(this.$inner, {width: this.w,height: this.h,x: 100});
      TweenMax.set(this.$target, {'overflow': 'hidden',width: 0})
    
    },

    motion: function() {

      var self = this;
      var tl = new TimelineMax();

      tl
        .add(function(){
          new gb.ShuffleText(self.$inner,self.countstep);
          // self.blink(self.$inner);
        })
        .to(this.$inner, 0.9, {
            x: 0,
            ease : Power4.easeOut,
        })
        .to(this.$target, 0.9, {
            width: this.w,
            ease : Power4.easeOut,
        },'-=0.85')

    },

    motionNotShuffle: function() {

      var self = this;
      var tl = new TimelineMax();

      tl
        .to(this.$inner, 0.9, {
            x: 0,
            ease : Power4.easeOut,
        })
        .to(this.$target, 0.9, {
            width: this.w,
            ease : Power4.easeOut,
        },'-=0.85')

    },

    // blink: function($target) {

    //   var self = this;
    //   var tl = new TimelineMax();

    //   tl
    //     .set($target, {opacity: 0})
    //     .set($target, {opacity: 1,delay:0.005})
    //     .set($target, {opacity: 0,delay:0.005})
    //     .set($target, {opacity: 1,delay:0.009})
    //     .set($target, {opacity: 0,delay:0.009})
    //     .set($target, {opacity: 1,delay:0.018})
    //     .set($target, {opacity: 0,delay:0.018})
    //     .set($target, {opacity: 1,delay:0.027})
    //     .set($target, {opacity: 0,delay:0.027})
    //     .set($target, {opacity: 1,delay:0.035})
    //     .set($target, {opacity: 0,delay:0.035})
    //     .set($target, {opacity: 1,delay:0.06})
    //     .set($target, {opacity: 0,delay:0.06})
    //     .set($target, {opacity: 1,delay:0.09})
    //     .set($target, {opacity: 0,delay:0.09})
    //     .set($target, {opacity: 1,delay:0.15})
    //     .set($target, {opacity: 0,delay:0.15})
    //     .set($target, {opacity: 1,delay:0.2})

    // },

    // blink: function($target){
    //     var tl = new TimelineLite();
    //     tl.to($target, .04, {opacity:1, ease:Quad.easeIn, delay:0});
    //     tl.to($target, .04, {opacity:0, ease:Quad.easeOut});
    //     tl.to($target, .04, {opacity:1, ease:Quad.easeOut});
    //     tl.to($target, .04, {opacity:0, ease:Quad.easeOut});
    //     tl.to($target, .3, {opacity:1, ease:Quad.easeOut});
    // },

    setEvents: function () {

      
    },

    run: function () {

      var self = this;

      // if (this.isShuffle) this.motion();
      // else this.motionNotShuffle();      

      this.motion();

    }

  }

  gb.OverflowMove = OverflowMove;

})();