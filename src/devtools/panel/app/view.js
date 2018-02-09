(function(exports) {
  if (!exports.tohken) {
    exports.tohken = {};
  }
  return exports.tohken.view = {
    player: {
      "set": false,
      "name": null,
      "level": null,
    },
    pluginInfo:{
      "manifest_version": 2,
      "version":"V.0.3.1.0",
    },
    resource: {
      "set": false,
      "bill": null,
      "bonemeal": null,
      "charcoal": null,
      "steel": null,
      "coolant": null,
      "file": null,
      "max_resource": null,
      "money": null
    },
    party: {
      "set": false,
      "data": {}
    },
    /*
    sword: {
      "set": false,
      "data": {}
    },
    */
    equips: {
      "set": false,
      "data": {}
    }
  };
})(window);
