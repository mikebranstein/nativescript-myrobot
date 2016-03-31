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
        {name: "Head!", speech: "Baby, where is my head?"},             
        {name: "Yellow", speech: "Mom's favorite color is yellow!"},             
        {name: "Cup", speech: "There's a cup onyour head with water in it! Watch out!"},             
        {name: "Bacon", speech: "Why is that bacon wearing glasses on your head?"},             
        {name: "Hair", speech: "I love your beautiful blonde hair."},             
        {name: "Backpack", speech: "THere's two backpacks stuck to your back."},             
        {name: "Cotton Balls", speech: "Mommy, why did you eat those cotton balls?"},             
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
        {name: "Bigfoot", speech: "Watch out! There's a bigfoot behind you!"},             
        {name: "School", speech: "It's time to go to school, pur on your backpack Charlie."},             
        {name: "Easter", speech: "It's Easter time."},             
        {name: "Pirate Ship", speech: "Who made that pirate ship?"},             
        {name: "Home", speech: "Let's build a home together."},             
        {name: "Decorations", speech: "Time to put decorations on the window Charlie."},             
        {name: "Grocery Cart", speech: "Let me push the grocery cart to get food."},             
        {name: "Alien", speech: "Outer space is really scary when there's an octopus outside your spaceship."},             
        {name: "Pillow Fight", speech: "Let's have a pillow fight!"},             
        {name: "Superman", speech: "The most powerful superhero is Superman."},             
        {name: "Gingerbread Cookies", speech: "I want to eat gingerbread cookies with you Charlie."},             
        {name: "Cook", speech: "Let's cook dinner together."},             
        {name: "Lava", speech: "Watch out there's hot lava on the floor!"},             
        {name: "Chicken", speech: "Do you like chicken on the bone?"},             
        {name: "Baking", speech: "What should we bake today Charlie."},             
        {name: "Bike", speech: "Charlie and his robot were riding on his bike outside."},             
        {name: "Running", speech: "Let's run in a cave today with flashlights."},             
        {name: "Bird Feeder", speech: "Let's put a bird feeder with crocodile stickers outside for the birds to eat."},             
        {name: "Older", speech: "When we are older, can you build me some legs?"},             
        {name: "Wes", speech: "Wes, there's a spaceship going by. I can see it through the window."},             
        {name: "Mashmallow", speech: "Eating marshmallows is my favorite thing to do over the 4th of July."},             
        {name: "Pkitty", speech: "I hope pee kitty can sleep with me tonight."},             
        {name: "Game", speech: "Let's design and build a game together."},             
        {name: "Fun!", speech: "I'm having so much fun with you Charlie."},             
        {name: "Builder", speech: "Charlie, you're a great builder and maker."}            
    ]; 
    viewModel.profiles.mike = new Observable();
    viewModel.profiles.mike.name = "Mike";
    viewModel.profiles.mike.items = [
        {name: "Zombie", speech: "I am a zombie. Run!"},             
        {name: "Scooby Doo", speech: "Scooby dooby doo"},             
        {name: "Earth", speech: "The earth is the third planet from the sun"},             
        {name: "Lamp", speech: "Why is there a lamp shade on your head dad?"},             
        {name: "Astronauts", speech: "Astronauts drink form a straw that travels up the side of their body in their spacesuits."},             
        {name: "Worms", speech: "Earthworms help plants grow by eating and igging through the soil."},             
        {name: "Lego", speech: "Dad, why are there legos in your pocket?"},             
        {name: "Race", speech: "Let's race today."},             
        {name: "Cars", speech: "Combustion engines run on gasoline."},             
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
        {name: "Race Cars", speech: "There are race cars driving fast outside."},             
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