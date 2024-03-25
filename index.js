// code your solution here
// index.js

// 1) Define saturdayFun function declaration
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // 4) Define mondayWork function expression
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  
  // 7) Define wrapAdjective function
  function wrapAdjective(flair = "*") {
    return function(adjective) {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }
  
  // For testing purposes:
  // console.log(saturdayFun()); // Output: "This Saturday, I want to roller-skate!"
  // console.log(mondayWork()); // Output: "This Monday, I will go to the office."
  // const wrapStar = wrapAdjective("*");
  // console.log(wrapStar("cool")); // Output: "You are *cool*!"
  // const wrapPipe = wrapAdjective("||");
  // console.log(wrapPipe("awesome")); // Output: "You are ||awesome||!"
  