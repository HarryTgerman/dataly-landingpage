 
   // Initialize Firebase


    $( document ).ready(function() {

      var config = {
        apiKey: "AIzaSyDTfKzoAn1JR0gWa61JKf8rGEOXhbKYdrI",
        authDomain: "dataly-994ea.firebaseapp.com",
        databaseURL: "https://dataly-994ea.firebaseio.com",
        projectId: "dataly-994ea",
        storageBucket: "dataly-994ea.appspot.com",
        messagingSenderId: "1012232933078"
      };
      firebase.initializeApp(config);
    //   $( "#target" ).click(function() {
    //     $('#myModal').css('display', 'flex');
    //   });

    //   $("#close").click(function(){
    //     $('#myModal').css('display', 'none');
    // });


    $(".modalopener" ).on('touch click', function(e) { $('#myModal').css('display', 'flex');});
    $("#close" ).on( 'touch click', function(e) { $('#myModal').css('display', 'none');});


      var triggers = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));
      window.addEventListener('click', function (ev) {
        var elm = ev.target;
      
        if (triggers.includes(elm)) {
          var selector = elm.getAttribute('data-target');
          collapse(selector, 'show', elm);

         
        }
      }, false);
      var fnmap = {
        'toggle': 'toggle',
        'show': 'add',
        'hide': 'remove'
      };

      var collapseCounter;

      var seconds = 0;
      
      function incrementSeconds() {
          seconds += 1;
      }
      
      setInterval(incrementSeconds, 1000);

      var email =  $('#submitEmail').val();
      var situation =  $('#submitSituation').val();
      var feature =  $('#submitFeature').val();
    
      
      $('#submittButton').on('click', function() {
          writeUserData(email, situation, feature);
          $('#submitEmail').val('');
          $('#submitSituation').val('');
          $('#submitFeature').val('');
          $('#myModal').css('display', 'none');
        
      });
     

    
      var videoArr = ['assets/Dataly_monitor.mp4','assets/Dataly_correct.mp4', 'assets/Dataly_automate.mp4']

      var triggersArr = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));

      function recurse1(counter) {
        if(seconds > 10){return 0}
        var collapse = function collapse(selector) {
          var collapse = Array.from(document.querySelectorAll('.collapse'));
            collapse.forEach(function (target, index) {
              var animationDuration;
             
              target.classList.remove('show');
              target.classList.add('hide');        
              $(target).prev().children('.timerWrapper').css('display','none')      
            if (target.classList.contains(selector.split('.')[2])){
              $('#vidSource').attr('src', videoArr[index]);
              document.getElementById('vid').load();
              document.getElementById('vid').play();
             
              $(target).prev().children('.timerWrapper').css('display','flex')
                seconds= 0;
                target.classList.remove('hide');
                target.classList.add('show');
            }
          });
        }
        var triggers1 = triggersArr[counter];
        var selector = triggers1.getAttribute('data-target');
        collapse(selector, 'show');
        delete triggersArr[counter];
        triggersArr.push(triggers1);
        setTimeout(function() {
           console.log(triggers1);
            recurse1(counter + 1);
        }, 2000);
      };

      recurse1(0)


      var collapse = function collapse(selector, cmd) {
        var collapse = Array.from(document.querySelectorAll('.collapse'));
        collapse.forEach(function (target, index) {
          // target.classList[fnmap[cmd]]('show');
            target.classList.remove('show');
            target.classList.add('hide');
            $(target).prev().children('.timerWrapper').css('display','none')
          if (target.classList.contains(selector.split('.')[2])){
            seconds= 11;
            $('#vidSource').attr('src', videoArr[index]);
            document.getElementById('vid').load();
            document.getElementById('vid').play();
            seconds= 0;
            $(target).prev().children('.timerWrapper').css('display','flex')
            target.classList.remove('hide');
            target.classList.add('show');
            setTimeout(function() {
              triggersArr = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));
              console.log(triggersArr);
              recurse1(0);
              // setInterval(incrementSeconds, 1000);
          }, 2000);
          }
          
        });
      };

      var arr = [ "Spreadsheet", "Dataset", "Logs"];

      // run through the array forever
      function recurse(counter) {
        // get the colour
        var text = arr[counter];
        // animate it
       
        $('#headlineKeyword').text(text);
        let width = $('#headlineKeyword').width();
        if($(window).width() < 767 ){
          let distance =  (343 - width)/2
        $('.miniRectangle').css({'margin-left':+width+distance+"px"});
        console.log('phone')
        }
        if($(window).width() > 767 && $(window).width() < 1023){
        $('.miniRectangle').css({'margin-left':+width+5+"px"});
        console.log('tablet')
        }
        else if($(window).width() > 1023) {
        $('.miniRectangle').css({'margin-left':width+5+"px"});
        console.log('Desktop')
        }
        // delete the value to save memory
        delete arr[counter];
        // add the value at the end of the array
        arr.push(text);
        // run it again for the next number
        setTimeout(function() {
            recurse(counter + 1);
        }, 5000)
      // start it for the first number.
      };

      recurse(0)
      
      document.getElementById('firstVideo').play();

      var tables = function createTables(){
        for(var i = 0; i < 30; i++){
          if(i > 14 && $(window).width() > 767){
           return 0
          }
          else {
            $('tbody tr:last').after(`
          <tr>
            <td>${i+1}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="col-sm-hidden"></td>
            <td class="col-sm-hidden"></td>
            <td class="col-sm-hidden"></td>
            <td class="col-sm-hidden col-tablet-hidden"></td>
            <td class="col-sm-hidden col-tablet-hidden"></td>
            <td class="col-sm-hidden col-tablet-hidden"></td>
            <td class="col-sm-hidden col-tablet-hidden"></td>
            <td class="col-sm-hidden col-tablet-hidden"></td>
            <td class="col-sm-hidden col-tablet-hidden"></td>
            <td class="col-sm-hidden col-tablet-hidden"></td>
            <td class="col-sm-hidden col-tablet-hidden"></td>
            <td class="col-sm-hidden col-tablet-hidden"></td>
            <td class="col-sm-hidden col-tablet-hidden"></td>
            <td class="col-sm-hidden col-tablet-hidden"></td>
            <td class="col-sm-hidden col-tablet-hidden"></td>
            <td class="col-sm-hidden col-tablet-hidden"></td>
            <td class="col-sm-hidden col-tablet-hidden"></td>
            <td class="col-sm-hidden col-tablet-hidden"></td>
            <td class="col-sm-hidden col-tablet-hidden"></td>
            <td class="col-sm-hidden col-tablet-hidden"></td>
          </tr>`)
          }
          
        }
      }

      tables()
      //create new connection to firebase
     
     

        $( "#target" ).click(function() {
            $('#myModal').css('display', 'flex');
          });
     
          $( "#target1" ).click(function() {
            $('#myModal').css('display', 'flex');
          });
       
       
        $("#close").click(function(){
            $('#myModal').css('display', 'none');
        });
        
        $(window).click(function(e) {
            if (e.target == $('.modal')[0]) {
                $('#myModal').css('display', 'none');
            }
        });

        function writeUserData( email, situation, feature ) {
          firebase.database().ref('user').push({
            email: email,
            situation: situation,
            feature: feature
          });
        
  
       
  
       
        

    //     $("#email-form").bind('ajax:complete', function() {

    //        alert('thank you for submitting the form we will get back to you as soon as possible')
   
   
    //   });

   

       
       

              
    }});

    

   
   