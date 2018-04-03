sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function(Controller, JSONModel, MessageToast) {
	"use strict";

	return Controller.extend("jsview.controller.View1", {
		onPress: function(){
			var ta = this._createTimeAxis1();
			sap.ui.getCore().byId("__jsview0--ganttView").setTimeAxis(ta);
            sap.ui.getCore().byId("__jsview0--GanttChartContainer").setTimeZoomRate(1);
            sap.ui.getCore().byId("__jsview0--ganttView").jumpToPosition(new Date("2015/01/01"));
		},
		
		onInit: function() {
			var oGanttChartContainer = this.getView().byId("GanttChartContainer");
			var oGanttChartWithTable = oGanttChartContainer.getGanttCharts()[0];
			// var sPath = jQuery.sap.getModulePath("jsview", "/data1.json");
			var ganttChartData = [
	            {
	                "level": 1,
	                "objectType": "DPO",
	                "guid": "3863BB4422751ED7BCA73DC9ABF81F76",
	                "explanation": "Gantt example",
	                "iconSource": "/sap/public/ppm/pro/icon_project_tr.gif",
	                "iconTooltip": "Project",
	                "statusIconSource": "/sap/public/bc/icons/s_S_LEDI.gif",
	                "statusIconTooltip": "No Value Set",
	                "editable": "FALSE",
	                "potentialParent": "TRUE",
	                "collapsed": "FALSE",
	                "childrenLoaded": "TRUE",
	                "selected": "TRUE",
	                "scheduleConflict": "FALSE",
	                "cutCopySelected": "FALSE",
	                "menuId": "MENU_CREATE"
	            }, {
	                "level": 2,
	                "objectType": "TTO",
	                "guid": "3863BB4422751ED7BCA73E3CA485FF78",
	                "explanation": "task 1 below project definition",
	                "parentGuid": "3863BB4422751ED7BCA73DC9ABF81F76",
	                "iconSource": "/sap/public/ppm/pro/icon_task_tr.gif",
	                "iconTooltip": "Task",
	                "statusIconSource": "/sap/public/bc/icons/s_S_LEDI.gif",
	                "statusIconTooltip": "No Value Set",
	                "editable": "FALSE",
	                "potentialParent": "TRUE",
	                "collapsed": "TRUE",
	                "childrenLoaded": "FALSE",
	                "selected": "FALSE",
	                "scheduleConflict": "FALSE",
	                "cutCopySelected": "FALSE",
	                "menuId": "NIL"
	            }, {
	                "level": 2,
	                "objectType": "TTO",
	                "guid": "3863BB4422751EE7BCA856C2972F86D0",
	                "explanation": "task 2 below project definition",
	                "parentGuid": "3863BB4422751ED7BCA73DC9ABF81F76",
	                "iconSource": "/sap/public/ppm/pro/icon_task_tr.gif",
	                "iconTooltip": "Task",
	                "statusIconSource": "/sap/public/bc/icons/s_S_LEDI.gif",
	                "statusIconTooltip": "No Value Set",
	                "editable": "FALSE",
	                "potentialParent": "TRUE",
	                "collapsed": "TRUE",
	                "childrenLoaded": "FALSE",
	                "selected": "FALSE",
	                "scheduleConflict": "FALSE",
	                "cutCopySelected": "FALSE",
	                "menuId": "NIL"
	            }, {
	                "level": 2,
	                "objectType": "PPO",
	                "guid": "3863BB4422751ED7BCA7402E96B3BF78",
	                "explanation": "Phase 1",
	                "parentGuid": "3863BB4422751ED7BCA73DC9ABF81F76",
	                "iconSource": "/sap/public/ppm/pro/icon_phase_tr.gif",
	                "iconTooltip": "Phase",
	                "statusIconSource": "/sap/public/bc/icons/s_S_LEDI.gif",
	                "statusIconTooltip": "No Value Set",
	                "editable": "FALSE",
	                "potentialParent": "TRUE",
	                "collapsed": "TRUE",
	                "childrenLoaded": "FALSE",
	                "selected": "FALSE",
	                "scheduleConflict": "FALSE",
	                "cutCopySelected": "FALSE",
	                "menuId": "NIL"
	            }, {
	                "level": 2,
	                "objectType": "PPO",
	                "guid": "3863BB4422751EE7BCA8BA8952790951",
	                "explanation": "Phase 2",
	                "parentGuid": "3863BB4422751ED7BCA73DC9ABF81F76",
	                "iconSource": "/sap/public/ppm/pro/icon_phase_tr.gif",
	                "iconTooltip": "Phase",
	                "statusIconSource": "/sap/public/bc/icons/s_S_LEDI.gif",
	                "statusIconTooltip": "No Value Set",
	                "editable": "FALSE",
	                "potentialParent": "TRUE",
	                "collapsed": "TRUE",
	                "childrenLoaded": "FALSE",
	                "selected": "FALSE",
	                "scheduleConflict": "FALSE",
	                "cutCopySelected": "FALSE",
	                "menuId": "NIL"
	            }, {
	                "level": 2,
	                "objectType": "PPO",
	                "guid": "3863BB4422751EE7BCA8BBF56146C953",
	                "explanation": "Phase 3",
	                "parentGuid": "3863BB4422751ED7BCA73DC9ABF81F76",
	                "iconSource": "/sap/public/ppm/pro/icon_phase_tr.gif",
	                "iconTooltip": "Phase",
	                "statusIconSource": "/sap/public/bc/icons/s_S_LEDI.gif",
	                "statusIconTooltip": "No Value Set",
	                "editable": "FALSE",
	                "potentialParent": "TRUE",
	                "collapsed": "TRUE",
	                "childrenLoaded": "FALSE",
	                "selected": "FALSE",
	                "scheduleConflict": "FALSE",
	                "cutCopySelected": "FALSE",
	                "menuId": "NIL"
	            }
	        ];
			this._oModel = new JSONModel();
			var that = this;
			// $.ajax({
			// 	url: sPath
			// }).then(function(data){
			var flatJson = this.sapIcon(ganttChartData);
	        this.hierarchyJson = that.ganttJsonStructure(flatJson);
			that._oModel.setData(this.hierarchyJson);
			// configuration of GanttChartContainer
			oGanttChartContainer.setModel(that._oModel, "test");
			// oGanttChartContainer.setLegendContainer(that._createLegendContainer());
			// oGanttChartContainer.setToolbarSchemes(that._createToolbarSchemes());
			// oGanttChartContainer.setContainerLayouts(that._createContainerLayouts());
			// oGanttChartContainer.setContainerLayoutKey("sap.test.gantt_layout");
			// oGanttChartContainer.addCustomToolbarItem(that._createCustomToolbar());

			// configuration of GanttChartWithTable
			oGanttChartWithTable.bindAggregation("rows",
				{
					path: "test>/"
					/*parameters: {
						arrayNames: ["children"]
					}*/
				}
			);
			/*oGanttChartWithTable.bindAggregation("relationships",
					{
						path: "test>/root/relationship"
					}
			);
			oGanttChartWithTable.setTimeAxis(that._createTimeAxis());
			oGanttChartWithTable.setShapeDataNames(["top", "order", "milestone", "constraint", "relationship"]);*/
			oGanttChartWithTable.setShapes(that._configShape());
			// oGanttChartWithTable.setToolbarSchemes(that._createToolbarSchemes());
			// oGanttChartWithTable.setSelectionMode(sap.gantt.SelectionMode.Multiple);
			// });

		},
		
		ganttJsonStructure: function(jsonData) {
            var roots = [];
            var jsonStructure = {};
            jsonData.forEach(function(jsonItem) {
                jsonStructure[jsonItem.guid] = jsonItem;
            });
            Object.keys(jsonStructure).forEach(function(guid) {
                var item = jsonStructure[guid];
                if (item.level === 1) {
                    roots.push(item);
                } else if (item.parentGuid in jsonStructure) {
                    var parent = jsonStructure[item.parentGuid];
                    if (!("children" in parent)) {
                        parent.children = [];
                    }
                    parent.children.push(item);
                }
            });
            return roots;
        },
		
		onAfterRendering: function(){
			var that = this;
			setTimeout(function(){
				var oGanttChartContainer = that.getView().byId("GanttChartContainer");
				var oGanttChartWithTable = oGanttChartContainer.getGanttCharts()[0];
				oGanttChartWithTable.jumpToPosition(new Date("2015-01-01"));
			},1000);
		},

		/*
		 * Create CustomToolbar
		 * @private
		 * @returns {Object} oToolbar
		 */
		_createCustomToolbar: function() {
			var that = this;
			var oToolbar = new sap.m.Toolbar({
				content: [
					new sap.m.Link({
						text: "Create Task",
						press: function() {
							that.createTask();
						}
					}),
					new sap.m.ToolbarSpacer({width: "10px"}),
					new sap.m.Link({
						text: "Delete Task",
						press: function() {
							that.deleteTask();
						}
					}),
					new sap.m.ToolbarSpacer({width: "10px"}),
					new sap.m.ToolbarSeparator()
				]
			});

			return oToolbar;
		},

		/*
		 * Create ToolbarSchemes
		 * @private
		 * @returns {Array} aToolbarSchemes
		 */
		_createToolbarSchemes: function() {
			var aToolbarSchemes = [
				new sap.gantt.config.ToolbarScheme({
					key: "GLOBAL_TOOLBAR",
					customToolbarItems: new sap.gantt.config.ToolbarGroup({
						position: "R2",
						overflowPriority: sap.m.OverflowToolbarPriority.High
					}),
					timeZoom: new sap.gantt.config.ToolbarGroup({
						position: "R4",
						overflowPriority: sap.m.OverflowToolbarPriority.NeverOverflow
					}),
					legend: new sap.gantt.config.ToolbarGroup({
						position: "R3",
						overflowPriority: sap.m.OverflowToolbarPriority.Low
					}),
					settings: new sap.gantt.config.SettingGroup({
						position: "R1",
						overflowPriority: sap.m.OverflowToolbarPriority.Low,
						items: sap.gantt.config.DEFAULT_TOOLBAR_SETTING_ITEMS
					}),
					toolbarDesign: sap.m.ToolbarDesign.Transparent
				}),
				new sap.gantt.config.ToolbarScheme({
					key: "LOCAL_TOOLBAR"
				})
			];

			return aToolbarSchemes;
		},

		/*
		 * Create ContainerLayouts
		 * @private
		 * @returns {Array} aContainerLayouts
		 */
		_createContainerLayouts: function() {
			var aContainerLayouts = [
				new sap.gantt.config.ContainerLayout({
					key: "sap.test.gantt_layout",
					text: "Gantt Layout",
					toolbarSchemeKey: "GLOBAL_TOOLBAR"
				})
			];

			return aContainerLayouts;
		},

		/*
		 * Create Legend
		 * @private
		 * @returns {Object} oLegend
		 */
		_createLegendContainer: function() {
			var sSumTaskColor = "#FAC364";
			var sTasksColor = "#5CBAE5";
			var sRelColor = "#848F94";
			var sTextColor = sap.ui.getCore().getConfiguration().getTheme() === "sap_hcb" ? "white" : "";
			var oLegend = new sap.gantt.legend.LegendContainer({
				legendSections: [
					new sap.m.Page({
						title: "Tasks",
						content:[
							new sap.ui.core.HTML({
								content: "<div width='100%' height='50%' style='margin-top: 25px'><svg width='180px' height='60px'><g>" +
									"<g style='display: block;'>" +
									"<g><rect x='" + (sap.ui.getCore().getConfiguration().getRTL() ? "155" : "25" ) + "' y='2' width='20' height='20' fill=" + sSumTaskColor + " style='stroke: " + sSumTaskColor + "; stroke-width: 2px;'></rect>" +
									"<text x='" + (sap.ui.getCore().getConfiguration().getRTL() ? "125" : "55" ) + "' y='16' font-size='0.875rem' fill=" + sTextColor + ">Summary task</text></g>" +
									"<g><rect x='" + (sap.ui.getCore().getConfiguration().getRTL() ? "155" : "25" ) + "' y='32' width='20' height='20' fill=" + sTasksColor + " style='stroke: " + sTasksColor + "; stroke-width: 2px;'></rect>" +
									"<text x='" + (sap.ui.getCore().getConfiguration().getRTL() ? "125" : "55" ) + "' y='46' font-size='0.875rem' fill=" + sTextColor + ">Task</text></g>" +
									"</g></g></svg></div>"
							})
						]
					}),
					new sap.m.Page({
						title: "Relationships",
						content:[
							new sap.ui.core.HTML({
								content: "<div width='100%' height='50%' style='margin-top: 25px'><svg width='180px' height='25px'><g>" +
									"<g style='display: block;'>" +
									"<g><rect x='" + (sap.ui.getCore().getConfiguration().getRTL() ? "155" : "25" ) + "' y='8' width='20' height='1' fill=" + sRelColor + " style='stroke: " + sRelColor + "; stroke-width: 1px;'></rect>" +
									"<text x='" + (sap.ui.getCore().getConfiguration().getRTL() ? "125" : "55" ) + "' y='12.5' font-size='0.875rem' fill=" + sTextColor + ">Relationship</text></g>" +
									"</g></g></svg></div>"
							})
						]
					})
				]
			});

			return oLegend;
		},

		/*
		 * Configuration of Shape.
		 * @private
		 * @returns {Array} aShapes
		 */
		_configShape: function() {
			var aShapes = [];

			sap.ui.define(["sap/gantt/shape/Group"], function (Group) {
				var RectangleGroup = Group.extend("sap.test.RectangleGroup");

				RectangleGroup.prototype.getRLSAnchors = function(oRawData, oObjectInfo) {
					var shapes = this.getShapes();
					var rectangleShapeClass;
					var _x, _y;

					for (var i in shapes) {
						if (shapes[i] instanceof sap.gantt.shape.Rectangle) {
							rectangleShapeClass = shapes[i];
						}
					}

					_x = rectangleShapeClass.getX(oRawData);
					_y = rectangleShapeClass.getY(oRawData, oObjectInfo) + rectangleShapeClass.getHeight() / 2;

					return {
						startPoint: {
							x: _x,
							y: _y,
							height:rectangleShapeClass.getHeight(oRawData)
						},
						endPoint: {
							x: _x + rectangleShapeClass.getWidth(oRawData),
							y: _y,
							height:rectangleShapeClass.getHeight(oRawData)
						}
					};
				};

				return RectangleGroup;
			}, true);

			sap.ui.define(["sap/gantt/shape/Rectangle"], function (Rectangle) {
				var shapeRectangle = Rectangle.extend("sap.test.shapeRectangle");

				shapeRectangle.prototype.getFill = function (oRawData) {
					switch (oRawData.level) {
					case "1":
						return "#FAC364";
					default:
						return "#5CBAE5";
					}
				};

				return shapeRectangle;
			}, true);

			sap.ui.define(["sap/gantt/shape/SelectedShape"], function (SelectedShape) {
				var selectRectange = SelectedShape.extend("sap.test.selectRectange");

				selectRectange.prototype.getStroke = function (oRawData) {
					switch (oRawData.level) {
					case "1":
						return "#B57506";
					default:
						return "#156589";
					}
				};
				selectRectange.prototype.getStrokeWidth = function () {
					return 2;
				};

				return selectRectange;
			});
			
			// define a milestone (diamond)
			sap.ui.define(["sap/gantt/shape/ext/Diamond", "sap/ui/core/Core"], function (Diamond, Core) {
				var milestone = Diamond.extend("sap.test.Milestone");			
				return milestone;
			}, true);
			
			// define a constraint (triangle)
			sap.ui.define(["sap/gantt/shape/ext/Triangle", "sap/ui/core/Core"], function (Triangle, Core) {
				var constraint = Triangle.extend("sap.test.Constraint");
				return constraint;
			}, true);

			var oTopShape = new sap.gantt.config.Shape({
				key: "top",
				shapeDataName: "order",
				shapeClassName: "sap.test.shapeRectangle",
				selectedClassName: "sap.test.selectRectange",
				level: 5,
				shapeProperties: {
					time: "{startTime}",
					endTime: "{endTime}",
					height: 20,
					isDuration: true,
					enableDnD: true
				}
			});

			var oOrderShape = new sap.gantt.config.Shape({
				key: "order",
				shapeDataName: "order",
				shapeClassName: "sap.test.RectangleGroup",
				selectedClassName: "sap.test.selectRectange",
				level: 5,
				shapeProperties: {
					time: "{startTime}",
					endTime: "{endTime}",
					height: 20,
					isDuration: true,
					enableDnD: true
				},
				groupAggregation: [
					new sap.gantt.config.Shape({
						shapeClassName: "sap.test.shapeRectangle",
						selectedClassName: "sap.test.selectRectange",
						shapeProperties: {
							time: "{startTime}",
							endTime: "{endTime}",
							title: "{tooltip}",
							height: 20,
							isDuration: true,
							enableDnD: true
						}
					})
				]
			});
			// define a milestone config
			var oDiamondConfig = new sap.gantt.config.Shape({
				key: "diamond",
				shapeClassName: "sap.test.Milestone",
				shapeDataName: "milestone",
				level: 5,
				shapeProperties: {
					time: "{endTime}",
					strokeWidth: 2,
					title: "{tooltip}",
					verticalDiagonal: 18,
					horizontalDiagonal: 18,
					yBias: -1,
					fill: "#666666"
				}
			});
			// define a constraint config
			var oTriangleConfig = new sap.gantt.config.Shape({
				key: "triangle",
				shapeClassName: "sap.test.Constraint",
				shapeDataName: "constraint",
				level: 5,
				shapeProperties: {
					time: "{time}",
					strokeWidth: 1,
					title: "{tooltip}",
					fill: "#666666",
					rotationAngle: "{ratationAngle}",
					base: 6,
					height: 6,
					distanceOfyAxisHeight: 3,
					yBias: 7
				}
			});

			var oRelShape = new sap.gantt.config.Shape({
				key: "relationship",
				shapeDataName: "relationship",
				level: 30,
				shapeClassName: "sap.gantt.shape.ext.rls.Relationship",
				shapeProperties: {
					isDuration: false,
					lShapeforTypeFS: true,
					showStart: false,
					showEnd: true,
					stroke: "#848F94",
					strokeWidth: 1,
					type: "{relation_type}",
					fromObjectPath:"{fromObjectPath}",
					toObjectPath:"{toObjectPath}",
					fromDataId:"{fromDataId}",
					toDataId:"{toDataId}",
					fromShapeId:"{fromShapeId}",
					toShapeId:"{toShapeId}",	
					title: "{tooltip}",
					id: "{guid}"
				}
			}); 

			aShapes = [oTopShape, oOrderShape, oDiamondConfig, oTriangleConfig, oRelShape];

			return aShapes;
		},

		/*
		 * Handle Date Change.
		 * @public
		 * @param {Object} event
		 * @returns undefined
		 */
		handleDateChange: function(event) {
			var oDatePicker = event.getSource();
			var aCells = oDatePicker.getParent().getCells();

			if (oDatePicker === oDatePicker.getParent().getCells()[1]) {
				this._checkDate(aCells[1], aCells[2], true);
			} else {
				this._checkDate(aCells[1], aCells[2], false);
			}
		},

		/*
		 * Check Date.
		 * @private
		 * @param {Object} startCell, {Object} endCell, {Boolean} bIsChangeStart
		 * @returns undefined
		 */
		_checkDate: function(startCell, endCell, bIsChangeStart) {
			if (bIsChangeStart === undefined) {
				jQuery.sap.log.error("bIsChangeStart is not defined!");
				return;
			}

			if (startCell.getValue() > endCell.getValue()) {
				this._showNotAllowedMsg();
				if (bIsChangeStart) {
					startCell.setValue(endCell.getValue());
				} else {
					endCell.setValue(startCell.getValue());
				}
			}
		},

		/*
		 * Show "Not Allowed" message.
		 * @private
		 * @returns undefined
		 */
		_showNotAllowedMsg: function() {
			MessageToast.show("Not allowed");
		},

		/*
		 * Handle event of shapeDragEnd
		 * @public
		 * @param {Object} [oEvent] event context
		 * @returns {Boolean} if Drag and Drop succeed
		 */
		handleShapeDragEnd: function(oEvent) {
			var oParam = oEvent.getParameters();
			var aSourceShapeData = oParam.sourceShapeData;
			var oSourceShapeData = aSourceShapeData[0].shapeData;
			var sSourceId = aSourceShapeData[0].objectInfo.id;
			var oTargetData = oParam.targetData;

			//change the form of date from millis to timestamp
			var sTarStartTime = sap.gantt.misc.Format.dateToAbapTimestamp(new Date(oTargetData.mouseTimestamp.startTime));
			var sTarEndTime = sap.gantt.misc.Format.dateToAbapTimestamp(new Date(oTargetData.mouseTimestamp.endTime));
			
			if (!oTargetData.objectInfo) {
				this._showNotAllowedMsg();
				return false;
			}

			var sTargetId = oTargetData.objectInfo.id;
			var sId = aSourceShapeData[0].objectInfo.id;
			
			if (this._checkDropSameRow(sSourceId, sTargetId) && this._selectOnlyOneRow(aSourceShapeData)) {
				//oSourceShapeData is a reference, so we only need to change startTime and endTime, then reset data model 
				oSourceShapeData.startTime = sTarStartTime;
				oSourceShapeData.endTime = sTarEndTime;
				var oModelData = this._oModel.getData();
				this._oModel.setData(oModelData);
				return true;
			} else {
				this._showNotAllowedMsg();
				return false;
			}
		},

		/*
		 * Check if drop the selected task to the same row
		 * @private
		 * @param {String} [sSourceId] source id
		 * @param {String} [sTargetId] target id
		 * @returns {Boolean} if drop the selected task in the same row
		 */
		_checkDropSameRow: function(sSourceId, sTargetId) {
			if (sSourceId === sTargetId) {
				return true;
			} else {
				return false;
			}
		},

		/*
		 * Check if only select one row of chart
		 * @private
		 * @param {Array} [aSourceShapeData] array of source data
		 * @returns {Boolean} if only select one row of chart
		 */
		_selectOnlyOneRow: function(aSourceShapeData) {
			if (aSourceShapeData.length === 1) {
				return true;
			} else {
				return false;
			}
		},

		/*
		 * Create TimeAxis
		 * @private
		 * @returns {Object} oTimeAxis
		 */
		_createTimeAxis: function() {
			var oTimeAxis = new sap.gantt.config.TimeAxis({
				planHorizon: new sap.gantt.config.TimeHorizon({
					startTime: "20131228000000",
					endTime: "20170101000000"
				}),
				// specify initHorizon rather than the default one
				initHorizon: new sap.gantt.config.TimeHorizon({
					startTime: "20161001000000",
					endTime: "20161201000000"
				}),
				zoomStrategy: {
					"1day": {
						innerInterval: {
							unit: sap.gantt.config.TimeUnit.day,
							span: 1,
							range: 90
						},
						largeInterval: {
							unit: sap.gantt.config.TimeUnit.week,
							span: 1,
							pattern: "MMM yyyy,'Week' ww"
						},
						smallInterval: {
							unit: sap.gantt.config.TimeUnit.day,
							span: 1,
							pattern: "EEE dd"
						}
					},
					"1week": {
						innerInterval: {
							unit: sap.gantt.config.TimeUnit.week,
							span: 1,
							range: 90
						},
						largeInterval: {
							unit: sap.gantt.config.TimeUnit.month,
							span: 1,
							pattern: "MMMM yyyy"
						},
						smallInterval: {
							unit: sap.gantt.config.TimeUnit.week,
							span: 1,
							pattern: "'CW' w"
						}
					},
					"1month": {
						innerInterval: {
							unit: sap.gantt.config.TimeUnit.month,
							span: 1,
							range: 90
						},
						largeInterval: {
							unit: sap.gantt.config.TimeUnit.month,
							span: 3,
							pattern: "yyyy, QQQ"
						},
						smallInterval: {
							unit: sap.gantt.config.TimeUnit.month,
							span: 1,
							pattern: "MMM"
						}
					},
					"1quarter": {
						innerInterval: {
							unit: sap.gantt.config.TimeUnit.month,
							span: 3,
							range: 90
						},
						largeInterval: {
							unit: sap.gantt.config.TimeUnit.year,
							span: 1,
							pattern: "yyyy"
						},
						smallInterval: {
							unit: sap.gantt.config.TimeUnit.month,
							span: 3,
							pattern: "QQQ"
						}
					},
					"1year": {
						innerInterval: {
							unit: sap.gantt.config.TimeUnit.year,
							span: 1,
							range: 90
						},
						largeInterval: {
							unit: sap.gantt.config.TimeUnit.year,
							span: 10,
							pattern: "yyyy"
						},
						smallInterval: {
							unit: sap.gantt.config.TimeUnit.year,
							span: 1,
							pattern: "yyyy"
						}
					}
				},
				granularity: "1week",
				finestGranularity:  "1day",
				coarsestGranularity:  "1year",
				rate:  1
			});

			return oTimeAxis;
		},
		
		_createTimeAxis1: function() {
			var oTimeAxis = new sap.gantt.config.TimeAxis({
				planHorizon: new sap.gantt.config.TimeHorizon({
					startTime: "20071228000000",
					endTime: "20270101000000"
				}),
				initHorizon: new sap.gantt.config.TimeHorizon({
					
				}),
				zoomStrategy: {
					"1day": {
						innerInterval: {
							unit: sap.gantt.config.TimeUnit.day,
							span: 1,
							range: 90
						},
						largeInterval: {
							unit: sap.gantt.config.TimeUnit.week,
							span: 1,
							format: "MMM yyyy,'Week' ww"
						},
						smallInterval: {
							unit: sap.gantt.config.TimeUnit.day,
							span: 1,
							format: "EEE dd"
						}
					},
					"1week": {
						innerInterval: {
							unit: sap.gantt.config.TimeUnit.week,
							span: 1,
							range: 90
						},
						largeInterval: {
							unit: sap.gantt.config.TimeUnit.month,
							span: 1,
							format: "MMMM yyyy"
						},
						smallInterval: {
							unit: sap.gantt.config.TimeUnit.week,
							span: 1,
							format: "'CW' w"
						}
					},
					"1month": {
						innerInterval: {
							unit: sap.gantt.config.TimeUnit.month,
							span: 1,
							range: 90
						},
						largeInterval: {
							unit: sap.gantt.config.TimeUnit.month,
							span: 3,
							format: "yyyy, QQQ"
						},
						smallInterval: {
							unit: sap.gantt.config.TimeUnit.month,
							span: 1,
							format: "MMM"
						}
					},
					"1quarter": {
						innerInterval: {
							unit: sap.gantt.config.TimeUnit.month,
							span: 3,
							range: 90
						},
						largeInterval: {
							unit: sap.gantt.config.TimeUnit.year,
							span: 1,
							format: "yyyy"
						},
						smallInterval: {
							unit: sap.gantt.config.TimeUnit.month,
							span: 3,
							format: "QQQ"
						}
					},
					"1year": {
						innerInterval: {
							unit: sap.gantt.config.TimeUnit.year,
							span: 1,
							range: 90
						},
						largeInterval: {
							unit: sap.gantt.config.TimeUnit.year,
							span: 10,
							format: "yyyy"
						},
						smallInterval: {
							unit: sap.gantt.config.TimeUnit.year,
							span: 1,
							format: "yyyy"
						}
					}
				},
				granularity: "1quarter",
				finestGranularity:  "1day",
				coarsestGranularity:  "1year",
				rate:  1
			});

			return oTimeAxis;
		},

		/*
		 * Create task
		 * @public
		 * @returns undefined
		 */
		createTask: function() {
			var oGanttChartContainer = this.getView().byId("GanttChartContainer");
			var aSelectedRows = oGanttChartContainer.getSelectedRows(0)[0].selectedRows;

			if (this._checkSelectedRow(aSelectedRows)) {
				this._addRows(aSelectedRows);
			}
			var aIds = [];
			for (var i = 0; i < aSelectedRows.length; i++) {
				aIds.push(aSelectedRows[i].id);
			}
			setTimeout(function(){
				oGanttChartContainer.deselectRows(0);
				oGanttChartContainer.selectRows(0, aIds);//reselect rows
			}, 300);
		},

		/*
		 * Check if one or more rows selected
		 * @public
		 * @param {Array} [aSelectedRows] array contain selected rows
		 * @returns {Boolean} if one or more tasks selected
		 */
		_checkSelectedRow: function(aSelectedRows) {
			if (aSelectedRows.length >= 1) {
				return true;
			} else {
				MessageToast.show("Plase select one or more rows");
				return false;
			}
		},

		/*
		 * Add one or more rows
		 * @public
		 * @param {Array} [aSelectedRows] array contain selected rows
		 * @returns undefined
		 */
		_addRows: function(aSelectedRows) {
			var oModelData = this._oModel.getData(); //data in model
			var aTreeData = oModelData.root.children; //data of root level

			for (var i = 0, len = aSelectedRows.length; i < len; i++) {
				var sId = aSelectedRows[i].id;
				this._addRow(aTreeData, sId);
			}

			this._oModel.setData(oModelData); //update data of model
		},

		/*
		 * Add one row
		 * @public
		 * @param {Array} [aTreeNodes] array contain selected rows
		 * @param {String} [sId] id of selected row
		 * @returns undefined
		 */
		_addRow: function(aTreeNodes, sId) {
			if (!aTreeNodes || !aTreeNodes.length){
				return;
			}

			for (var i = 0, len = aTreeNodes.length; i < len; i++) {
				var oNode = aTreeNodes[i];
				var aChildNodes = oNode.children;

				//find object of corresponding sId and add a new object
				if (oNode.id === sId) {
					var oNewNode = $.extend(true, {}, oNode);//deep copy oNode
					oNewNode.id = oNode.id + " - Copy" + Math.floor((Math.random() * 1000) + 1);
					oNewNode.name = oNode.name + " - Copy";
					oNewNode.order[0].id = oNewNode.order[0].id + " - Copy" + Math.floor((Math.random() * 1000) + 1);
					aTreeNodes.splice(i + 1, 0, oNewNode);
					return;
				}

				if (aChildNodes && aChildNodes.length > 0){
					this._addRow(aChildNodes, sId);
				}
			}
		},

		/*
		 * Delete task
		 * @public
		 * @returns undefined
		 */
		deleteTask: function() {
			var oGanttChartContainer = this.getView().byId("GanttChartContainer");
			var aSelectedRows = oGanttChartContainer.getSelectedRows(1)[0].selectedRows;

			if (this._checkSelectedRow(aSelectedRows)) {
				this._deleteRows(aSelectedRows);
				this._clearSelection();
			}
		},

		/*
		 * Clear Selection
		 * @private
		 *@returns undefined
		 */
		_clearSelection: function() {
			var oGanttChartContainer = this.getView().byId("GanttChartContainer");

			oGanttChartContainer.deselectRows(oGanttChartContainer.getSelectedRows(0));
		},

		/*
		 * Delete one or more rows
		 * @public
		 * @param {Array} [aSelectedRows] array contain selected rows
		 * @returns undefined
		 */
		_deleteRows: function(aSelectedRows) {
			var oModelData = this._oModel.getData(); //data in model
			var aTreeData = oModelData.root.children; //data of root level

			for (var i = 0, len = aSelectedRows.length; i < len; i++) {
				var sId = aSelectedRows[i].id;
				this._deleteRow(aTreeData, sId);
			}

			this._oModel.setData(oModelData); //update data of model
		},

		/*
		 * Delete one row
		 * @public
		 * @param {Array} [aTreeNodes] array contain selected rows
		 * @param {String} [sId] id of selected row
		 * @returns undefined
		 */
		_deleteRow: function(aTreeNodes, sId) {
			if (!aTreeNodes || !aTreeNodes.length){
				return;
			}

			for (var i = 0, len = aTreeNodes.length; i < len; i++) {
				var oNode = aTreeNodes[i];
				var aChildNodes = oNode.children;

				//find object of corresponding sId and delete it
				if (oNode.id === sId) {
					aTreeNodes.splice(i, 1);
					return;
				}

				if (aChildNodes && aChildNodes.length > 0){
					this._deleteRow(aChildNodes, sId);
				}
			}
		},
		
		/*
		 * method to display the corresponding icons based on the object type(phase or task or project element or checklist etc..)
		 */
	    sapIcon: function (json) {
	        for (var jsonCount = 0; jsonCount < json.length; jsonCount++) {
				// var objectData = json[jsonCount].objectType;
				json[jsonCount].children = [];
	            if (json[jsonCount].potentialParent === "TRUE" && jsonCount !== 0) {
	                var obj = {};
	                json[jsonCount].children.push(obj);
	            } else {
	                json[jsonCount] = json[jsonCount];
	            }
	            if (json[jsonCount].objectType === "TTO") {
	                json[jsonCount].iconSource = "sap-icon://circle-task-2";
	            } 
	            else if (json[jsonCount].objectType === "PPO") {
	                json[jsonCount].iconSource = "sap-icon://chevron-phase-2";
	            }
	            else if (json[jsonCount].objectType === "DPO") {
	                json[jsonCount].iconSource = "sap-icon://project-definition-triangle-2";
	            }
	        }
	        return json;
	    },
	    
	    expandTree: function(json) {
	    	var that = this;
	        var jsonParsedData = JSON.parse(json);
	        var flatJson = that.sapIcon(jsonParsedData);
	        var index = sap.plm.ganttchart.path.split('/');
	        var data1 = that.hierarchyJson;
	        var index1 = index[1];
	        data1 = data1[index1];

	        var i = 3;
	        while (i <= index.length) {
	            index1 = index[i];
	            data1 = data1.Children[index1];
	            i = i + 2;
	        }

	        data1.childrenLoaded = "TRUE";
	
	        if (!("children" in data1)) {
	            data1.children = [];
	        }
	        for (i = 0; i < flatJson.length; i++) {
	            data1.children.push(flatJson[i]);
	        }
	
	        data1.children.splice(0, 1);

	        that._oModel.refresh();
    	},
    	
    	onSpecificRowExpansion: function() {
    		var level = 1;
			var that = this;
			var path = sap.ui.getCore().byId("__jsview0--GanttChartContainer").getSelectedRows()[0].selectedRows[0].contextObj.sPath;
			// console.log(path);
			// console.log(that._oModel.oData[pathIndex].children);
			that.expand(path, level);
			
			
		},
    	
    	expand: function(path, level) {
    		var that = this;
    		var expandedCurrentBranch = [
				{
					"level": 1,
					"objectType": "DPO",
					"guid": "3863BB4422751ED7BCA73DC9ABF81F76",
					"explanation": "Gantt example",
					"iconSource": "/sap/public/ppm/pro/icon_project_tr.gif",
					"iconTooltip": "Project",
					"statusIconSource": "/sap/public/bc/icons/s_S_LEDI.gif",
					"statusIconTooltip": "No Value Set",
					"editable": "FALSE",
					"potentialParent": "TRUE",
					"collapsed": "FALSE",
					"childrenLoaded": "TRUE",
					"selected": "TRUE",
					"scheduleConflict": "FALSE",
					"cutCopySelected": "FALSE",
					"menuId": "MENU_CREATE"
				}, {
					"level": 2,
					"objectType": "TTO",
					"guid": "3863BB4422751ED7BCA73E3CA485FF78",
					"explanation": "task 1 below project definition",
					"parentGuid": "3863BB4422751ED7BCA73DC9ABF81F76",
					"iconSource": "/sap/public/ppm/pro/icon_task_tr.gif",
					"iconTooltip": "Task",
					"statusIconSource": "/sap/public/bc/icons/s_S_LEDI.gif",
					"statusIconTooltip": "No Value Set",
					"editable": "FALSE",
					"potentialParent": "TRUE",
					"collapsed": "FALSE",
					"childrenLoaded": "TRUE",
					"selected": "FALSE",
					"scheduleConflict": "FALSE",
					"cutCopySelected": "FALSE",
					"menuId": "NIL"
				}, {
					"level": 3,
					"objectType": "TTO",
					"guid": "40F2E9AFC5011EE886F88F9A12BDC731",
					"explanation": "task1_1",
					"parentGuid": "3863BB4422751ED7BCA73E3CA485FF78",
					"iconSource": "/sap/public/ppm/pro/icon_task_tr.gif",
					"iconTooltip": "Task",
					"statusIconSource": "/sap/public/bc/icons/s_S_LEDI.gif",
					"statusIconTooltip": "No Value Set",
					"editable": "FALSE",
					"potentialParent": "TRUE",
					"collapsed": "TRUE",
					"childrenLoaded": "FALSE",
					"selected": "FALSE",
					"scheduleConflict": "FALSE",
					"cutCopySelected": "FALSE",
					"menuId": "NIL"
				}, {
					"level": 2,
					"objectType": "TTO",
					"guid": "3863BB4422751EE7BCA856C2972F86D0",
					"explanation": "task 2 below project definition",
					"parentGuid": "3863BB4422751ED7BCA73DC9ABF81F76",
					"iconSource": "/sap/public/ppm/pro/icon_task_tr.gif",
					"iconTooltip": "Task",
					"statusIconSource": "/sap/public/bc/icons/s_S_LEDI.gif",
					"statusIconTooltip": "No Value Set",
					"editable": "FALSE",
					"potentialParent": "TRUE",
					"collapsed": "FALSE",
					"childrenLoaded": "TRUE",
					"selected": "FALSE",
					"scheduleConflict": "FALSE",
					"cutCopySelected": "FALSE",
					"menuId": "NIL"
				}, {
					"level": 3,
					"objectType": "TTO",
					"guid": "40F2E9AFC5011EE886F892A0EF768734",
					"explanation": "task2_2",
					"parentGuid": "3863BB4422751EE7BCA856C2972F86D0",
					"iconSource": "/sap/public/ppm/pro/icon_task_tr.gif",
					"iconTooltip": "Task",
					"statusIconSource": "/sap/public/bc/icons/s_S_LEDI.gif",
					"statusIconTooltip": "No Value Set",
					"editable": "FALSE",
					"potentialParent": "TRUE",
					"collapsed": "TRUE",
					"childrenLoaded": "FALSE",
					"selected": "FALSE",
					"scheduleConflict": "FALSE",
					"cutCopySelected": "FALSE",
					"menuId": "NIL"
				}, {
					"level": 2,
					"objectType": "TTO",
					"guid": "40F2E9AFBE791EE88BB7FE34A87F9436",
					"explanation": "task3 below header",
					"parentGuid": "3863BB4422751ED7BCA73DC9ABF81F76",
					"iconSource": "/sap/public/ppm/pro/icon_task_tr.gif",
					"iconTooltip": "Task",
					"statusIconSource": "/sap/public/bc/icons/s_S_LEDI.gif",
					"statusIconTooltip": "No Value Set",
					"editable": "FALSE",
					"potentialParent": "TRUE",
					"collapsed": "FALSE",
					"childrenLoaded": "TRUE",
					"selected": "FALSE",
					"scheduleConflict": "FALSE",
					"cutCopySelected": "FALSE",
					"menuId": "NIL"
				}, {
					"level": 3,
					"objectType": "TTO",
					"guid": "40F2E9AFBE791EE88BB805E647261457",
					"explanation": "task3_1",
					"parentGuid": "40F2E9AFBE791EE88BB7FE34A87F9436",
					"iconSource": "/sap/public/ppm/pro/icon_task_tr.gif",
					"iconTooltip": "Task",
					"statusIconSource": "/sap/public/bc/icons/s_S_LEDI.gif",
					"statusIconTooltip": "No Value Set",
					"editable": "FALSE",
					"potentialParent": "FALSE",
					"collapsed": "TRUE",
					"childrenLoaded": "FALSE",
					"selected": "FALSE",
					"scheduleConflict": "FALSE",
					"cutCopySelected": "FALSE",
					"menuId": "NIL"
				}, {
					"level": 2,
					"objectType": "TTO",
					"guid": "40F2E9AFBE791EE88BB82E85798C1646",
					"explanation": "TASK4 BELOW HEADER",
					"parentGuid": "3863BB4422751ED7BCA73DC9ABF81F76",
					"iconSource": "/sap/public/ppm/pro/icon_task_tr.gif",
					"iconTooltip": "Task",
					"statusIconSource": "/sap/public/bc/icons/s_S_LEDI.gif",
					"statusIconTooltip": "No Value Set",
					"editable": "FALSE",
					"potentialParent": "FALSE",
					"collapsed": "TRUE",
					"childrenLoaded": "FALSE",
					"selected": "FALSE",
					"scheduleConflict": "FALSE",
					"cutCopySelected": "FALSE",
					"menuId": "NIL"
				}, {
					"level": 2,
					"objectType": "PPO",
					"guid": "3863BB4422751ED7BCA7402E96B3BF78",
					"explanation": "Phase 1",
					"parentGuid": "3863BB4422751ED7BCA73DC9ABF81F76",
					"iconSource": "/sap/public/ppm/pro/icon_phase_tr.gif",
					"iconTooltip": "Phase",
					"statusIconSource": "/sap/public/bc/icons/s_S_LEDI.gif",
					"statusIconTooltip": "No Value Set",
					"editable": "FALSE",
					"potentialParent": "TRUE",
					"collapsed": "FALSE",
					"childrenLoaded": "TRUE",
					"selected": "FALSE",
					"scheduleConflict": "FALSE",
					"cutCopySelected": "FALSE",
					"menuId": "NIL"
				}, {
					"level": 3,
					"objectType": "TTO",
					"guid": "3863BB4422751ED7BCA740E015D7FF79",
					"explanation": "Task 1 below phase 1",
					"parentGuid": "3863BB4422751ED7BCA7402E96B3BF78",
					"iconSource": "/sap/public/ppm/pro/icon_task_tr.gif",
					"iconTooltip": "Task",
					"statusIconSource": "/sap/public/bc/icons/s_S_LEDI.gif",
					"statusIconTooltip": "No Value Set",
					"editable": "FALSE",
					"potentialParent": "FALSE",
					"collapsed": "TRUE",
					"childrenLoaded": "FALSE",
					"selected": "FALSE",
					"scheduleConflict": "FALSE",
					"cutCopySelected": "FALSE",
					"menuId": "NIL"
				}, {
					"level": 3,
					"objectType": "TTO",
					"guid": "3863BB4422751ED7BCA741C9C035BF79",
					"explanation": "Task 2 below phase 1",
					"parentGuid": "3863BB4422751ED7BCA7402E96B3BF78",
					"iconSource": "/sap/public/ppm/pro/icon_task_tr.gif",
					"iconTooltip": "Task",
					"statusIconSource": "/sap/public/bc/icons/s_S_LEDG.gif",
					"statusIconTooltip": "Cost OK: Manually Set",
					"editable": "FALSE",
					"potentialParent": "FALSE",
					"collapsed": "TRUE",
					"childrenLoaded": "FALSE",
					"selected": "FALSE",
					"scheduleConflict": "FALSE",
					"cutCopySelected": "FALSE",
					"menuId": "NIL"
				}, {
					"level": 3,
					"objectType": "TTO",
					"guid": "3863BB4422751ED7BCA742CBA663FF7A",
					"explanation": "Task 3 below phase 1",
					"parentGuid": "3863BB4422751ED7BCA7402E96B3BF78",
					"iconSource": "/sap/public/ppm/pro/icon_task_tr.gif",
					"iconTooltip": "Task",
					"statusIconSource": "/sap/public/bc/icons/s_S_LEDI.gif",
					"statusIconTooltip": "No Value Set",
					"editable": "FALSE",
					"potentialParent": "FALSE",
					"collapsed": "TRUE",
					"childrenLoaded": "FALSE",
					"selected": "FALSE",
					"scheduleConflict": "FALSE",
					"cutCopySelected": "FALSE",
					"menuId": "NIL"
				}, {
					"level": 3,
					"objectType": "TTO",
					"guid": "42F2E9AFC4EF1ED7BDA322900A4E6CA9",
					"explanation": "Task 4 below Phase 1",
					"parentGuid": "3863BB4422751ED7BCA7402E96B3BF78",
					"iconSource": "/sap/public/ppm/pro/icon_task_tr.gif",
					"iconTooltip": "Task",
					"statusIconSource": "/sap/public/bc/icons/s_S_LEDI.gif",
					"statusIconTooltip": "No Value Set",
					"editable": "FALSE",
					"potentialParent": "FALSE",
					"collapsed": "TRUE",
					"childrenLoaded": "FALSE",
					"selected": "FALSE",
					"scheduleConflict": "FALSE",
					"cutCopySelected": "FALSE",
					"menuId": "NIL"
				}, {
					"level": 3,
					"objectType": "TTO",
					"guid": "42F2E9AFC3DF1ED7BDA4A94406609079",
					"explanation": "Task 5 below phase 1",
					"parentGuid": "3863BB4422751ED7BCA7402E96B3BF78",
					"iconSource": "/sap/public/ppm/pro/icon_task_tr.gif",
					"iconTooltip": "Task",
					"statusIconSource": "/sap/public/bc/icons/s_S_LEDI.gif",
					"statusIconTooltip": "No Value Set",
					"editable": "FALSE",
					"potentialParent": "FALSE",
					"collapsed": "TRUE",
					"childrenLoaded": "FALSE",
					"selected": "FALSE",
					"scheduleConflict": "FALSE",
					"cutCopySelected": "FALSE",
					"menuId": "NIL"
				}, {
					"level": 3,
					"objectType": "CTO",
					"guid": "3863BB4422751ED7BCA7442509DDDFA6",
					"explanation": "checklist 1 below phase 1",
					"parentGuid": "3863BB4422751ED7BCA7402E96B3BF78",
					"iconSource": "/sap/public/ppm/pro/icon_checklist_tr.gif",
					"iconTooltip": "Checklist",
					"statusIconSource": "/sap/public/bc/icons/s_S_LEDI.gif",
					"statusIconTooltip": "No Value Set",
					"editable": "FALSE",
					"potentialParent": "TRUE",
					"collapsed": "TRUE",
					"childrenLoaded": "FALSE",
					"selected": "FALSE",
					"scheduleConflict": "FALSE",
					"cutCopySelected": "FALSE",
					"menuId": "NIL"
				}, {
					"level": 2,
					"objectType": "PPO",
					"guid": "3863BB4422751EE7BCA8BA8952790951",
					"explanation": "Phase 2",
					"parentGuid": "3863BB4422751ED7BCA73DC9ABF81F76",
					"iconSource": "/sap/public/ppm/pro/icon_phase_tr.gif",
					"iconTooltip": "Phase",
					"statusIconSource": "/sap/public/bc/icons/s_S_LEDI.gif",
					"statusIconTooltip": "No Value Set",
					"editable": "FALSE",
					"potentialParent": "TRUE",
					"collapsed": "FALSE",
					"childrenLoaded": "TRUE",
					"selected": "FALSE",
					"scheduleConflict": "FALSE",
					"cutCopySelected": "FALSE",
					"menuId": "NIL"
				}, {
					"level": 3,
					"objectType": "TTO",
					"guid": "3863BB4422751EE7BCA8BA8952794951",
					"explanation": "Task 1 below phase 2",
					"parentGuid": "3863BB4422751EE7BCA8BA8952790951",
					"iconSource": "/sap/public/ppm/pro/icon_task_tr.gif",
					"iconTooltip": "Task",
					"statusIconSource": "/sap/public/bc/icons/s_S_LEDI.gif",
					"statusIconTooltip": "No Value Set",
					"editable": "FALSE",
					"potentialParent": "FALSE",
					"collapsed": "TRUE",
					"childrenLoaded": "FALSE",
					"selected": "FALSE",
					"scheduleConflict": "FALSE",
					"cutCopySelected": "FALSE",
					"menuId": "NIL"
				}, {
					"level": 3,
					"objectType": "TTO",
					"guid": "3863BB4422751EE7BCA8BA8952798951",
					"explanation": "Task 2 below phase 2",
					"parentGuid": "3863BB4422751EE7BCA8BA8952790951",
					"iconSource": "/sap/public/ppm/pro/icon_task_tr.gif",
					"iconTooltip": "Task",
					"statusIconSource": "/sap/public/bc/icons/s_S_LEDI.gif",
					"statusIconTooltip": "No Value Set",
					"editable": "FALSE",
					"potentialParent": "FALSE",
					"collapsed": "TRUE",
					"childrenLoaded": "FALSE",
					"selected": "FALSE",
					"scheduleConflict": "FALSE",
					"cutCopySelected": "FALSE",
					"menuId": "NIL"
				}, {
					"level": 3,
					"objectType": "TTO",
					"guid": "3863BB4422751EE7BCA8BA895279C951",
					"explanation": "Task 3 below phase 2",
					"parentGuid": "3863BB4422751EE7BCA8BA8952790951",
					"iconSource": "/sap/public/ppm/pro/icon_task_tr.gif",
					"iconTooltip": "Task",
					"statusIconSource": "/sap/public/bc/icons/s_S_LEDI.gif",
					"statusIconTooltip": "No Value Set",
					"editable": "FALSE",
					"potentialParent": "FALSE",
					"collapsed": "TRUE",
					"childrenLoaded": "FALSE",
					"selected": "FALSE",
					"scheduleConflict": "FALSE",
					"cutCopySelected": "FALSE",
					"menuId": "NIL"
				}, {
					"level": 3,
					"objectType": "CTO",
					"guid": "3863BB4422751EE7BCA8BA89527A0951",
					"explanation": "checklist 1 below phase 2",
					"parentGuid": "3863BB4422751EE7BCA8BA8952790951",
					"iconSource": "/sap/public/ppm/pro/icon_checklist_tr.gif",
					"iconTooltip": "Checklist",
					"statusIconSource": "/sap/public/bc/icons/s_S_LEDI.gif",
					"statusIconTooltip": "No Value Set",
					"editable": "FALSE",
					"potentialParent": "TRUE",
					"collapsed": "TRUE",
					"childrenLoaded": "FALSE",
					"selected": "FALSE",
					"scheduleConflict": "FALSE",
					"cutCopySelected": "FALSE",
					"menuId": "NIL"
				}, {
					"level": 2,
					"objectType": "PPO",
					"guid": "3863BB4422751EE7BCA8BBF56146C953",
					"explanation": "Phase 3",
					"parentGuid": "3863BB4422751ED7BCA73DC9ABF81F76",
					"iconSource": "/sap/public/ppm/pro/icon_phase_tr.gif",
					"iconTooltip": "Phase",
					"statusIconSource": "/sap/public/bc/icons/s_S_LEDI.gif",
					"statusIconTooltip": "No Value Set",
					"editable": "FALSE",
					"potentialParent": "TRUE",
					"collapsed": "FALSE",
					"childrenLoaded": "TRUE",
					"selected": "FALSE",
					"scheduleConflict": "FALSE",
					"cutCopySelected": "FALSE",
					"menuId": "NIL"
				}, {
					"level": 3,
					"objectType": "TTO",
					"guid": "3863BB4422751EE7BCA8BBF561470953",
					"explanation": "Task 1 below phase 3",
					"parentGuid": "3863BB4422751EE7BCA8BBF56146C953",
					"iconSource": "/sap/public/ppm/pro/icon_task_tr.gif",
					"iconTooltip": "Task",
					"statusIconSource": "/sap/public/bc/icons/s_S_LEDI.gif",
					"statusIconTooltip": "No Value Set",
					"editable": "FALSE",
					"potentialParent": "FALSE",
					"collapsed": "TRUE",
					"childrenLoaded": "FALSE",
					"selected": "FALSE",
					"scheduleConflict": "FALSE",
					"cutCopySelected": "FALSE",
					"menuId": "NIL"
				}, {
					"level": 3,
					"objectType": "TTO",
					"guid": "3863BB4422751EE7BCA8BBF561474953",
					"explanation": "Task 2 below phase 3",
					"parentGuid": "3863BB4422751EE7BCA8BBF56146C953",
					"iconSource": "/sap/public/ppm/pro/icon_task_tr.gif",
					"iconTooltip": "Task",
					"statusIconSource": "/sap/public/bc/icons/s_S_LEDI.gif",
					"statusIconTooltip": "No Value Set",
					"editable": "FALSE",
					"potentialParent": "FALSE",
					"collapsed": "TRUE",
					"childrenLoaded": "FALSE",
					"selected": "FALSE",
					"scheduleConflict": "FALSE",
					"cutCopySelected": "FALSE",
					"menuId": "NIL"
				}, {
					"level": 3,
					"objectType": "TTO",
					"guid": "3863BB4422751EE7BCA8BBF561478953",
					"explanation": "Task 3 below phase 3",
					"parentGuid": "3863BB4422751EE7BCA8BBF56146C953",
					"iconSource": "/sap/public/ppm/pro/icon_task_tr.gif",
					"iconTooltip": "Task",
					"statusIconSource": "/sap/public/bc/icons/s_S_LEDI.gif",
					"statusIconTooltip": "No Value Set",
					"editable": "FALSE",
					"potentialParent": "FALSE",
					"collapsed": "TRUE",
					"childrenLoaded": "FALSE",
					"selected": "FALSE",
					"scheduleConflict": "FALSE",
					"cutCopySelected": "FALSE",
					"menuId": "NIL"
				}, {
					"level": 3,
					"objectType": "CTO",
					"guid": "3863BB4422751EE7BCA8BBF56147C953",
					"explanation": "checklist 1 below phase 3",
					"parentGuid": "3863BB4422751EE7BCA8BBF56146C953",
					"iconSource": "/sap/public/ppm/pro/icon_checklist_tr.gif",
					"iconTooltip": "Checklist",
					"statusIconSource": "/sap/public/bc/icons/s_S_LEDI.gif",
					"statusIconTooltip": "No Value Set",
					"editable": "FALSE",
					"potentialParent": "TRUE",
					"collapsed": "TRUE",
					"childrenLoaded": "FALSE",
					"selected": "FALSE",
					"scheduleConflict": "FALSE",
					"cutCopySelected": "FALSE",
					"menuId": "NIL"
				}
			];
			var updateIconSource = that.sapIcon(expandedCurrentBranch);
			this.expandedHierarchicalBranch = that.ganttJsonStructure(updateIconSource);
			// console.log(convertExpandedBranchIntoHierarichal);
			// console.log(that._oModel.oData);
			// console.log(that.getDifferences(that._oModel.oData, convertExpandedBranchIntoHierarichal));
			var pathArray = path.split('/');
			var index1 = pathArray[1];
        	
        	var data = that._oModel.getProperty(path);
			// var result = that.findProp(data, "name");
			if (!("children" in data)) {
				data.children = [];
			}
			
			console.log(data);
        	
        	
        	/*var data1 =  this.expandedHierarchicalBranch;
	        data1 = data1[index1];
	        
	        if (!("children" in data1)) {
	            data1.children = [];
	        }
	        
	        var i = 3;
	        while(i <= pathArray.length) {          
	          index1 = pathArray[i];      
	          data1 = data1.children[index1]; 
	          i = i + 2; 
	        }*/

	        // console.log(data1);
			// var currentIndex = pathArray[pathArray.length - 1];
			// console.log(currentIndex);
			
			
        	/*var index = path.split('/');
        	var index1 = index[1];
        	// console.log(index);
        	var data1 =  this.dataset;
	        data1 = data1[index1];          

	        var i = 3;
	        while(i <= index.length) {          
	          index1 = index[i];      
	          data1 = data1.children[index1]; 
	          i = i + 2; 
	        }

	        if (!("children" in data1)) {
	            data1.children = [];
	        }
	        for(i = 0; i < json.length; i++){
	            data1.children.push(json[i]);
	        }

       		that._oModel.refresh();*/
		},
		
		findProp:function(obj, prop) {
			var result = [];
			function recursivelyFindProp(o, keyToBeFound) {
	    		Object.keys(o).forEach(function (key) {
	    			if (typeof o[key] === 'object') {
	        			recursivelyFindProp(o[key], keyToBeFound);
	    			} else {
	        			if (key === keyToBeFound) result.push(o[key]);
	    			}
	    		});
			}
			recursivelyFindProp(obj, prop);
			return result;
		}
		
	});
});