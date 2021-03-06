'use strict';

var dsbrdProduct = {
	"_id": ObjectId("5512867be603d7e01ab1688d"),
	"locked": true,
	"code": "DSBRD",
	"name": "Dashboard Product",
	"description": "This is the main dashboard product.",
	"packages": [
		{
			"code": "DSBRD_MAIN",
			"name": "Main Product Dashboard Package",
			"locked": true,
			"description": "This package allows you to login to the dashboard.",
			"acl": {
				"dashboard": {
					"dashboard": {
						"apisPermission": "restricted",
						"apis": {
							"/key/get": {"access": true},
							"/permissions/get": {"access": true},
							"/tenant/acl/get": {"access": true}
						}
					},
					"urac": {
						"apisPermission": "restricted",
						"access": false,
						"apis": {
							"/login": {},
							"/forgotPassword": {},
							"/changeEmail/validate": {},
							"/join": {},
							"/join/validate": {},
							"/resetPassword": {},
							"/account/getUser": {"access": true},
							"/account/changePassword": {"access": true},
							"/account/editProfile": {"access": true},
							"/account/changeEmail": {"access": true},
							"/logout": {"access": true},
							"/admin/getUser": {"access": ["administrator", "owner"]},
							"/admin/listUsers": {"access": ["administrator", "owner"]},
							"/admin/addUser": {"access": ["administrator", "owner"]},
							"/admin/changeUserStatus": {"access": ["administrator", "owner"]},
							"/admin/editUser": {"access": ["administrator", "owner"]},
							"/admin/editUserConfig": {"access": ["administrator", "owner"]},
							"/admin/group/add": {"access": ["administrator", "owner"]},
							"/admin/group/addUsers": {"access": ["administrator", "owner"]},
							"/admin/group/delete": {"access": ["administrator", "owner"]},
							"/admin/group/edit": {"access": ["administrator", "owner"]},
							"/admin/group/list": {"access": ["administrator", "owner"]}
						}
					}
				}
			},
			"_TTL": 7 * 24 * 3600 * 1000 // 7 days hours
		},
		{
			"code": "DSBRD_OWNER",
			"name": "Dashboard Owner Package",
			"description": "This package provides full access to manage the dashboard and urac features.",
			"locked": true,
			"acl":{
				"dashboard": {
					"urac": {
						"access": ["owner"]
					},
					"dashboard": {
						"access": ["owner"]
					},
					"proxy": {
						"access": ["owner"]
					}
				},
				"dev":{
					"gc_articles": {
						"access": ["owner"]
					},
					"dashboard": {
						"apis": {
							"/cb/list": {
								"access": [
									"owner"
								]
							}
						},
						"access": false,
						"apisPermission": "restricted"
					}
				}
			},
			"_TTL": 7 * 24 * 3600 * 1000 // 7 days hours
		},
		{
			"code": "DSBRD_CLIENT",
			"name": "Main Client Product Package",
			"description": "This package offers both example03 and example04",
			"acl": {
				"dev": {
					"gc_articles": {
						"access": true
					}
				},
				"dashboard": {
					"urac": {
						"apis": {
							"/account/getUser": {
								"access": true
							},
							"/account/changePassword": {
								"access": true
							},
							"/account/editProfile": {
								"access": true
							},
							"/account/changeEmail": {
								"access": true
							},
							"/logout": {
								"access": true
							},
							"/changeEmail/validate": {
								"access": true
							},
							"/admin/getUser": {
								"access": [
									"administrator"
								]
							},
							"/admin/listUsers": {
								"access": [
									"administrator"
								]
							},
							"/admin/addUser": {
								"access": [
									"administrator"
								]
							},
							"/admin/changeUserStatus": {
								"access": [
									"administrator"
								]
							},
							"/admin/editUser": {
								"access": [
									"administrator"
								]
							},
							"/admin/group/add": {
								"access": [
									"administrator"
								]
							},
							"/admin/group/addUsers": {
								"access": [
									"administrator"
								]
							},
							"/admin/group/delete": {
								"access": [
									"administrator"
								]
							},
							"/admin/group/edit": {
								"access": [
									"administrator"
								]
							},
							"/admin/group/list": {
								"access": [
									"administrator"
								]
							}
						},
						"access": false,
						"apisPermission": "restricted"
					},
					"dashboard": {
						"apis": {
							"/tenant/acl/get": {
								"access": [
									"administrator"
								]
							},
							"/tenant/db/keys/list": {
								"access": [
									"administrator"
								]
							},
							"/logout": {
								"access": true
							},
							"/key/get": {
								"access": true
							},
							"/permissions/get": {
								"access": true
							},
							"/settings/tenant/get": {
								"access": [
									"administrator"
								]
							},
							"/product/packages/get": {
								"access": [
									"administrator"
								]
							},
							"/settings/tenant/update": {
								"access": [
									"administrator"
								]
							},
							"/settings/tenant/oauth/list": {
								"access": [
									"administrator"
								]
							},
							"/settings/tenant/oauth/delete": {
								"access": [
									"administrator"
								]
							},
							"/settings/tenant/oauth/add": {
								"access": [
									"administrator"
								]
							},
							"/settings/tenant/oauth/update": {
								"access": [
									"administrator"
								]
							},
							"/settings/tenant/oauth/users/list": {
								"access": [
									"administrator"
								]
							},
							"/settings/tenant/oauth/users/add": {
								"access": [
									"administrator"
								]
							},
							"/settings/tenant/oauth/users/delete": {
								"access": [
									"administrator"
								]
							},
							"/settings/tenant/oauth/users/update": {
								"access": [
									"administrator"
								]
							},
							"/settings/tenant/application/list": {
								"access": [
									"administrator"
								]
							},
							"/settings/tenant/application/key/add": {
								"access": [
									"administrator"
								]
							},
							"/settings/tenant/application/key/delete": {
								"access": [
									"administrator"
								]
							},
							"/settings/tenant/application/key/list": {
								"access": [
									"administrator"
								]
							},
							"/settings/tenant/application/key/config/list": {
								"access": [
									"administrator"
								]
							},
							"/settings/tenant/application/key/config/update": {
								"access": [
									"administrator"
								]
							},
							"/settings/tenant/application/key/ext/add": {
								"access": [
									"administrator"
								]
							},
							"/settings/tenant/application/key/ext/delete": {
								"access": [
									"administrator"
								]
							},
							"/settings/tenant/application/key/ext/list": {
								"access": [
									"administrator"
								]
							},
							"/settings/tenant/application/key/ext/update": {
								"access": [
									"administrator"
								]
							},
							"/cb/list": {
								"access": [
									"administrator"
								]
							}
						},
						"access": [
							"administrator"
						],
						"apisPermission": "restricted"
					},
					"proxy": {
						"apis": {},
						"access": [
							"administrator"
						]
					}
				}
			},
			"_TTL": 86400000
		}
	]
};