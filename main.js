const paragraphs = ["It seemed like it should have been so simple. There was nothing inherently difficult with getting the project done. It was simple and straightforward enough that even a child should have been able to complete it on time, but that wasn't the case.The deadline had arrived and the project remained unfinished",
"It was a rat nest. Not a literal one, but that is what her hair seemed to resemble every morning when she got up. It was going to take at least an hour to get it under control and she was sick and tired of it. She peered into the mirror and wondered if it was worth it. It was not . She opened the drawer and picked up the hair clippers.",
"It's always good to bring a slower friend with you on a hike. If you happen to come across bears, the whole group doesn't have to worry. Only the slowest in the group do. That was the lesson they were about to learn that day."];

const msg = document.getElementById('msg');
const userInput = document.getElementById('inputs');
const btn = document.getElementById('btn');
let startTime, endTime;

const playGames = () => {
	let randNumber = Math.floor(Math.random()*paragraphs.length);
	msg.innerText = paragraphs[randNumber];
	let date = new Date();
	startTime = date.getTime();
	btn.innerText = 'Done';
};


const wordCounter = (str) => {
	let response = str.split(' ').length;
	return response;
};

const ended = () => {
	let date = new Date();
	endTime = date.getTime();
	let totalTime = ((endTime - startTime)/1000);

	let totalWords = userInput.value;
	let wordCount = wordCounter(totalWords);
	
	let speed = Math.round((wordCount/totalTime)*60);

	let result = "Your typing speed is " +speed +" words per minute. ";
	result += compareWords(msg.innerText,totalWords);
	msg.innerText = result;
};

const compareWords= (str1, str2) =>{
	let words1 = str1.split(' ');
	let words2 = str2.split(' ');
	let count = 0;

	words1.forEach(function (item, index){
		if (item == words2[index]){
			count++;
			console.log(words2[index]);
		}
	})
	let errors = (words1.length - count);
	return (count + " words are correct out of " + words1.length + " words and total number of errors are " + errors);

};

btn.addEventListener('click', function(){
	if(this.innerText == 'Start'){
	userInput.disabled = false;
	playGames();
	}else if(this.innerText == 'Done'){
		userInput.disabled = true;
		this.innerText = 'Start'
		ended();
	}
});