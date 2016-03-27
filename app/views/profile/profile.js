
var tts = require("nativescript-texttospeech");
var frameModule = require("ui/frame");
var page;

function onNavigatingTo(args) {
    page = args.object;
    page.bindingContext = page.navigationContext;
}
exports.onNavigatingTo = onNavigatingTo;

function onTap(args) {
    var name = args.object.text;
    var speech = search(name, page.bindingContext.items).speech;
    console.log("tapped: " + name);
    console.log(speech);
    tts.speak(speech, false, 1.0, 0.5, null);
}
exports.onTap = onTap;

function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            return myArray[i];
        }
    }
}