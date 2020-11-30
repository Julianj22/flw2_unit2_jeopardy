/* TODO: Program the following:
 *   Start the countdown timer whenever a question cell is clicked.
 *
 * 1. Add a click handler to all elements with the 'question-cell' class (like
 *    we did in click_handler.js), which does the following actions.
 *
 * 2. Call startCountdownTimer with three parameters:
 *
 *    a) Timer length, in seconds (start with 10)
 *    b) A callback function which returns true when the timer should be
 *       canceled, e.g. when the user presses "show answer" before time is up!
 *    c) A callback function which runs when the user runs out of time.
 *
 * 3. Implement the times-up callback function 2(c), which should show the
 *    answer choices, but with the "correct" button disabled.
 *
 * 4. Implement the should-cancel callback function 2(b), which should return
 *    true if the user pressed the show-answer or close buttons.
 *
 * THIS ONE IS HARD! DON'T WORRY IF YOU NEED TO ASK FOR HELP!
 */

$(".question-cell").click(function () {
  // function endTimer() {
  //   $("question-modal-show-answer").click(function () {
  //     return true;
  //   });
  // }

  function timeUp() {
    setTimeout(function () {
      alert("hi");
    }, 1);
  }

  timeUp();

  //   function startCountdownTimer(timeLength, endTimer, timeUp);
});
