
//room construction:
var Room = function (options) {
	var options = options || {};
	this.name = options.name;
	this.description = options.description;
	this.exits = [];
};

//creature construction:
var Creature = function (options) {
	var options = options || {};
	this.name = options.name;
	this.description = options.description;
	this.onTouch = options.onTouch;
	this.onAttack = options.onAttack;
};

var roomOne = new Room ({
	name: 'betweenlands',
	description: 'What you feel to be the betweenlands are a rather blank area within which to contemplate what you have or have not done.',
	// exits: [south]
});

var shadowEntity = new Creature ({
	name: "Shadow Entity",
	description: "You think you saw it out of your peripheral vision but when you turn to look the shadowy figure is gone.",
	onTouch: "You grasp out into the air around you- to your side, behind you- but it feels like nothing is there.",
	onAttack: "Fighting shadows, are we?",
});

//print:
// var print= function (options)



