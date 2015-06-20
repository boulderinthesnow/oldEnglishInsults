$(function(){

		arr1 = [ 
	"artless",
	"bawdy",
	"beslubbering",
	"bootless",
	"churlish",
	"cockered",
	"clouted",
	"craven",
	"currish",
	"dankish",
	"dissembling",
	"droning",
	"errant",
	"fawning",
	"fobbing",
	"froward",
	"frothy",
	"gleeking",
	"goatish",
	"gorbellied",
	"impertinent",
	"infectious",
	"jarring",
	"loggerheaded",
	"lumpish",
	"mammering",
	"mangled",
	"mewling",
	"paunchy",
	"pribbling",
	"puking",
	"puny"
	]

	arr2 = [
	"base-court",
	"bat-fowling",
	"beef-witted",
	"beetle-headed",
	"boil-brained",
	"clapper-clawed", 
	"clay-brained",
	"common-kissing", 
	"crook-pated",
	"dismal-dreaming",
	"dizzy-eyed",
	"doghearted",
	"dread-bolted",
	"earth-vexing",
	"elf-skinned",
	"fat-kidneyed",
	"fen-sucked",
	"flap-mouthed",
	"fly-bitten",
	"folly-fallen",
	"fool-born",
	"full-gorged",
	"guts-griping",
	"half-faced",
	"hasty-witted",
	"hedge-born",
	"hell-hated",
	"idle-headed",
	"ill-breeding",
	"ill-nurtured",
	"knotty-pated",
	"milk-livered"
	]

	arr3 = [
	"apple-john",
	"baggage",
	"barnacle",
	"bladder",
	"boar-pig",
	"bugbear",
	"bum-bailey",
	"canker-blossom",
	"clack-dish",
	"clotpole",
	"coxcomb",
	"codpiece",
	"death-token",
	"dewberry",
	"flap-dragon",
	"flax-wench",
	"flirt-gill",
	"foot-licker",
	"fustilarian",
	"giglet",
	"gudgeon",
	"haggard",
	"harpy",
	"hedge-pig",
	"horn-beast",
	"hugger-mugger",
	"joithead",
	"lewdster",
	"lout",
	"maggot-pie",
	"malt-worm",
	"mammet"
	]	 

	shutupVal = [
	"quiet",
	"shut up",
	"end your mouth-flapping",
	"shut your cock holster",
	"shut your face",
	"I hope you get a cramp in your tongue",
	"Shut your mouth",
	"Shut your pie hole",
	"Shut your yappers",
	"Silence",
	"Shut that hole in your face",
	"Hush up",
	"end your jibber jabber",
	"silence your flappers",
	"stop your yammering"
	]

	learnToPlayInsult = [
	"learn to play",
	"I should report you for feeding",
	"You're as useless as a screen door on a submarine"
	]

	randomInsult = [
	"Does your ass ever get jealous of the amount of shit that comes out of your mouth?",
	"This fool needs to get a wife so he'll stop screwing us",
	"You're a person of rare intelligence. It's rare when you show any.",
	"You are living proof that God has a sense of humor.",
	"Are you always an idiot, or just when I'm around?",
	"Are your parents siblings?",
	"You're so dense, light bends around you."
	]

	// THREE BUTTONS
	$("#silence-button").on('click', function(event) {
		event.preventDefault();
		$("#insertHere").css("animation-name","fade")
		$("#insertHere").css("background-color","#d1203f")
		setTimeout(function() {
			$("#insertHere").css("animation-name","")
		},500)
		console.log(randInsult())
		insult = arr1[randInsult()] + " " + arr2[randInsult()] + " " + arr3[randInsult()]
		header = shutupVal[randHeader()] + " you "
		$("#insertHere").html(header + insult)
		console.log(insult)
	}); // END SILENCE EVENT HANDLER

	$("#random-button").on('click', function(event) {
		event.preventDefault();
		$("#insertHere").css("animation-name","fade")
		$("#insertHere").css("background-color","#00FF00")
		$("#insertHere").css("color","black")
		setTimeout(function() {
			$("#insertHere").css("animation-name","")
		},500)
		console.log(randInsult())
		insult = arr1[randInsult()] + " " + arr2[randInsult()] + " " + arr3[randInsult()]
		header = shutupVal[randHeader()] + " you "
		$("#insertHere").val(header + insult)
		console.log(insult)
	}); // END SILENCE EVENT HANDLER

	$("#learn-button").on('click', function(event) {
		event.preventDefault();
		$("#insertHere").css("animation-name","fade")
		$("#insertHere").css("background-color","#d1203f")
		setTimeout(function() {
			$("#insertHere").css("animation-name","")
		},500)
		insult = arr1[randInsult()] + " " + arr2[randInsult()] + " " + arr3[randInsult()]
		header = learnToPlayInsult[randHeaderLearn()] + " you "
		console.log(header + insult)
		$("#insertHere").val(header + insult)
		console.log(insult)
	}); // END SILENCE EVENT HANDLER



	function randInsult(){
		var rand = Math.floor(Math.random()*arr1.length)
		return rand
	} // END RANDINSULT FUNCTION

	function randHeader(){
		var rand = Math.floor(Math.random()*shutupVal.length)
		return rand
	} // END RANDHEADER FUNCTION	

	function randHeaderLearn(){
		var rand = Math.floor(Math.random()*learnToPlayInsult.length)
		console.log(rand)
		return rand
	} // END RANDHEADER FUNCTION


}); // END JQUERY DOC READY



