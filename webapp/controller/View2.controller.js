sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("sapui5.rk.onlyui.controller.View2", {
			onInit: function () {
                  
             
            },
            onBack: function () {
                var rou = this.getOwnerComponent().getRouter();
                rou.navTo("View1"); 
            }
		});
	});
