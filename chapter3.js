drag("rec1");
      drag("circle1");
      drag("rec2");
      drag("rec3");
      drag("circle2");
      function drag(name) {
        divone = document.getElementsByClassName(name);
        for (var i = 0; i < divone.length; i++) {
          divone[i].onmousedown = function (e) {
            var dive = e || event;
            var distanceX = dive.clientX - e.target.offsetLeft; //鼠标点击盒子X轴的位置减去盒子距离左边的位置；得到在盒子内点击的位置
            var distanceY = dive.clientY - e.target.offsetTop; //鼠标点击盒子Y轴的位置减去盒子距离顶部的位置；得到在盒子内点击的位置
            document.onmousemove = function (ev) {
              var dive = ev || event;
              ev.target.style.top = dive.clientY - distanceY + "px"; //移动时的Y位置减去鼠标在盒子内点击的位置；得到当前位置
              ev.target.style.left = dive.clientX - distanceX + "px"; //移动时的X位置减去鼠标在盒子内点击的位置；得到当前位置
            };
            document.onmouseup = function () {
              document.onmousemove = null;
              document.onmouseup = null;
            };
          };
        }
      }
