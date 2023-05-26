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


//Parallax

document.addEventListener('DOMContentLoaded', function() {
    var parallaxImage = document.querySelector('.parallax-image');
  
    function updateParallax() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      parallaxImage.style.transform = 'translate3d(0, ' + scrollTop * 0.4 + 'px, 0)';
    }
  
    window.addEventListener('scroll', updateParallax);
  });



  //Mapbox

  const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-77.032, 38.913]
        },
        properties: {
          title: 'Mapbox',
          description: 'Washington, D.C.'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-122.414, 37.776]
        },
        properties: {
          title: 'Mapbox',
          description: 'San Francisco, California'
        }
      }
    ]
  };  



  mapboxgl.accessToken = 'pk.eyJ1IjoiZW1tYTI5NDciLCJhIjoiY2xocTY2cndxMDE1cjNmbzh5dmducjdyciJ9.qTGQsI4BH-7Q2AQ1uFuFnA';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v11',
  center: [-96, 37.8],
  zoom: 3
});
  
