[Emin Güner Deneme2.postman_collection.json](https://github.com/user-attachments/files/18208208/Emin.Guner.Deneme2.postman_collection.json)Muhammed Emin Güner 2211012082

[Backend Ödev](https://backend-odev.vercel.app/)

[vercel link](https://backend-odev-3p0pormba-meguner32s-projects.vercel.app)

<img width="1303" alt="Ekran Resmi 2024-12-20 11 40 17" src="https://github.com/user-attachments/assets/157c6371-3636-4fed-be16-0bc45131eeef" />

[Uploading Emin Güner Deneme2.{
	"info": {
		"_postman_id": "7a6f24b4-ff4f-4dd2-97e9-c64b930ba509",
		"name": "Emin Güner Deneme2",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "38306412"
	},
	"item": [
		{
			"name": "Emin Add Venue",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"    var id = pm.response.json()._id;",
							"pm.environment.set(\"venueid\", id);",
							"pm.test(\"Status code is 201\", function () {",
							"    pm.response.to.have.status(201);",
							"});"
						],
						"type": "text/javascript",
						"packages": {}
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "name",
							"value": "Bilgisayar Mühendisliği",
							"type": "text"
						},
						{
							"key": "address",
							"value": "Süleyman Demirel Üniversitesi",
							"type": "text"
						},
						{
							"key": "foodanddrink",
							"value": "Web",
							"type": "text"
						},
						{
							"key": "lat",
							"value": "37",
							"type": "text"
						},
						{
							"key": "long",
							"value": "35",
							"type": "text"
						},
						{
							"key": "day1",
							"value": "Pazartesi-Cuma",
							"type": "text"
						},
						{
							"key": "open1",
							"value": "9",
							"type": "text"
						},
						{
							"key": "close1",
							"value": "11",
							"type": "text"
						},
						{
							"key": "isClosed1",
							"value": "false",
							"type": "text"
						},
						{
							"key": "open2",
							"value": "9",
							"type": "text"
						},
						{
							"key": "close2",
							"value": "11",
							"type": "text"
						},
						{
							"key": "isClosed2",
							"value": "false",
							"type": "text"
						},
						{
							"key": "day2",
							"value": "Cumartesi",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "localhost:3000/api/venues",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"venues"
					]
				}
			},
			"response": []
		},
		{
			"name": "Emin List Nearby Venues",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});"
						],
						"type": "text/javascript",
						"packages": {}
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "urlencoded",
					"urlencoded": []
				},
				"url": {
					"raw": "localhost:3000/api/venues?lat=37&long=35",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"venues"
					],
					"query": [
						{
							"key": "lat",
							"value": "37"
						},
						{
							"key": "long",
							"value": "35"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Emin Get Venue",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});"
						],
						"type": "text/javascript",
						"packages": {}
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "localhost:3000/api/venues/{{venueid}}",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"venues",
						"{{venueid}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Emin Update Venue",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code is 201\", function () {",
							"    pm.response.to.have.status(201);",
							"});"
						],
						"type": "text/javascript",
						"packages": {}
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "name",
							"value": "Asy23",
							"type": "text"
						},
						{
							"key": "address",
							"value": "asy2",
							"type": "text"
						},
						{
							"key": "foodanddrink",
							"value": "asy",
							"type": "text"
						},
						{
							"key": "lat",
							"value": "37",
							"type": "text"
						},
						{
							"key": "long",
							"value": "35",
							"type": "text"
						},
						{
							"key": "day1",
							"value": "Pazartesi-Cuma",
							"type": "text"
						},
						{
							"key": "open1",
							"value": "9-11",
							"type": "text"
						},
						{
							"key": "close1",
							"value": "9-11",
							"type": "text"
						},
						{
							"key": "isClosed1",
							"value": "false",
							"type": "text"
						},
						{
							"key": "day2",
							"value": "Cumartesi",
							"type": "text"
						},
						{
							"key": "open2",
							"value": "9-11",
							"type": "text"
						},
						{
							"key": "close2",
							"value": "9-11",
							"type": "text"
						},
						{
							"key": "isClosed2",
							"value": "false",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "localhost:3000/api/venues/{{venueid}}",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"venues",
						"{{venueid}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Emin Add Comment",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"var id = pm.response.json()._id",
							"pm.environment.set(\"commentid\", id);",
							"pm.test(\"Status code is 201\", function () {",
							"    pm.response.to.have.status(201);",
							"});"
						],
						"type": "text/javascript",
						"packages": {}
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "author",
							"value": "masy",
							"type": "text"
						},
						{
							"key": "rating",
							"value": "1",
							"type": "text"
						},
						{
							"key": "text",
							"value": "noo",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "localhost:3000/api/venues/{{venueid}}/comments",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"venues",
						"{{venueid}}",
						"comments"
					]
				}
			},
			"response": []
		},
		{
			"name": "Emin Get Comment",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"var id = pm.response.json().comment._id",
							"pm.environment.set(\"commentid\", id);",
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});"
						],
						"type": "text/javascript",
						"packages": {}
					}
				},
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript",
						"packages": {}
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "urlencoded",
					"urlencoded": []
				},
				"url": {
					"raw": "localhost:3000/api/venues/{{venueid}}/comments/{{commentid}}",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"venues",
						"{{venueid}}",
						"comments",
						"{{commentid}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Emin Update Comment",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code is 201\", function () {",
							"    pm.response.to.have.status(201);",
							"});"
						],
						"type": "text/javascript",
						"packages": {}
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "author",
							"value": "asy",
							"type": "text"
						},
						{
							"key": "rating",
							"value": "3",
							"type": "text"
						},
						{
							"key": "text",
							"value": "noo",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "localhost:3000/api/venues/{{venueid}}/comments/{{commentid}}",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"venues",
						"{{venueid}}",
						"comments",
						"{{commentid}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Emin Delete Comment",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});"
						],
						"type": "text/javascript",
						"packages": {}
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [],
				"body": {
					"mode": "urlencoded",
					"urlencoded": []
				},
				"url": {
					"raw": "localhost:3000/api/venues/{{venueid}}/comments/{{commentid}}",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"venues",
						"{{venueid}}",
						"comments",
						"{{commentid}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Emin Delete Venue",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code is 200\", function () {",
							"    pm.response.to.have.status(200);",
							"});"
						],
						"type": "text/javascript",
						"packages": {}
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [],
				"body": {
					"mode": "urlencoded",
					"urlencoded": []
				},
				"url": {
					"raw": "localhost:3000/api/venues/{{venueid}}",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"venues",
						"{{venueid}}"
					]
				}
			},
			"response": []
		}
	]
}postman_collection.json…]()



bu link üzerinde her json olsada test sonucunun dosya hali 

