window.addEventListener('load', ()=>{
  const sounds=document.querySelectorAll(".sound");
  const pads=document.querySelectorAll(".pads div div");

  if('serviceWorker' in navigator){
    try {
      navigator.serviceWorker.register('serviceWorker.js');
      console.log("Service Worker Registered");
    } catch (error) {
      console.log("Service Worker Registration Failed");
    }
  }

  pads.forEach((pad,index) => {
    pad.addEventListener('click', ()=> {
      sounds[index].currentTime = 0;
      sounds[index].play();
    });
  });

});



