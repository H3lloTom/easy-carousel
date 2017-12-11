
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error(" Carousel requires a window with a document");
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
    var version = "0.0.1",
    Carousel = function(options) {
    this.ImageList = options.arr;
    this.isBusy = false;
    this.ImageSize = "400x100";
    };
    Carousel.prototype.init = function(options) {
      
      let content = document.getElementById("carousel");
      let ul = document.createElement("ul");
      /**
       * 获取轮播图尺寸
       */
      let imgSize = this.ImageSize;
      content.style.setProperty("width", "400px");
      content.style.setProperty("height", "100px");
      content.style.setProperty("position", "relative");
      content.style.setProperty("overflow", "hidden");
      /**
       * ul列表的class类
       */
      ul.className = "img-list";
      /**
       * 遍历渲染ImageList图片列表
       */
      let lists = [];
      var List = this.ImageList;
      List.forEach(function(element, index) {
        let image = document.createElement("img");
        let li = document.createElement("li");
        image.src = element;
        if (index === 0) {
          li.className = "active";
        }
        li.appendChild(image);
        ul.appendChild(li);
      });
      /**
       * 加载操作按钮
       */
      let prevBtn = document.createElement("a");
      let nextBtn = document.createElement("a");
      let i1 = document.createElement("i");
      let i2 = document.createElement("i");
      i1.className = "iconfont icon-left";
      i2.className = "iconfont icon-right";
      prevBtn.className = "carousel-btn left";
      nextBtn.className = "carousel-btn right";
      prevBtn.href = "javascript:void(0)";
      nextBtn.href = "javascript:void(0)";
      prevBtn.appendChild(i1);
      nextBtn.appendChild(i2);
      content.appendChild(ul);
      content.appendChild(prevBtn);
      content.appendChild(nextBtn);
      prevBtn.addEventListener("click", this.prevDo, false);
      nextBtn.addEventListener("click", this.nextDo, false);

      // var inteval=window.setInterval(function () {
      //   this.nextDo();
      // }.bind(this),5000);
    };
    Carousel.prototype.prevDo = function() {
      if (this.isBusy === true) {
        return null;
      }
      this.isBusy = true;
      let activeIndex = 0;
      let list = document.getElementsByTagName("li");
      for (var i = 0; i < list.length; i++) {
        if (list[i].className == "active") {
          activeIndex = i;
        }
      }
      /* 如果是第一项 */
      if (activeIndex == 0) {
        list[activeIndex].className = "prev left";
        list[list.length - 1].className = "active left";
        var timer = window.setTimeout(function() {
            list[activeIndex].className = "";
            list[list.length - 1].className = "active";
            this.isBusy = false; //释放操作按钮
          }.bind(this), 2000);
      } else {
        list[activeIndex].className = "prev left";
        list[activeIndex - 1].className = "active left";
        var timer = window.setTimeout(function() {
            list[activeIndex].className = "";
            list[activeIndex - 1].className = "active";
            this.isBusy = false; //释放操作按钮
          }.bind(this), 2000);
      }
    };
    Carousel.prototype.nextDo = function() {
      if (this.isBusy === true) {
        return null;
      }
      this.isBusy = true;
      let activeIndex = 0;
      let list = document.getElementsByTagName("li");
      for (var i = 0; i < list.length; i++) {
        if (list[i].className == "active") {
          activeIndex = i;
        }
      }
      /* 如果是最后一项 */
      if (activeIndex == list.length - 1) {
        list[activeIndex].className = "prev right";
        list[0].className = "active right";
        var timer = window.setTimeout(function() {
            list[activeIndex].className = "";
            list[0].className = "active";
            this.isBusy = false; //释放操作按钮
          }.bind(this), 2000);
      } else {
        list[activeIndex].className = "prev right";
        list[activeIndex + 1].className = "active right";
        var timer = window.setTimeout(function() {
            list[activeIndex].className = "";
            list[activeIndex + 1].className = "active";
            this.isBusy = false; //释放操作按钮
          }.bind(this), 2000);
      }
    };

    if (typeof define === "function" && define.amd) {
      define("carousel", [], function() {
        return Carousel;
      });
    }

    if (!noGlobal) {
      window.Carousel = Carousel;
    }
    // import anywhere
    window.Carousel = Carousel;

    return Carousel;
})



