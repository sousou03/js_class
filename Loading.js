//--------------------------------------------------
//
//  loading
//
//--------------------------------------------------

(function(){

  var gb = jp.co.sjPlus;

  function Loading() {

    this.$wrap = $('.device_select');

    this.$colorBgs = $('.colorBgs');
    this.$colorBg = $('.colorBg');
    this.bgColors = ['#d4dfe7','#e8e1e9','#fafafb','#d9e1ef']

    this.$logo = $('.head__logo');
    this.$bg01 = $('.bg01');
    this.$bg02 = $('.bg02');
    this.$bg03 = $('.bg03');
    this.$bg04 = $('.bg04');

    this.$icon01 = $('.btn__ico01');
    this.$icon02 = $('.btn__ico02');
    this.$textWrap01 = $('.btn__label01').find('.textWrap');
    this.$textWrap02 = $('.btn__label02').find('.textWrap');
    this.$textInner01 = $('.btn__label01').find('.textInner');
    this.$textInner02 = $('.btn__label02').find('.textInner');
    this.$bar01 = $('.btn__label01').find('.bar');
    this.$bar02 = $('.btn__label02').find('.bar');


    this.tlMain = new TimelineMax();

    this.ready();
    this.prevent(true);
    this.run();

  }

  Loading.prototype = {

    ready: function () {

      // bgに色をランダムでつける
      // this.$colorBg.each(function(index, el) {

      //   var h = 191 + Math.random()*90;
      //   var s = 40 + Math.random()*30;
      //   var l = 60 + Math.random()*20;

      //   TweenMax.set($(this), {
      //     width: 0,
      //     backgroundColor: 'hsla('+h+','+s+'%,'+l+'%,1)'
      //   });
        
      // });

      var self = this;

      this.$colorBg.each(function(index, el) {

        TweenMax.set($(this), {
          width: 0,
          backgroundColor: self.bgColors[index]
        });
        
      });

      // textの準備
      this.text01 = new gb.OverflowMove($('.head__disc01'));
      this.text02 = new gb.OverflowMove($('.head__disc02'));
      this.text03 = new gb.OverflowMove($('.select__ttl'),55);
      this.text04 = new gb.OverflowMove($('.select__note01'));
      this.text05 = new gb.OverflowMove($('.select__note02'));

      // boxの準備
      this.box01 = new gb.LineBox($('.select__btn01 a'));
      this.box02 = new gb.LineBox($('.select__btn02 a'));

      // icon,label
      TweenMax.set(this.$icon01, {y: 50});
      TweenMax.set(this.$icon02, {y: 50});
    
    },

    bgMove: function () {

      var self = this;
      var w = $(window).width();

      this.tlMain
        .to(this.$bg01, 0.8, {
          width: '100%',
          ease: Power3.easeInOut,
          delay: 1,
        })
        .to(this.$bg02, 0.8, {
          width: '100%',
          ease: Power3.easeInOut
        },'-=0.65')
        .to(this.$bg03, 0.8, {
          width: '100%',
          ease: Power3.easeInOut
        },'-=0.65')
        .to(this.$bg04, 0.8, {
          width: '100%',
          ease: Power3.easeInOut
        },'-=0.65')

        .to(this.$bg01, 0.8, {
          x: w,
          ease: Power3.easeInOut
        },'-=0.65')
        .to(this.$bg02, 0.8, {
          x: w,
          ease: Power3.easeInOut
        },'-=0.65')
        .to(this.$bg03, 0.8, {
          x: w,
          ease: Power3.easeInOut
        },'-=0.65')
        .to(this.$bg04, 0.8, {
          x: w,
          ease: Power3.easeInOut,
          onStart: function() {

            self.$wrap.removeClass('bgBlack');

          },
        },'-=0.3')
    
    },

    logo: function () {

      this.tlMain
        .to(this.$logo, 1.2, {
          'margin-left': -187,
          top: 0,
          width: 374,
          y: 0,
          ease: Power4.easeInOut
        },'-=0.5')
      

    },

    details: function () {

      var self = this;
      var tlSub01 = new TimelineMax();
      var tlSub02 = new TimelineMax();

      this.tlMain
        .add(function(){self.text01.run();},'-=0.4')
        .add(function(){self.text02.run();},'-=0.3')
        .add(function(){self.text03.run();},'-=0.2')
        .add(function(){self.text04.run();},'-=0.1')
        .add(function(){self.text05.run();},'-=0.0')
        .add(function(){self.box01.run();},'+=0.1')
        .add(function(){self.box02.run();},'+=0.1')
        .add(tlSub01,'+=1.0')
        .add(tlSub02,'+=0.2')

      tlSub01
        .to(this.$icon01, 0.8, {
          y: 0,
          opacity: 1,
          ease: Power3.easeOut,
        })
        .to(this.$textInner01, 0.9, {
            x: 0,
            ease : Power2.easeOut,
        },'-=0.6')
        .to(this.$textWrap01, 0.9, {
            width: 70,
            ease : Power2.easeOut,
        },'-=0.85')
        .to(this.$bar01, 0.8, {
          width: 18,
          ease: Power2.easeOut,
        },'-=0.2')

      tlSub02
        .to(this.$icon02, 0.8, {
          y: 0,
          opacity: 1,
          ease: Power3.easeOut,
        })
        .to(this.$textInner02, 0.9, {
            x: 0,
            ease : Power2.easeOut,
        },'-=0.6')
        .to(this.$textWrap02, 0.9, {
            width: 100,
            ease : Power2.easeOut,
        },'-=0.85')
        .to(this.$bar02, 0.8, {
          width: 18,
          ease: Power2.easeOut,
          onComplete: function() {
            self.onComplete();
          }
        },'-=0.2')

    },

    onMouseEnter: function (e) {

      var $target = $(e.currentTarget);

      TweenMax.to($target.find('.btn__ico svg'), 0.4, {fill: '#000',ease : Power3.easeInOut});
      TweenMax.to($target.find('.textWrap'), 0.4, {color: '#000',ease : Power3.easeInOut});
      TweenMax.to($target.find('.bar'), 0.4, {backgroundColor: '#000',ease : Power3.easeInOut});
      TweenMax.to($target.find('.lineL'), 0.4, {width: 1,ease : Power2.easeInOut});
      
    },

    onMouseOut: function (e) {

      var $target = $(e.currentTarget);

      TweenMax.to($target.find('.btn__ico svg'), 0.4, {fill: '#fff',ease : Power3.easeInOut});
      TweenMax.to($target.find('.textWrap'), 0.4, {color: '#fff',ease : Power3.easeInOut});
      TweenMax.to($target.find('.bar'), 0.4, {backgroundColor: '#fff',ease : Power3.easeInOut});
      TweenMax.to($target.find('.lineL'), 0.4, {width: '100%',ease : Power2.easeInOut});
      
    },

    onComplete: function () {

      this.prevent(false);
      this.setEvents();
      
    },

    setEvents: function () {

      var self = this;

      $('.select__btn')
        .on('mouseenter', function(e){ self.onMouseEnter.call(self, e); })
        .on('mouseleave', function(e){ self.onMouseOut.call(self, e); });
      // $('.select__btn02')
      //   .on('mouseenter', function(e){ self.onMouseEnter.call(self, e); })
      //   .on('mouseleave', function(e){ self.onMouseOut.call(self, e); });
      
    },

    prevent: function (flag) {

      var self = this;

      if (flag) {

      $('.select__btn')
        .on('mouseenter.prevent', function(e){ e.preventDefault(); })
        .on('mouseleave.prevent', function(e){ e.preventDefault(); });

      } else {

        $('.select__btn')
          .off('mouseenter.prevent')
          .off('mouseleave.prevent');

      }
      
    },

    run: function () {

      var self = this;

      this.bgMove();
      this.logo();
      this.details();

    }

  }

  gb.Loading = Loading;

})();