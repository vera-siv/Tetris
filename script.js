document.addEventListener("DOMContentLoaded", function() {
    const allStars = document.querySelectorAll('.star');
    allStars.forEach((star, i)=> {
        star.onclick = function() {
            let current_star_level = i + 1;
            allStars.forEach((star, j)=>{
                if (current_star_level >= j + 1) {
                    star.innerHTML = '&#9733;';
                } else{
                    star.innerHTML = '&#9734;';
                }
                    
            })
        }
    })
});

var i = 0;
var txt = "And finally, the user has a goal: collect information";
var speed = 50;
let repeatCount = 0;
let maxRepeats = 5;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typing").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        repeatCount++;
        if (repeatCount < maxRepeats) {
          setTimeout(() => {
            document.getElementById("typing").innerHTML = ""; // clear text
            i = 0;
            typeWriter(); // start over
          }, 1000); // pause before restarting
        }
    }
}



window.onload = function() {
    typeWriter();
}




window.addEventListener("load", () => {
    const wrapper = document.querySelector(".web-wrapper");
    const centerX = wrapper.offsetWidth / 2;
    const centerY = wrapper.offsetHeight / 2;
    const radius = 250;
  
    // Put Elorg (img1) at the center
    const elorg = document.getElementById("img1");
    elorg.style.left = `${centerX - elorg.offsetWidth / 2}px`;
    elorg.style.top = `${centerY - elorg.offsetHeight / 2}px`;
  
    // Other nodes around the circle
    const surrounding = ["img2", "img3", "img4", "img5"];
    surrounding.forEach((id, index) => {
      const angle = (index / surrounding.length) * 2 * Math.PI;
      const node = document.getElementById(id);
      const x = centerX + radius * Math.cos(angle) - node.offsetWidth / 2;
      const y = centerY + radius * Math.sin(angle) - node.offsetHeight / 2;
      node.style.left = `${x}px`;
      node.style.top = `${y}px`;
    });
  
    // Draw connecting lines from each node to the center (Elorg)
    surrounding.forEach((id, i) => {
      const node = document.getElementById(id);
      const line = document.getElementById(`line${i + 1}`);
  
      const wrapRect = wrapper.getBoundingClientRect();
      const nodeRect = node.getBoundingClientRect();
      const elorgRect = elorg.getBoundingClientRect();
  
      const x1 = nodeRect.left - wrapRect.left + node.offsetWidth / 2;
      const y1 = nodeRect.top - wrapRect.top + node.offsetHeight / 2;
      const x2 = elorgRect.left - wrapRect.left + elorg.offsetWidth / 2;
      const y2 = elorgRect.top - wrapRect.top + elorg.offsetHeight / 2;
  
      const dx = x2 - x1;
      const dy = y2 - y1;
      const length = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx) * 180 / Math.PI;
  
      line.style.width = `${length}px`;
      line.style.left = `${x1}px`;
      line.style.top = `${y1}px`;
      line.style.transform = `rotate(${angle}deg)`;
    });
  });

