/***** global console, *****/

/******** Memory Game **********/
//set width and height attribute
/*var img2 = document.querySelectorAll('.game .inner .gameBlock .back img');
img2.setAttribute('width',100);
img2.setAttribute('height',100);*/
//l button
document.querySelector(".control-buttons span").onclick = function () {
    let yourName = prompt("Whats Your Name?");
    if (yourName == null || yourName == "") {
        document.querySelector(".name span").innerHTML = 'Unknown';
    } else {
        document.querySelector(".name span").innerHTML = yourName;
    }
    // Remove Splash Screen
document.querySelector(".control-buttons").remove();
};
//collect data
let duration = 1000;
let gameBlock = document.querySelector(".inner");
let blocks = Array.from(gameBlock.children);
// Create Range Of Keys
let orderRange = [...Array(blocks.length).keys()];//... 3l4an afsl l array gwa l orderRange //or
 //let orderRange =Array.from(Array(blocks.length).keys());
 // Add Order Css Property To Game Blocks
 shuffle(orderRange);
 blocks.forEach((block, index) => {
     // Add CSS Order Property
     block.style.order = orderRange[index];
     // Add Click Event
  block.addEventListener('click', function () {
    // Trigger The Flip Block Function
    flipBlock(block);
  });
 });
 // Flip Block Function
function flipBlock(selectedBlock) {
    // Add Class is-flipped
    selectedBlock.classList.add('flipped');
    // Collect All Flipped Cards
    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('flipped')); //by4of l block
    // l 3leha class flipped
    // If Theres Two Selected Blocks
    if (allFlippedBlocks.length === 2) {
    // console.log('Two Flipped Blocks Selected');
    // Stop Clicking Function
    stopClicking();
    // Check Matched Block Function
    checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]); // l 2 block l ft7tohm

  }
  
}  

// Stop Clicking Function
function stopClicking() {

    // Add Class No Clicking on Main Container
    gameBlock.classList.add('no-clicking');
  
    // Wait Duration
    setTimeout(() => {
  
      // Remove Class No Clicking After The Duration
      gameBlock.classList.remove('no-clicking');
  
    }, duration);
  
  }

  // Check Matched Block
  function checkMatchedBlocks(firstBlock, secondBlock) {
    let triesElement = document.querySelector('.tries span');
    if (firstBlock.dataset.technology === secondBlock.dataset.technology) { //l 2 block l kehom nfs l data-technology
        firstBlock.classList.remove('flipped');
        secondBlock.classList.remove('flipped');
        firstBlock.classList.add('match');
        secondBlock.classList.add('match');
       // document.getElementById('success').play();
    } else {
        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
        setTimeout(() => {
            //by4el l flipped class 3l4an yrg3o 3lamt astfham tani
            firstBlock.classList.remove('flipped');
            secondBlock.classList.remove('flipped');
        }, duration);
        //document.getElementById('fail').play();
    }
  }
 // Shuffle Function
 function shuffle(array) {
  // Settings Vars
    let current = array.length,
        temp,
        random;
    while (current > 0) {
        // Get Random Number
        random = Math.floor(Math.random() * current);
        // Decrease Length By One
        current--;
        // [1] Save Current Element in Stash
        temp = array[current];
        // [2] Current Element = Random Element
        array[current] = array[random];
        // [3] Random Element = Get Element From Stash
        array[random] = temp;
    }
    return array;
 }


