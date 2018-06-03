const { listen, pointer, styler } = popmotion;

let pointerTracker;
const menu = document.getElementById("context-menu");
const menuStyler = styler(menu);
const threshold = 100;
let start = {};

const xPointer = (startX, y) =>
  pointer({ x: startX, y: y }).pipe(({ x, y }) => {
    x, y;
  });

document.addEventListener("mousedown", setCoords);
document.addEventListener("touchstart", setCoords);

function setCoords(e) {
  start.x = e.clientX;
  start.Y = e.clientY;

  console.log(start.x);
  menu.style.transform = `translateX(${start.x}px)`;
}

listen(document, "mousedown touchstart").start(() => {
  // pointerTracker = xPointer(start.x, menuStyler.get('y'))
  //   .start(menuStyler.set);

//   pointerTracker = pointer({
//     x: menuStyler.get("x"),
//     y: menuStyler.get("y")
//   }).start(menuStyler.set);
// });

pointerTracker = pointer({x: start.x, y: y}).start(menuStyler.set('y'));
});

listen(document, "mouseup touchend").start(() => {
  if (pointerTracker) pointerTracker.stop();
});
