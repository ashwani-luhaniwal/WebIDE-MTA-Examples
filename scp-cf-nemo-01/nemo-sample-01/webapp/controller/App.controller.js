sap.ui.define([
	"scp/cf/nemo-sample-01/controller/BaseController"
], function(BaseController, MessageToast) {
	"use strict";

	return BaseController.extend("scp.cf.nemo-sample-01.controller.App", {
		onPressSideNavigationToggleButton: function (event) {
			var toolPage = this.getView().byId("toolPage");
			toolPage.setSideExpanded(!toolPage.getSideExpanded());
		},
		
		onItemSelect: function(oEvent) {
			var item = oEvent.getParameter("item");
			
			switch(item.getKey()) {
				case "info":
					this.getRouter().navTo("information");
					break;
				case "users":
					this.getRouter().navTo("users");
					break;
			}
		}
	});
});