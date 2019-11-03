/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo/ui5_barchart/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});