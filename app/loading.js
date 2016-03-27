var Observable = require("data/observable").Observable;
var frameModule = require("ui/frame");
var page;
var interval;

function onNavigatingTo(args) {
    page = args.object;
    page.bindingContext = createViewModel();

    interval = setInterval(intervalTick, 1000);    
}
exports.onNavigatingTo = onNavigatingTo;

function createViewModel() {
    var viewModel = new Observable();
    viewModel.progress = 0;
    return viewModel;
}

function intervalTick() {
    page.bindingContext.progress += 27;
    if (page.bindingContext.progress >= 100) {
        clearInterval(interval);

        var navigationEntry = {
            moduleName: "main-page",
            clearHistory: true,
            transition: {
                name: "fade",
                duration: 360,
                curve: "easeIn"
            }
        };
        frameModule.topmost().navigate(navigationEntry);
        
    }
    
}
