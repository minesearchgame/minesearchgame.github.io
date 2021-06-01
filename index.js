
      var emojiset = "";
      var cols = 10;
      var rows = 10;
      var bombs = 10;
      var flagmode = document.querySelector('.js-flag');
      var cancel = document.querySelector('.js-cancel');
      var clickmode = 1; //1: select -1: flag

      var bombBtn = document.getElementById('bomb');
      var flowerBtn = document.getElementById('flower');
      var theme = 1; // 1:bomb  2:flower

      var easyBtn = document.getElementById('easy');
      var mediumBtn = document.getElementById('medium');
      var hardBtn = document.getElementById('hard');
      var difficulty = 1; //easy:1 medium:2 hard:3


      themeInit(theme);
      diffiInit(difficulty);
      //game = new Game(cols.value, rows.value, bombs.value, emojiset, document.getElementById('twemoji').checked)
      game = new Game(cols, rows, bombs, theme, true);



      ///////////////////////////////////////////////////////////////////////////////////////////////

      document.querySelector('.js-new-game').addEventListener('click', restart)
      document.querySelector('.js-popup-new-game').addEventListener('click', restart)
      document.querySelector('.js-settings').addEventListener('click', function() {
        var list = document.querySelector('.js-settings-popup').classList
        list.contains('show') ? list.remove('show') : list.add('show')
        this.setAttribute('aria-expanded', list.contains('show'))
      });

      flagmode.addEventListener('click', function() {
        clickmode = -1*clickmode;

        if(clickmode==1){
            flagmode.src ="img/flagbtn.png";
            flagmode.style.borderStyle="outset";
        }else{
            flagmode.src ="img/flagbtn_.png";
            flagmode.style.borderStyle="inset";
        }
      });


      bombBtn.addEventListener('click', function() {
        themeInit(1);
      });
      flowerBtn.addEventListener('click', function() {
        themeInit(2)
      });

      easyBtn.addEventListener('click', function() {
        diffiInit(1);
      });
      mediumBtn.addEventListener('click', function() {
        diffiInit(2);
      });
      hardBtn.addEventListener('click', function() {
        diffiInit(3);
      });



      cancel.addEventListener('click', function() {
          var list = document.querySelector('.js-settings-popup').classList;
          list.remove('show');
      });

      function restart () {
        clearInterval(game.timer);
        game = new Game(cols, rows, bombs, theme, true);
        document.querySelector('.js-settings-popup').classList.remove('show')
        return false
      }

      function themeInit(t){

        bombBtn.style.borderStyle="outset";
        bombBtn.style.backgroundColor = "#f1f1f1";
        flowerBtn.style.borderStyle="outset";
        flowerBtn.style.backgroundColor = "#f1f1f1";

         switch (t){
          case 1:
            bombBtn.style.borderStyle="inset";
            bombBtn.style.backgroundColor = "#aaaaaa";
            theme =1;
            break;
          case 2:
            flowerBtn.style.borderStyle="inset";
            flowerBtn.style.backgroundColor = "#aaaaaa";
            theme =2;
            break;
          }

      }

      function diffiInit(d){

        easyBtn.style.borderStyle="outset";
        easyBtn.style.backgroundColor = "#f1f1f1";
        mediumBtn.style.borderStyle="outset";
        mediumBtn.style.backgroundColor = "#f1f1f1";
        hardBtn.style.borderStyle="outset";
        hardBtn.style.backgroundColor = "#f1f1f1";

        switch (d){
          case 1:
            easyBtn.style.borderStyle="inset";
            easyBtn.style.backgroundColor = "#aaaaaa";
            cols = rows =9;
            bombs = 10;
            break;
          case 2:
            mediumBtn.style.borderStyle="inset";
            mediumBtn.style.backgroundColor = "#aaaaaa";
            cols = rows =16;
            bombs = 40;
            break;
          case 3:
            hardBtn.style.borderStyle="inset";
            hardBtn.style.backgroundColor = "#aaaaaa";
            cols = rows =40;
            bombs = 60;
            break;
        }
        
      }


      //var WIDTH = 200;
      //var HEIGHT = 100;
      var canvas = document.getElementById('content');

      //var bottom = document.getElementById('margin-bottom');
      //canvas.style.width = WIDTH + 'px';
      //canvas.style.height = HEIGHT + 'px';

      resize();

      function resize(){

        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight-130 + 'px';
        /*

        if(window.innerHeight <= window.innerWidth){
          var currentHeight= window.innerHeight -200;
          var currentWidth= currentHeight * (WIDTH/HEIGHT);

          canvas.style.width = currentWidth + 'px';
          canvas.style.height = currentHeight + 'px';
        }else{
          var currentWidth= window.innerWidth-200;
          var currentHeight= currentWidth * (HEIGHT/WIDTH);

          canvas.style.width = currentWidth + 'px';
          canvas.style.height = currentHeight-100 + 'px';          
        }
        */
        
      }

      window.addEventListener('resize',this.resize, false);