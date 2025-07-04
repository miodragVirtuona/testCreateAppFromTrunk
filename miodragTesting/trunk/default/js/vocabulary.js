

//dictionary of application semantic resources
var APP_VOC = {
	"Ontos" : {
		PRJ : "http://localhost/virtdev_scas/resources/TasorProjects/miodragTestingAppOntos",
		WDS : "http://localhost/virtdev_scas/resources/TasorProjects/miodragTestingAppOntos_wds",
		WDS_NS : "http://localhost/virtdev_scas/resources/TasorProjects/miodragTestingAppOntos_wds/"
	},
	"Type" : {
		PRJ : "http://localhost/virtdev_scas/resources/TasorProjects/miodragTestingAppType",
		WDS : "http://localhost/virtdev_scas/resources/TasorProjects/miodragTestingAppKB_wds",
		WDS_NS : "http://localhost/virtdev_scas/resources/TasorProjects/miodragTestingAppKB_wds/"
	},
	"TypeNQ" : {
		PRJ : "http://localhost/virtdev_scas/resources/TasorProjects/miodragTestingAppType_namedQueries",
		WDS : "http://localhost/virtdev_scas/resources/TasorProjects/miodragTestingAppKB_wds_namedQueries",
		WDS_NS : "http://localhost/virtdev_scas/resources/TasorProjects/miodragTestingAppKB_wds_namedQueries/"
	},
	"TasorApplication": {
		"MENU_APP_STATE_CONF" : "http://dev.virtuona.rs/virtdev_scas/resources/TasorApplication/MenuAppStateConfiguration",
		"GENERIC_APP_STATE_CONF": "http://dev.virtuona.rs/virtdev_scas/resources/TasorApplication/RID-C67EAEE5-6A93-47BB-9BD2-E593C7A05AB4"
	},
	init : function(){
		for(var vocab in APP_VOC){
			for(var name in APP_VOC[vocab]){
				if(name!="PRJ" && name!="WDS" && name!="WDS_NS"){
					if(isset(APP_VOC[vocab].WDS_NS)){
						var vocabNS = APP_VOC[vocab].WDS_NS;
						APP_VOC[vocab][name] = vocabNS + APP_VOC[vocab][name];
					}
				}
			}
		}
	}
}
