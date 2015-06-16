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
"shut your face",
"I hope you get a cramp in your tongue",
"Shut your mouth",
"Shut your pie hole",
"Shut your yappers",
"Silence",
"Shut that hole in your face",
"Hush up",
]


	$("#silence-button").on('click', function(event) {
		event.preventDefault();
		
		console.log(randInsult())
		insult = arr1[randInsult()] + " " + arr2[randInsult()] + " " + arr3[randInsult()]
		header = shutupVal[randHeader()] + " you "
		$("#field").val(header + insult)
		console.log(insult)
	});

function randInsult(){
	var rand = Math.floor(Math.random()*arr1.length)
	return rand
}

function randHeader(){
	var rand = Math.floor(Math.random()*shutupVal.length)
	return rand
}


}); // end jquery doc ready



