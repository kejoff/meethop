define({ "api": [
  {
    "type": "delete",
    "url": "/delete",
    "title": "Delete a category",
    "group": "Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "event",
            "description": "<p>Elements attached to an event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.category",
            "description": "<p>Categories of the event</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n category deleted",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User error",
          "content": "Error: category already exists\nHTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/category.controller.js",
    "groupTitle": "Category",
    "name": "DeleteDelete"
  },
  {
    "type": "get",
    "url": "/all",
    "title": "Get all categories",
    "group": "Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "event",
            "description": "<p>Elements attached to an event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.category",
            "description": "<p>Categories of the event</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n \"category\": [\"expo\", \"sports\",...]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User error",
          "content": "Error: category already exists\nHTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/category.controller.js",
    "groupTitle": "Category",
    "name": "GetAll"
  },
  {
    "type": "get",
    "url": "/:category",
    "title": "Get events from a category",
    "group": "Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "event",
            "description": "<p>Elements attached to an event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event._id",
            "description": "<p>events ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.owner",
            "description": "<p>ID of the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.description",
            "description": "<p>Description of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.location",
            "description": "<p>Location of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.coordinates",
            "description": "<p>Coordinates of the event (lat, lon)</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.category",
            "description": "<p>Categories of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.isWaitingForEvent",
            "description": "<p>List of users by id who wants to participate but need approval by the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.isApprovedFromEvent",
            "description": "<p>List of users by id who wants to participate and have been approved by the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "event.date",
            "description": "<p>Date of the event</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n [{\n        \"participants\": [],\n        \"waitingList\": [\n            \"5e39985596eb2e1bd6b9db22\"\n        ],\n        \"coordinates\": [],\n        \"_id\": \"5e3d21e23ca6870b0556d172\",\n        \"title\": \"event de tutu qui fait blih\",\n        \"description\": \"mais kes tu boi doudou di don\",\n        \"category\": \"jeux de societe, expo\",\n        \"owner\": \"5e3aa185acf7411e24690aaf\",\n        \"date\": \"1970-01-01T03:37:32.020Z\",\n        \"participantsNumber\": 4,\n        \"__v\": 9\n    },\n    {\n        \"participants\": [],\n        \"waitingList\": [],\n        \"coordinates\": [],\n        \"_id\": \"5e417b762361ad044c21213e\",\n        \"title\": \"I love PostMan\",\n        \"description\": \"Pour tous ceux qui pensent que le front, en vrai, c'est surtout une histoire de marketeux, et qu'un bon service web, c'est une API... POINT, rien d'autre\",\n        \"category\": \"expo\",\n        \"owner\": \"5e3aa185acf7411e24690aaf\",\n        \"date\": \"1970-01-01T08:03:42.020Z\",\n        \"participantsNumber\": 42,\n        \"__v\": 0\n    },...]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User error",
          "content": "Error: category already exists\nHTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/category.controller.js",
    "groupTitle": "Category",
    "name": "GetCategory"
  },
  {
    "type": "get",
    "url": "/read",
    "title": "Get a category",
    "group": "Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "event",
            "description": "<p>Elements attached to an event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.category",
            "description": "<p>Categories of the event</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n [{\n      \"category\": [\"expo\"]\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/category.controller.js",
    "groupTitle": "Category",
    "name": "GetRead"
  },
  {
    "type": "post",
    "url": "/create",
    "title": "Create a category",
    "group": "Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "event",
            "description": "<p>Elements attached to an event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.category",
            "description": "<p>Categories of the event</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n [{\n      \"category\": [\"expo\", \"sports\"]\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User error",
          "content": "Error: category already exists\nHTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/category.controller.js",
    "groupTitle": "Category",
    "name": "PostCreate"
  },
  {
    "type": "put",
    "url": "/update",
    "title": "Update a category",
    "group": "Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "event",
            "description": "<p>Elements attached to an event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.category",
            "description": "<p>Categories of the event</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n [{\n      \"category\": [\"expo\", \"sports\"]\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/category.controller.js",
    "groupTitle": "Category",
    "name": "PutUpdate"
  },
  {
    "type": "get",
    "url": "/",
    "title": "Get all events",
    "group": "Event",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "event",
            "description": "<p>Elements attached to an event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event._id",
            "description": "<p>events ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.owner",
            "description": "<p>ID of the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.description",
            "description": "<p>Description of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.location",
            "description": "<p>Location of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.coordinates",
            "description": "<p>Coordinates of the event (lat, lon)</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.category",
            "description": "<p>Categories of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.isWaitingForEvent",
            "description": "<p>List of users by id who wants to participate but need approval by the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.isApprovedFromEvent",
            "description": "<p>List of users by id who wants to participate and have been approved by the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "event.date",
            "description": "<p>Date of the event</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n [[\n    {\n        \"participants\": [],\n        \"waitingList\": [\n            \"5e39985596eb2e1bd6b9db22\"\n        ],\n        \"coordinates\": [],\n        \"_id\": \"5e3d21e23ca6870b0556d172\",\n        \"title\": \"event de tutu qui fait blih\",\n        \"description\": \"mais kes tu boi doudou di don\",\n        \"category\": \"jeux de societe\",\n        \"owner\": \"5e3aa185acf7411e24690aaf\",\n        \"date\": \"1970-01-01T03:37:32.020Z\",\n        \"participantsNumber\": 4,\n        \"__v\": 9\n    },\n    {\n        \"participants\": [],\n        \"waitingList\": [],\n        \"coordinates\": [],\n        \"_id\": \"5e417b762361ad044c21213e\",\n        \"title\": \"I love PostMan\",\n        \"description\": \"Pour tous ceux qui pensent que le front, en vrai, c'est surtout une histoire de marketeux, et qu'un bon service web, c'est une API... POINT, rien d'autre\",\n        \"category\": \"expo\",\n        \"owner\": \"5e3aa185acf7411e24690aaf\",\n        \"date\": \"1970-01-01T08:03:42.020Z\",\n        \"participantsNumber\": 42,\n        \"__v\": 0\n    },...]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/event.controller.js",
    "groupTitle": "Event",
    "name": "Get"
  },
  {
    "type": "get",
    "url": "/id/:id",
    "title": "Get event by ID",
    "group": "Event",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "event",
            "description": "<p>Elements attached to an event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event._id",
            "description": "<p>events ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.owner",
            "description": "<p>ID of the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.description",
            "description": "<p>Description of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.location",
            "description": "<p>Location of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.coordinates",
            "description": "<p>Coordinates of the event (lat, lon)</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.category",
            "description": "<p>Categories of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.isWaitingForEvent",
            "description": "<p>List of users by id who wants to participate but need approval by the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.isApprovedFromEvent",
            "description": "<p>List of users by id who wants to participate and have been approved by the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "event.date",
            "description": "<p>Date of the event</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n [{\n      \"participants\": [],\n      \"waitingList\": [],\n      \"coordinates\": [],\n      \"_id\": \"5e465a6237e2dc19e3b743f9\",\n      \"title\": \"culturez vous\",\n      \"description\": \"destructuration de langue française au travers de l'influence des peintres flamands du 12ème siècle\",\n      \"category\": \"expo\",\n      \"owner\": \"5e3aa185acf7411e24690aaf\",\n      \"date\": \"1970-01-01T00:51:22.020Z\",\n      \"location\": \"Jouy-en-Josas\",\n      \"participantsNumber\": 12,\n    }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/event.controller.js",
    "groupTitle": "Event",
    "name": "GetIdId"
  },
  {
    "type": "get",
    "url": "/owner",
    "title": "Get all events of an event owner",
    "group": "Event",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "event",
            "description": "<p>Elements attached to an event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event._id",
            "description": "<p>events ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.owner",
            "description": "<p>ID of the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.description",
            "description": "<p>Description of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.location",
            "description": "<p>Location of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.coordinates",
            "description": "<p>Coordinates of the event (lat, lon)</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.category",
            "description": "<p>Categories of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.isWaitingForEvent",
            "description": "<p>List of users by id who wants to participate but need approval by the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.isApprovedFromEvent",
            "description": "<p>List of users by id who wants to participate and have been approved by the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "event.date",
            "description": "<p>Date of the event</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n [{\n        \"participants\": [],\n        \"waitingList\": [\n            \"5e39985596eb2e1bd6b9db22\"\n        ],\n        \"coordinates\": [],\n        \"_id\": \"5e3d21e23ca6870b0556d172\",\n        \"title\": \"event de tutu qui fait blih\",\n        \"description\": \"mais kes tu boi doudou di don\",\n        \"category\": \"jeux de societe\",\n        \"owner\": \"5e3aa185acf7411e24690aaf\",\n        \"date\": \"1970-01-01T03:37:32.020Z\",\n        \"participantsNumber\": 4,\n        \"__v\": 9\n    },\n    {\n        \"participants\": [],\n        \"waitingList\": [],\n        \"coordinates\": [],\n        \"_id\": \"5e417b762361ad044c21213e\",\n        \"title\": \"I love PostMan\",\n        \"description\": \"Pour tous ceux qui pensent que le front, en vrai, c'est surtout une histoire de marketeux, et qu'un bon service web, c'est une API... POINT, rien d'autre\",\n        \"category\": \"expo\",\n        \"owner\": \"5e3aa185acf7411e24690aaf\",\n        \"date\": \"1970-01-01T08:03:42.020Z\",\n        \"participantsNumber\": 42,\n        \"__v\": 0\n    },...]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/event.controller.js",
    "groupTitle": "Event",
    "name": "GetOwner"
  },
  {
    "type": "post",
    "url": "/edit/:id",
    "title": "Edit an event by id",
    "group": "Event",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "event",
            "description": "<p>Elements attached to an event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event._id",
            "description": "<p>events ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.owner",
            "description": "<p>ID of the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.description",
            "description": "<p>Description of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.location",
            "description": "<p>Location of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.coordinates",
            "description": "<p>Coordinates of the event (lat, lon)</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.category",
            "description": "<p>Categories of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.isWaitingForEvent",
            "description": "<p>List of users by id who wants to participate but need approval by the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.isApprovedFromEvent",
            "description": "<p>List of users by id who wants to participate and have been approved by the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "event.date",
            "description": "<p>Date of the event</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n [{\n      \"participants\": [],\n      \"waitingList\": [\n        5e3c0fda3325611484e27aed\n      ],\n      \"coordinates\": [],\n      \"_id\": \"5e465a6237e2dc19e3b743f9\",\n      \"title\": \"culturez vous\",\n      \"description\": \"destructuration de langue française au travers de l'influence des peintres flamands du 12ème siècle\",\n      \"category\": \"expo\",\n      \"owner\": \"5e3aa185acf7411e24690aaf\",\n      \"date\": \"1970-01-01T00:51:22.020Z\",\n      \"location\": \"Jouy-en-Josas\",\n      \"participantsNumber\": 12,\n    }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/event.controller.js",
    "groupTitle": "Event",
    "name": "PostEditId"
  },
  {
    "type": "post",
    "url": "/edit/:id",
    "title": "Delete an event by id",
    "group": "Event",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "event",
            "description": "<p>Elements attached to an event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event._id",
            "description": "<p>events ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.owner",
            "description": "<p>ID of the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.description",
            "description": "<p>Description of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.location",
            "description": "<p>Location of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.coordinates",
            "description": "<p>Coordinates of the event (lat, lon)</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.category",
            "description": "<p>Categories of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.isWaitingForEvent",
            "description": "<p>List of users by id who wants to participate but need approval by the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.isApprovedFromEvent",
            "description": "<p>List of users by id who wants to participate and have been approved by the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "event.date",
            "description": "<p>Date of the event</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n [{\n      \"participants\": [],\n      \"waitingList\": [\n        5e3c0fda3325611484e27aed\n      ],\n      \"coordinates\": [],\n      \"_id\": \"5e465a6237e2dc19e3b743f9\",\n      \"title\": \"culturez vous\",\n      \"description\": \"destructuration de langue française au travers de l'influence des peintres flamands du 12ème siècle\",\n      \"category\": \"expo\",\n      \"owner\": \"5e3aa185acf7411e24690aaf\",\n      \"date\": \"1970-01-01T00:51:22.020Z\",\n      \"location\": \"Jouy-en-Josas\",\n      \"participantsNumber\": 12,\n    }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/event.controller.js",
    "groupTitle": "Event",
    "name": "PostEditId"
  },
  {
    "type": "post",
    "url": "/:id",
    "title": "Create event",
    "group": "Event",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "event",
            "description": "<p>Elements attached to an event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event._id",
            "description": "<p>events ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.owner",
            "description": "<p>ID of the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.description",
            "description": "<p>Description of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.location",
            "description": "<p>Location of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.coordinates",
            "description": "<p>Coordinates of the event (lat, lon)</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.category",
            "description": "<p>Categories of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.isWaitingForEvent",
            "description": "<p>List of users by id who wants to participate but need approval by the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.isApprovedFromEvent",
            "description": "<p>List of users by id who wants to participate and have been approved by the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "event.date",
            "description": "<p>Date of the event</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n [{\n      \"participants\": [],\n      \"waitingList\": [],\n      \"coordinates\": [],\n      \"_id\": \"5e465a6237e2dc19e3b743f9\",\n      \"title\": \"culturez vous\",\n      \"description\": \"destructuration de langue française au travers de l'influence des peintres flamands du 12ème siècle\",\n      \"category\": \"expo\",\n      \"owner\": \"5e3aa185acf7411e24690aaf\",\n      \"date\": \"1970-01-01T00:51:22.020Z\",\n      \"location\": \"Jouy-en-Josas\",\n      \"participantsNumber\": 12,\n    }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/event.controller.js",
    "groupTitle": "Event",
    "name": "PostId"
  },
  {
    "type": "post",
    "url": "/participating/:id",
    "title": "Add user to a participants' list",
    "group": "Event",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "event",
            "description": "<p>Elements attached to an event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event._id",
            "description": "<p>events ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.owner",
            "description": "<p>ID of the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.description",
            "description": "<p>Description of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.location",
            "description": "<p>Location of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.coordinates",
            "description": "<p>Coordinates of the event (lat, lon)</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.category",
            "description": "<p>Categories of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.isWaitingForEvent",
            "description": "<p>List of users by id who wants to participate but need approval by the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.isApprovedFromEvent",
            "description": "<p>List of users by id who wants to participate and have been approved by the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "event.date",
            "description": "<p>Date of the event</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n [{\n      \"participants\": [\n        5e3c0fda3325611484e27aed\n      ],\n      \"waitingList\": [],\n      \"coordinates\": [],\n      \"_id\": \"5e465a6237e2dc19e3b743f9\",\n      \"title\": \"culturez vous\",\n      \"description\": \"destructuration de langue française au travers de l'influence des peintres flamands du 12ème siècle\",\n      \"category\": \"expo\",\n      \"owner\": \"5e3aa185acf7411e24690aaf\",\n      \"date\": \"1970-01-01T00:51:22.020Z\",\n      \"location\": \"Jouy-en-Josas\",\n      \"participantsNumber\": 12,\n    }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/event.controller.js",
    "groupTitle": "Event",
    "name": "PostParticipatingId"
  },
  {
    "type": "post",
    "url": "/postulating/:id",
    "title": "Add user to a waiting list",
    "group": "Event",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "event",
            "description": "<p>Elements attached to an event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event._id",
            "description": "<p>events ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.owner",
            "description": "<p>ID of the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.description",
            "description": "<p>Description of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.location",
            "description": "<p>Location of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.coordinates",
            "description": "<p>Coordinates of the event (lat, lon)</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.category",
            "description": "<p>Categories of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.isWaitingForEvent",
            "description": "<p>List of users by id who wants to participate but need approval by the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.isApprovedFromEvent",
            "description": "<p>List of users by id who wants to participate and have been approved by the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "event.date",
            "description": "<p>Date of the event</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n [{\n      \"participants\": [],\n      \"waitingList\": [\n        5e3c0fda3325611484e27aed\n      ],\n      \"coordinates\": [],\n      \"_id\": \"5e465a6237e2dc19e3b743f9\",\n      \"title\": \"culturez vous\",\n      \"description\": \"destructuration de langue française au travers de l'influence des peintres flamands du 12ème siècle\",\n      \"category\": \"expo\",\n      \"owner\": \"5e3aa185acf7411e24690aaf\",\n      \"date\": \"1970-01-01T00:51:22.020Z\",\n      \"location\": \"Jouy-en-Josas\",\n      \"participantsNumber\": 12,\n    }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/event.controller.js",
    "groupTitle": "Event",
    "name": "PostPostulatingId"
  },
  {
    "type": "put",
    "url": "/postulate/:id",
    "title": "Update a waiting list",
    "group": "Event",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "event",
            "description": "<p>Elements attached to an event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event._id",
            "description": "<p>events ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.owner",
            "description": "<p>ID of the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.description",
            "description": "<p>Description of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.location",
            "description": "<p>Location of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.coordinates",
            "description": "<p>Coordinates of the event (lat, lon)</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.category",
            "description": "<p>Categories of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.isWaitingForEvent",
            "description": "<p>List of users by id who wants to participate but need approval by the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.isApprovedFromEvent",
            "description": "<p>List of users by id who wants to participate and have been approved by the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "event.date",
            "description": "<p>Date of the event</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n [{\n      \"participants\": [],\n      \"waitingList\": [\n        5e3c0fda3325611484e27aed\n      ],\n      \"coordinates\": [],\n      \"_id\": \"5e465a6237e2dc19e3b743f9\",\n      \"title\": \"culturez vous\",\n      \"description\": \"destructuration de langue française au travers de l'influence des peintres flamands du 12ème siècle\",\n      \"category\": \"expo\",\n      \"owner\": \"5e3aa185acf7411e24690aaf\",\n      \"date\": \"1970-01-01T00:51:22.020Z\",\n      \"location\": \"Jouy-en-Josas\",\n      \"participantsNumber\": 12,\n    }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User error",
          "content": "Error: cannot add postulant\nError: already postulating\nHTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/event.controller.js",
    "groupTitle": "Event",
    "name": "PutPostulateId"
  },
  {
    "type": "put",
    "url": "/unpostulate/:id",
    "title": "Remove user from a waiting list",
    "group": "Event",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "event",
            "description": "<p>Elements attached to an event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event._id",
            "description": "<p>events ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.owner",
            "description": "<p>ID of the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.description",
            "description": "<p>Description of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.location",
            "description": "<p>Location of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.coordinates",
            "description": "<p>Coordinates of the event (lat, lon)</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.category",
            "description": "<p>Categories of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.isWaitingForEvent",
            "description": "<p>List of users by id who wants to participate but need approval by the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.isApprovedFromEvent",
            "description": "<p>List of users by id who wants to participate and have been approved by the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "event.date",
            "description": "<p>Date of the event</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n [{\n      \"participants\": [],\n      \"waitingList\": [\n        5e3c0fda3325611484e27aed\n      ],\n      \"coordinates\": [],\n      \"_id\": \"5e465a6237e2dc19e3b743f9\",\n      \"title\": \"culturez vous\",\n      \"description\": \"destructuration de langue française au travers de l'influence des peintres flamands du 12ème siècle\",\n      \"category\": \"expo\",\n      \"owner\": \"5e3aa185acf7411e24690aaf\",\n      \"date\": \"1970-01-01T00:51:22.020Z\",\n      \"location\": \"Jouy-en-Josas\",\n      \"participantsNumber\": 12,\n    }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User error",
          "content": "Error: unpostulate failed\nHTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/event.controller.js",
    "groupTitle": "Event",
    "name": "PutUnpostulateId"
  },
  {
    "type": "put",
    "url": "/unvalidate/:id",
    "title": "Unvalidate user from a participants' list",
    "group": "Event",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "event",
            "description": "<p>Elements attached to an event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event._id",
            "description": "<p>events ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.owner",
            "description": "<p>ID of the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.description",
            "description": "<p>Description of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.location",
            "description": "<p>Location of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.coordinates",
            "description": "<p>Coordinates of the event (lat, lon)</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.category",
            "description": "<p>Categories of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.isWaitingForEvent",
            "description": "<p>List of users by id who wants to participate but need approval by the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.isApprovedFromEvent",
            "description": "<p>List of users by id who wants to participate and have been approved by the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "event.date",
            "description": "<p>Date of the event</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n [{\n      \"participants\": [],\n      \"waitingList\": [\n        5e3c0fda3325611484e27aed\n      ],\n      \"coordinates\": [],\n      \"_id\": \"5e465a6237e2dc19e3b743f9\",\n      \"title\": \"culturez vous\",\n      \"description\": \"destructuration de langue française au travers de l'influence des peintres flamands du 12ème siècle\",\n      \"category\": \"expo\",\n      \"owner\": \"5e3aa185acf7411e24690aaf\",\n      \"date\": \"1970-01-01T00:51:22.020Z\",\n      \"location\": \"Jouy-en-Josas\",\n      \"participantsNumber\": 12,\n    }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User error",
          "content": "Error: unvalidate unsuccessful\nHTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/event.controller.js",
    "groupTitle": "Event",
    "name": "PutUnvalidateId"
  },
  {
    "type": "put",
    "url": "/validate/:id",
    "title": "Validate user from a waiting list",
    "group": "Event",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "event",
            "description": "<p>Elements attached to an event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event._id",
            "description": "<p>events ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.owner",
            "description": "<p>ID of the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.description",
            "description": "<p>Description of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "event.location",
            "description": "<p>Location of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.coordinates",
            "description": "<p>Coordinates of the event (lat, lon)</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.category",
            "description": "<p>Categories of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.isWaitingForEvent",
            "description": "<p>List of users by id who wants to participate but need approval by the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "event.isApprovedFromEvent",
            "description": "<p>List of users by id who wants to participate and have been approved by the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "event.date",
            "description": "<p>Date of the event</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n [{\n      \"participants\": [],\n      \"waitingList\": [\n        5e3c0fda3325611484e27aed\n      ],\n      \"coordinates\": [],\n      \"_id\": \"5e465a6237e2dc19e3b743f9\",\n      \"title\": \"culturez vous\",\n      \"description\": \"destructuration de langue française au travers de l'influence des peintres flamands du 12ème siècle\",\n      \"category\": \"expo\",\n      \"owner\": \"5e3aa185acf7411e24690aaf\",\n      \"date\": \"1970-01-01T00:51:22.020Z\",\n      \"location\": \"Jouy-en-Josas\",\n      \"participantsNumber\": 12,\n    }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User error",
          "content": "Error: participation failed\nError: already participating\nError: Event already full\nHTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/event.controller.js",
    "groupTitle": "Event",
    "name": "PutValidateId"
  },
  {
    "type": "delete",
    "url": "/delete",
    "title": "Delete user",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "user",
            "description": "<p>Elements attached to an user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user._id",
            "description": "<p>User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>Username from the created user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>Email from the created user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.location",
            "description": "<p>User location</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user.birthdate",
            "description": "<p>User birthdate</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "user.interests",
            "description": "<p>User interests</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n   [{\n        \"_id\": \"5e3aa185acf7411e24690aaf\",\n        \"username\": \"janedoe\",\n        \"email\": \"jane@doe.com\",\n        \"password\": \"$2b$10$aRgoYH2MxXtnoxKCoUFWh.1S3130JCqlClfiI5fyJJtaaP94BuJm.\",\n        \"birthdate\": \"1970-01-01T00:16:52.000Z\",\n        \"location\": \"montpellier\",\n        \"interests\": [\n            \"concert\",\n            \"sport\",\n            \"plein air\",\n            \"jeux de société\"\n        ]\n    }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/user.controller.js",
    "groupTitle": "User",
    "name": "DeleteDelete"
  },
  {
    "type": "get",
    "url": "/:id",
    "title": "User by ID",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "user",
            "description": "<p>Elements attached to an user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user._id",
            "description": "<p>User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>Username from the created user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.location",
            "description": "<p>User location</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar",
            "description": "<p>User profile picture</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.banner",
            "description": "<p>User Banner</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user.birthdate",
            "description": "<p>User birthdate</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.warnings",
            "description": "<p>Number of times this user has been reported</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "user.isActive",
            "description": "<p>Check if the account is active</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "user.isWaitingForEvent",
            "description": "<p>List of events the user wants to participate but need approval from the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "user.isApprovedFromEvent",
            "description": "<p>List of events the user wants to participate and have been approved by the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "user.interests",
            "description": "<p>User interests</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n   [{\n        \"interests\": [\n        \"concert\",\n        \"sport\",\n    ],\n    \"warnings\": 0,\n    \"isActive\": true,\n    \"isWaitingForEvent\": [],\n    \"isApprovedFromEvent\": [],\n    \"avatar\": \"monavatar.png\",\n    \"banner\": \"mabanner.png\",\n    \"_id\": \"5e3aa185acf7411e24690aaf\",\n    \"username\": \"janedoe\",\n    \"email\": \"jane@doe.com\",\n    \"password\": \"hashedpassword\",\n    \"birthdate\": \"1970-01-01T00:16:52.000Z\",\n    \"location\": \"montpellier\",\n    }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/user.controller.js",
    "groupTitle": "User",
    "name": "GetId"
  },
  {
    "type": "get",
    "url": "/read",
    "title": "Read Current Authentified User",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "user",
            "description": "<p>Elements attached to an user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user._id",
            "description": "<p>User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>Username from the created user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.location",
            "description": "<p>User location</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar",
            "description": "<p>User profile picture</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.banner",
            "description": "<p>User Banner</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user.birthdate",
            "description": "<p>User birthdate</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.warnings",
            "description": "<p>Number of times this user has been reported</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "user.isActive",
            "description": "<p>Check if the account is active</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "user.isWaitingForEvent",
            "description": "<p>List of events the user wants to participate but need approval from the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "user.isApprovedFromEvent",
            "description": "<p>List of events the user wants to participate and have been approved by the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "user.interests",
            "description": "<p>User interests</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n     \"interests\": [\n         \"concert\",\n         \"sport\",\n         \"plein air\",\n     ],\n     \"warnings\": 0,\n     \"isActive\": true,\n     \"isWaitingForEvent\": [],\n     \"isApprovedFromEvent\": [],\n     \"avatar\": \"myavatar.png\",\n     \"banner\": \"mybanner.png\",\n     \"_id\": \"5e3aa185acf7411e24690aaf\",\n     \"username\": \"janedoe\",\n     \"email\": \"jane@doe.com\",\n     \"birthdate\": \"1970-01-01T00:16:52.000Z\",\n     \"location\": \"montpellier\",\n }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/user.controller.js",
    "groupTitle": "User",
    "name": "GetRead"
  },
  {
    "type": "post",
    "url": "/create",
    "title": "Create User",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "user",
            "description": "<p>Elements attached to an user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user._id",
            "description": "<p>User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>Username from the created user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.location",
            "description": "<p>User location</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar",
            "description": "<p>User profile picture</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.banner",
            "description": "<p>User Banner</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user.birthdate",
            "description": "<p>User birthdate</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.warnings",
            "description": "<p>Number of times this user has been reported</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "user.isActive",
            "description": "<p>Check if the account is active</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "user.isWaitingForEvent",
            "description": "<p>List of events the user wants to participate but need approval by the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "user.isApprovedFromEvent",
            "description": "<p>List of events the user wants to participate and have been approved by the owner of the event</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "user.interests",
            "description": "<p>User interests</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n     \"interests\": [\n         \"salon, sport, nautique\"\n     ],\n     \"warnings\": 0,\n     \"isActive\": true,\n     \"isWaitingForEvent\": [],\n     \"isApprovedFromEvent\": [],\n     \"avatar\": \"myavatar.png\",\n     \"banner\": \"mybanner.png\",\n     \"_id\": \"5e458c5ea194ae01e7487932\",\n     \"username\": \"tati\",\n     \"email\": \"tati@tati.com\",\n     \"password\": \"password\",\n     \"birthdate\": \"1970-01-01T00:16:52.000Z\",\n     \"location\": \"paris\",\n     \"__v\": 0\n }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/user.controller.js",
    "groupTitle": "User",
    "name": "PostCreate"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Login user",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "user",
            "description": "<p>Elements attached to an user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user._id",
            "description": "<p>User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>Username from the created user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>Email from the created user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.location",
            "description": "<p>User location</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user.birthdate",
            "description": "<p>User birthdate</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "user.interests",
            "description": "<p>User interests</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.token",
            "description": "<p>User access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n   [{\n        \"_id\": \"5e39985596eb2e1bd6b9db22\",\n        \"username\": \"test\",\n        \"email\": \"test@test.com\",\n        \"password\": \"$2b$10$Hb2z9l1fjO1PEBfr1e/FzuTbY4Yn6nnZ2HlLT9FQCfzD7FUrFUQWC\",\n        \"birthdate\": \"2014-01-01T23:28:56.782Z\",\n        \"description\": \"J'ai RIEN a dire\",\n        \"location\": \"Nantes\",\n        \"interests\": [],\n        \"token\": \"accessToken\"\n    }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/user.controller.js",
    "groupTitle": "User",
    "name": "PostLogin"
  },
  {
    "type": "update",
    "url": "/update",
    "title": "Update user",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "user",
            "description": "<p>Elements attached to an user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user._id",
            "description": "<p>User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>Username from the created user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>Email from the created user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.location",
            "description": "<p>User location</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user.birthdate",
            "description": "<p>User birthdate</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "user.interests",
            "description": "<p>User interests</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n   [{\n        \"_id\": \"5e3aa185acf7411e24690aaf\",\n        \"username\": \"janedoe\",\n        \"email\": \"jane@doe.com\",\n        \"password\": \"$2b$10$aRgoYH2MxXtnoxKCoUFWh.1S3130JCqlClfiI5fyJJtaaP94BuJm.\",\n        \"birthdate\": \"1970-01-01T00:16:52.000Z\",\n        \"location\": \"montpellier\",\n        \"interests\": [\n            \"concert\",\n            \"sport\",\n            \"plein air\",\n            \"jeux de société\"\n        ]\n    }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../controllers/user.controller.js",
    "groupTitle": "User",
    "name": "UpdateUpdate"
  }
] });
