sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("sapui5.rk.onlyui.controller.View1", {
			onInit: function () {

            },
            onPress: function () {
                var rou = this.getOwnerComponent().getRouter();
                rou.navTo("View2");
            },
            onTable: function () {
                var rou = this.getOwnerComponent().getRouter();
                rou.navTo("View3");
            }
		});  
	});
