sap.ui.define([
	"scp/cf/nemo-sample-01/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
	"use strict";
	
	return BaseController.extend("scp.cf.nemo-sample-01.controller.info.Information", {
		onInit: function() {
			var oJSONModel = new JSONModel();
			this.getView().setModel(oJSONModel);
			this._loadInfoData();
		},
		
		_loadInfoData: function() {
			this.getView().getModel().loadData("/api/info");
		}
	});
});