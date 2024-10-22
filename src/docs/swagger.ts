import { configDotenv } from "dotenv";

configDotenv();

const swagger: object = {
  "swagger": "2.0",
  "info": {
    "version": "1.0.0",
    "title": "API Binar",
    "description": "Contoh API Binar",
    "termsOfService": "Contoh TOS",
    "contact": {
      "name": "Binar dev team"
    },
    "license": {
      "name": "Free"
    }
  },
  "host": `${process.env.APP_URL}:${process.env.PORT}`,
  "basePath": "/",
  "schemes": [
    "http",
    "https"
  ],
   "consumes": [
    "application/json"
  ],
  "produces": [
    "application/json"
  ],
  "paths": {
    "/articles": {
      "get": {
        "tags": [
            "article"
          ],
          "summary": "List all available articles",
        "description": "described hit",
        "operationId": "getArticles",
        "produces": [
          "application/json",
        ],
        "responses": {
          "200": {
            "description": "Success",
            "schema": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer",
                    "example": 1
                  },
                  "title": {
                    "type": "string",
                    "example": "Lorem Ipsum"
                  },
                  "body": {
                    "type": "string",
                    "example": "Dolor Sit Amet"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "article"
        ],
        "summary": "Add new article",
        "description": "Create new",
        "security": [],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "Article object",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "title": {
                  "type": "string",
                  "example": "Lorem Ipsum"
                },
                "body": {
                  "type": "string",
                  "example": "Dolor Sit Amet"
                }
              },
            },
          }
        ],
        "consumes": ["application/json"],
            "produces": ["application/json"],
            "responses": {
              "201": {
                "description": "Successfully create new article",
                "schema": {
                  "type": "object",
                    "properties": {
                      "id": {
                        "type": "integer",
                        "example": 1
                      },
                      "title": {
                        "type": "string",
                        "example": "Lorem Ipsum"
                      },
                      "body": {
                        "type": "string",
                        "example": "Dolor Sit Amet"
                      }
                  }
                }
              },
              "400": {
                "description": "Failed to create new article",
                "schema": {
                  "type": "object",
                    "properties": {
                      "message": {
                        "type": "string",
                        "example": "Failed to create new article"
                      }
                  }
                }
              }
            }
      }
    }
  },
  "securityDefinitions": {
    "ApiKeyAuth": {
      "type": "apiKey",
      "in": "header",
      "name": "Authorization"
    }
  }
}

export default swagger;
