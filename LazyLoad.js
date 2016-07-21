//--------------------------------------------------
//
//  LazyLoad
//
//--------------------------------------------------

;(function(){

  var gb = jp.co.sjPlus;

  function LazyLoad($target) {

    

    this.setEvents();

  }

  LazyLoad.prototype = {

    img: function (URL,cb) {

      // google api呼び出し
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = URL;
      // コールバック
      script.onload = cb
      document.body.appendChild(script);

    },

    iframe: function ($target) {

      var $target = $('.iframe');
      var src = $target.data('src');
      $target.attr('src', src);

    },

    link: function (URL,cb) {

      // google api呼び出し
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = URL;
      // コールバック
      script.onload = cb
      document.body.appendChild(script);

    },


    // ------------------------------------------------------------
    //  google api呼び出し
    //  や snsのscriptなど
    // ------------------------------------------------------------
    script: function (URL,cb) {

      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = URL;
      // コールバック
      script.onload = cb
      document.body.appendChild(script);

    },

    // 使い方
    // require_onload( ['aaa.js', 'bbb.js', 'ccc.js', 'test.css'] );

    // function require_onload( arg ) {
    //     if (is_array(arg)){
    //         var element = [];
    //         for(var i=0; i<arg.length; i++){
    //             if ( arg[i].match(/\.css$/) ){
    //                 add_child_css(arg[i]);
    //             }
    //             else if ( arg[i].match(/\.js$/) ){
    //                 add_child_js(arg[i]);
    //             }
    //             else{ alert('check url : ' + arg[i]) }
    //         }
    //     }
    //     else{
    //         if ( arg.match(/\.css$/) ){
    //             add_child_css(arg);
    //         }
    //         else if ( arg.match(/\.js$/) ){
    //             add_child_js(arg);
    //         }
    //         else{ alert('check url : ' + arg[i]) }
    //     }
    // }

    // function add_child_js(src){
    //     var element = document.createElement("script");
    //     element.src = src;
    //     document.body.appendChild(element);
    // }

    // function add_child_css(src){
    //     var css_element = document.createElement('link');
    //     css_element.type = 'text/css';
    //     css_element.rel  = 'stylesheet';
    //     css_element.href = src;
    //     document.body.appendChild(css_element);
    // }

    // function is_array(obj) {
    //     return Object.prototype.toString.call(obj) === '[object Array]';
    // }

    setEvents: function () {



    },

  }

  gb.LazyLoad = LazyLoad;

})();