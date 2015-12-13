Package.describe({
    name: "marvin:machina",
    version: "0.1.2",
    summary: "A Meteor library for creating workflow through powerful and flexible finite state machines.",
    git: "https://github.com/marvinmarnold/meteor-machina"
});

Npm.depends({
    'machina': '1.1.2'
});

Package.on_use(function (api) {
    api.use(['stevezhu:lodash@1.0.2'])

    api.add_files([".npm/package/node_modules/machina/lib/machina.js"], ["client"]);
    api.add_files(["machina-server.js"],                                ["server"]);

    if(api.export)
        api.export('machina','server')
});

Package.on_test(function(api){

    api.use(['underscore'])
    api.use(['tinytest','test-helpers'])

    api.add_files([".npm/package/node_modules/machina/lib/machina.js"], ["client"]);
    api.add_files(["machina-server.js"],                                ["server"]);

});
