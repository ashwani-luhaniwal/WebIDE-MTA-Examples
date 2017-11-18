sap.ui.define([
	"scp/cf/nemo-sample-01/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function(BaseController, JSONModel, MessageToast) {
	"use strict";
	
	return BaseController.extend("scp.cf.nemo-sample-01.controller.user.Users", {
		onInit: function() {
			var oJSONModel = new JSONModel();
			this.getView().setModel(oJSONModel);
			this._loadUserData();
		},
		
		onAddUser: function(oEvent) {
			this._getDialog().open();
			this._loadUserData();
		},
		
		onDeleteUser: function(oEvent) {
			var that = this;
			
			var oContext = oEvent.getSource().getParent().getBindingContext();
			
			var id = oContext.getProperty("id");
			
			$.ajax({
				url: "/api/user/" + id,
				type: "DELETE"
			}).done(function() {
				MessageToast.show(that.getResourceBundle().getText("msgUserDeleted", [id]));
				that._loadUserData();
			}).fail(function(jqXHR, textStatus, error) {
				MessageToast.show(that.getResourceBundle().getText("msgError"));	
			});
		},
		
		_loadUserData: function() {
			this.getView().getModel().loadData("/api/user");
		},
		
		_getDialog: function() {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("scp.cf.nemo-sample-01.view.user.UserCreate", this);
				this.getView().addDependent(this._oDialog);
			}
			return this._oDialog;
		}
	});
	
});