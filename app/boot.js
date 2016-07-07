System.register(['angular2/platform/browser', './appli.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, appli_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (appli_component_1_1) {
                appli_component_1 = appli_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(appli_component_1.AppliComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map