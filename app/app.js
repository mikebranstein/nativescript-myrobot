var application = require("application");
var callback =  function(args) {
    console.log(args.newValue);
};
application.on(application.orientationChangedEvent, callback);
application.start({ moduleName: "loading" });

