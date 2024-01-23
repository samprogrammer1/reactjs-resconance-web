import Pace from "pace-js";

Pace.start();
const loadingPace = () => {
    console.log('loadingPace function is called');
    Pace.on("start", function () {
        console.log('Pace start event');
      document.querySelector("#preloader").classList.remove("isdone");
      document.querySelector(".loading").classList.remove("isdone");
    });
    Pace.on("done", function () {
        console.log('Pace done event');
      document.querySelector("#preloader").classList.add("isdone");
      document.querySelector(".loading").classList.add("isdone");
      
    });
  
    if (document.querySelector("body").classList.contains("pace-done")) {
      document.querySelector("#preloader").classList.add("isdone");
      document.querySelector(".loading").classList.add("isdone");
    }
  
    window.addEventListener("load", () => {
      document.querySelector("#preloader").classList.add("isdone");
      document.querySelector(".loading").classList.add("isdone");
      if (document.querySelector('.pace-running.pace-running')) {
        document.querySelector('.pace-running.pace-running').classList.remove('pace-running')
      }
    });
  };
  
  export default loadingPace;
  