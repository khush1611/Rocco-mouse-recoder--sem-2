//// 1. When a user presses the record button, start recording actions
//// 2. When recording, push an object with the important data to the array
//// 			- Clear the array before starting a new recording
//// 3. Stop a recording by pressing the same button
//// 			- Print all of the position to the console using forEach: 123px 345px
//// 4. Replay the recording by iterating through the Array and move a custom cursor to the position that was recorded
//// 			- Ensure there is not current a recording going on (various ways to prevent that case)
// DOM elements
const $startAndStop = document.getElementById('startAndStop')
const $replayRecording = document.getElementById('replayRecording')
const $cursor = document.getElementById('cursor')

const $playButton = document.getElementById('replayRecording');

// Variables/data
let isRecording = false;
let mouseMoves = []

// Each movement of the mouse
window.addEventListener('mousemove', (event) => {
	if (isRecording) 
	{	
		// Record the data to the Array
		mouseMoves.push({x:event.clientX,y: event.clientY, ts:event.timeStamp})
	}
})
// Start/stop the recording
let stopButtonChange = document.getElementById('startAndStop')
$startAndStop.addEventListener('click', (event) => {
	if(isRecording)
	{
		document.querySelector('#startAndStop').innerText= "START";

		stopButtonChange.classList.remove("button-stop");
		stopButtonChange.classList.add("button-start");

		isRecording=false;
		$replayRecording.style.display='block';

	}else{
		mouseMoves=[];
		
		document.querySelector('#startAndStop').innerText= "STOP";
		
		stopButtonChange.classList.remove("button-start");
		stopButtonChange.classList.add("button-stop");
		
		isRecording = true;
		$replayRecording.style.display='none';

	}
	//evntlistner();
})

// Replay recording
$replayRecording.addEventListener('click', (event) => {
	testingPlayButton(0);
})

//play recording
function testingPlayButton(indexValue){
    if(indexValue < mouseMoves.length){
     		setTimeout(() => {  
			$cursor.style.top = `${mouseMoves[indexValue].y}px`;
			$cursor.style.left = `${mouseMoves[indexValue].x}px`;
			testingPlayButton(indexValue + 1)
	}, 25);
	
    }else{
      
        $cursor.style.top = '-10px';
		$cursor.style.left = '-10px';
    }
}

//// let mouseMoves = [
// 	// Examples:
// 	// {x: 123, y:212, t:0},
// 	// {x: 220, y:317, t:100},
// 	// {x: 126, y:218, t:145},
//// ]

// // function evntlistner(){
// // 	if(isRecording)
// // 	{
// // 		window.addEventListener('mousemove', (event) => {
// // 			mouseMoves.push({x:event.clientX,y: event.clientY, ts:event.timeStamp})
// // 			Record the data to the Array			
// // })
// // 	}
// // else{
//// 		// console.log("remove");
//// 		window.removeEventListener('mousemove', (event) => {
//// 			console.log("remove evntlistner");
//// 		});
//// 	}
//// }