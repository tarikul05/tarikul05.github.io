$(document).ready(function() {
	var typed = new Typed("#typed", {
			strings: ['whoami <br/> \n `I am TARIKUL ISLAM <br/>` ^1000\n `I am a Software Developer <br/>` ^1000\n `Playing with latest techonologis more then 10 years <br/>` ^1000\n `I love to working with latest techonologis <br/> Thanks `'],
			typeSpeed: 30,
    	backSpeed: 0,
      callback: function(){
        shift();
      }
	});
      $('#dock2').Fisheye(
        {
          maxWidth: 80,
          items: 'a',
          itemsText: 'span',
          container: '.dock-container2',
          itemWidth: 60,
          proximity: 100,
          alignment : 'left',
          valign: 'bottom',
          halign : 'center'
        }
      )
});

function shift(){
      // $(".head-wrap").addClass("shift-text");
      // terminalHeight();
  }

  function terminalHeight(){
      var termHeight = $(".terminal-height");
      var value = termHeight.text();
      value = parseInt(value);
      setTimeout(function(){
          if (value > 10){
              value = value-1;
              this.txtValue = value.toString();
              termHeight.text(this.txtValue);
              self.terminalHeight();
          }
          else{
              clearTimeout();
          }
      }, 10);
  }

