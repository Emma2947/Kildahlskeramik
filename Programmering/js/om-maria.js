//Javascript til Burgermenuen

function myFunction() {
    var x = document.getElementById("menu");
    var y = document.getElementById("topnav");
    if (x.style.display === "block") {
     x.style.display = "none";
     } else {
      x.style.display = "block";
     }
    }


//Skrifttype

  (function(d) {
    var config = {
      kitId: 'uex2dst',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);



//Video
var video = document.getElementById("myVideo");
video.play();

video.addEventListener("ended", function() {
  video.play();
});

//Keramik rejse
var knap = document.getElementById('knap');
var tekst = document.getElementById('tekst');

knap.addEventListener('click', function() {
  if (tekst.style.display === 'none') {
    tekst.style.display = 'block';
  } else {
    tekst.style.display = 'none';
  }
});
