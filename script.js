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


	$("#button").on('click', function(event) {
		event.preventDefault();
		$("#field").val("YOYOYO")
	});

function randOne(){
	var rand = Math.round(Math.random()*arr1.length-1)
}
console.log(randOne())



}); // end jquery doc ready



