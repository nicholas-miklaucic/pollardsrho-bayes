var step = $(".step");

// set up slide attributes
$(".section.slides .copy").each(function() {
  $(this).children('.step').each(function(index) {
    $(this).attr("data-slide-num", index + 1);
  })
})


// initialize the scrollama
var scroller = scrollama();

// generic window resize listener event
function handleResize() {
  // 1. update height of step elements
  var stepH = Math.floor(window.innerHeight * 0.75);
  step.height(stepH + "px");
  $('.margin-spacer').height(stepH + "px");

  // 3. tell scrollama to update new element dimensions
  scroller.resize();
}

// scrollama event handlers
function handleStepEnter(response) {
  console.log(response);
  var el = $(response.element);
  if (el.attr("data-slide-num")) {
    var outer = $(el.parents("section.section")).find('.visual figure');
    outer.children(".slide").removeClass("active");
    outer.children(".slide:nth-child(" + el.attr("data-slide-num") + ")").addClass("active");
  }
  // response = { element, direction, index }
}

function init() {
  // 1. force a resize on load to ensure proper dimensions are sent to scrollama
  handleResize();

  // 2. setup the scroller passing options
  // this will also initialize trigger observations
  // 3. bind scrollama event handlers (this can be chained like below)
  scroller
    .setup({
      step: ".copy .step",
      offset: 0.5,
      debug: false
    })
    .onStepEnter(handleStepEnter);

  // setup resize event
  window.addEventListener("resize", handleResize);
}

// kick things off
init();

console.log("Loaded");
