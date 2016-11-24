var globalName = "";

function onBodyLoad() {
	var name=localStorage.getItem("name");
	if (name == "Jason") {
		globalName = name;
	} else if (name == "Bojan") {
		globalName = name;
	} 
	populatePage("about");
}

function populatePage(page) {

/**
About information.
**/	
	if (page == "about") {	
		if (globalName == "Jason") {
			document.getElementById('info').innerHTML = "<p>Currently in his third year at Wilfrid Laurier University studying Computer Science. I live in waterloo, Ontario before that I went to High School in waterdown, Ontario.</p>" + "<img src='images/nhl.jpg'></img>";
		} else if (globalName == "Bojan") {
			document.getElementById('info').innerHTML = "<p>I am a third year computer science student at Wilfrid Laurier university. I grew up in Mississauga but was born in Pozega, Croatia.</p>" + "<img src='images/pozega.jpg'></img>";
		
		} 
/**
Work information.
**/
	} else if (page == "work") {
		if (globalName == "Jason") {
			document.getElementById('info').innerHTML = "<p>The programming languages that I have learned a VisualBasic, Java, Python, C and I am currently learning HTML5, JavaScript and CSS. I have spent the last 10 years working at a twin pad arena driving the zamboni doing various jobs, and before that I volunteered at a local hometown hockey league.</p>" +"<img src='images/zamboni.jpg'></img>";
		} else if (globalName == "Bojan") {
			document.getElementById('info').innerHTML = "<p>I have worked a wide variety of places and have some interesting experience. I delivered newspapers ages 8-12, worked at Pizza Hut ages 13-18, worked at SS&C Technologies ages 18-19, and have been working at CIBC ever since.</p>" + "<img src='images/ssc.jpg'></img>";
		}
/**
Play information.
**/
	} else if (page == "play") {
		if (globalName == "Jason") {
			document.getElementById('info').innerHTML = "<p>I have a passion for the sports of hockey and football. I have played hockey for a very long time, and still currently do. Also like a typical university student I enjoy going out for a couple of drinks with friends, of course when time permits.</p>" + "<img src='images/brews.jpg'></img>";
		} else if (globalName == "Bojan") {
			document.getElementById('info').innerHTML = "<p>I have a wide variety of hobbies, firstly I love to play sports in particular basketball, having played it competitively grades 5-12. I also really enjoy playing video games, strategy is my favourite genre I like games that make one think.</p>" + "<img src='images/nba.png'></img>";

		}
	}
}
