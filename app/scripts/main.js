//Commented out for now. I hope to come back to it; I'd enjoy making a text-based adventure
//as much as I have enjoyed playing them in the past. It's currently outside of my abilities and
//time constraints.



// //room construction:
// var Room = function (options) {
// 	var options = options || {};
// 	this.name = options.name;
// 	this.description = options.description;
// 	this.exits = [];
// };

// Room.prototype.addExit = function (link, room) {
// 	this.exits.push({
// 		link: link,
// 		room: room,
// 	});
// 	return this;
// };

// Room.prototype.getRoom = function (link) {
// 	if (this.exits.length === 0) return false;
// 	for (var i = 0; i < this.exits.length; i++) {
// 		if (this.exits[i].link === link) return this.exits[i].room;
// 	}
// 	return false;
// };

// //ingame 'object' construction:
// var Object = function (options) {
// 	var options = options || {};
// 	this.name = options.name;
// 	this.description = options.description;
// 	this.onTouch = options.onTouch;
// 	// this.onTake = options.onTake;
// };

// //creature construction:
// var Creature = function (options) {
// 	var options = options || {};
// 	this.name = options.name;
// 	this.description = options.description;
// 	this.onTouch = options.onTouch;
// 	this.onAttack = options.onAttack;
// };

// var roomOne = new Room ({
// 	name: 'betweenlands',
// 	description: 'What you feel to be the betweenlands are a rather blank area within which to contemplate what you have or have not done.',
// 	exits: ['someplace',]
// });

// var someplace = new Room ({
// 	name: 'a warmer place',
// 	description: 'You are mildly uncomfortable here as it is rather warm.',
// 	exits: ['roomOne', 'vomitorium',]
// })

// var vomitorium = new Room ({
// 	name: 'vomitorium',
// 	description: 'This room is pretty gross. The end.'
// })

// var shadowEntity = new Creature ({
// 	name: "Shadow Entity",
// 	description: "You think you saw it out of your peripheral vision but when you turn to look the shadowy figure is gone.",
// 	onTouch: "You grasp out into the air around you- to your side, behind you- but it feels like nothing is there.",
// 	onAttack: "Fighting shadows, are we?",
// });




// //print:
// // var print= function (options)

// // var look = console.log(room.description);


