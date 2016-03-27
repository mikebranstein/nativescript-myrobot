var Observable = require("data/observable").Observable;
var frameModule = require("ui/frame");

function createViewModel() {
    var viewModel = new Observable();

    viewModel.profiles = {};
    viewModel.profiles.abby = new Observable();
    viewModel.profiles.abby.name = "Abby";
    viewModel.profiles.abby.items = [
        {name: "Pants!", speech: "Honey, where are my pants?"},             
        {name: "Coffee", speech: "I need a coffee drink."},             
        {name: "Dance", speech: "Let's dance together."},             
        {name: "Treaties", speech: "I love treaties!"}             
    ];
    viewModel.profiles.charlie = new Observable();
    viewModel.profiles.charlie.name = "Charlie";
    viewModel.profiles.charlie.items = [
        {name: "Robot", speech: "I am a robot."},
        {name: "Take Off", speech: "Let's take off in our space ship."},
        {name: "Landing", speech: "Captain to control tower. We're coming in for a landing."},             
        {name: "Donuts", speech: "My favorite treat is a donut."},             
        {name: "Pancake", speech: "I love big chocolate pancakes"},             
        {name: "Error", speech: "bleep bloop crash error error error"},             
        {name: "Cupid", speech: "Let's go get Cupid and play a game."},             
        {name: "Charlie", speech: "You're a great friend Charlie."},          
        {name: "Builder", speech: "Charlie, you're a great builder and maker."}            
    ]; 
    viewModel.profiles.mike = new Observable();
    viewModel.profiles.mike.name = "Mike";
    viewModel.profiles.mike.items = [
        {name: "Zombie", speech: "I am a zombie. Run!"},             
        {name: "Scooby Doo", speech: "Scooby dooby doo"},             
        {name: "Earth", speech: "The earth is the third planet from the sun"},             
        {name: "Me", speech: "Your dad created me to help Charlie and Wes"}             
    ]; 
    viewModel.profiles.wes = new Observable();
    viewModel.profiles.wes.name = "Wes";
    viewModel.profiles.wes.items = [
        {name: "Lovey", speech: "Wes, let's go find lovey and play a game."},             
        {name: "Vegatables", speech: "Vegetables are so yummy."},             
        {name: "Monster", speech: "Look out behind you. It's a monster"},             
        {name: "Funny", speech: "Wesley you are so funny."},             
        {name: "Smart", speech: "Wesley your ideas are very inventive."},             
        {name: "Maker", speech: "Wes you are a great builder and maker"},             
    ]; 

    viewModel.onTap = function(args) {
        console.log("tapped");
        var id = args.object.id;
        
        var navigationEntry = {
            moduleName: "views/profile/profile",
            context: this.profiles[id]
        }
        frameModule.topmost().navigate(navigationEntry);
    };

    return viewModel;
}

exports.createViewModel = createViewModel;