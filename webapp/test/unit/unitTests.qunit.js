/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"bar/bar_rbh/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});