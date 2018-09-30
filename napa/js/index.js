
// left flower animation
var leftFlower = Snap("#left-flower");

function leftFlowerAnimation(){
  leftFlower.animate({transform: "t1,0 r3"}, 2300, function() {
    leftFlower.animate({transform: "t-1,0 r-3"}, 2300)
  });
};

// middle flower animation
setInterval(leftFlowerAnimation,  4600);



// right flower animation
var rightFlower = Snap("#right-flower");

function rightFlowerAnimation(){
  rightFlower.animate({transform: "t1,0 r3"}, 2400, function() {
    rightFlower.animate({transform: "t-1,0 r-3"}, 2400)
  });
};

setInterval(rightFlowerAnimation, 4800);