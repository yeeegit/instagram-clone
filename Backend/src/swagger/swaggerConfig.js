module.exports = {
  openapi: "3.0.0",
  info: {
    title: "User Management API",
    version: "1.0.0",
    description: "API for user registration and management"
  },
  servers: [
    {
      url: "http://localhost:1234/api/auth",
      description: "Local server"
    }
  ],
  components: {
    schemas: {
      RegisterUser: {
        type: "object",
        required: ["email", "fullname", "username", "password", "dateOfBirth"],
        properties: {
          email: {
            type: "string",
            description: "User's email address"
          },
          fullname: {
            type: "string",
            description: "User's full name"
          },
          username: {
            type: "string",
            description: "Unique username for the user"
          },
          password: {
            type: "string",
            description: "Password for the user account"
          },
          dateOfBirth: {
            type: "string",
            format: "date",
            description: "User's date of birth (YYYY-MM-DD format)"
          }
        },
        example: {
          email: "user@example.com",
          fullname: "John Doe",
          username: "johndoe",
          password: "SecureP@ssw0rd",
          dateOfBirth: "1990-01-01"
        }
      },
      User: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            description: "The auto-generated ID of the user"
          },
          email: {
            type: "string",
            description: "The user's email"
          },
          fullname: {
            type: "string",
            description: "The user's full name"
          },
          username: {
            type: "string",
            description: "The user's username"
          },
          dateOfBirth: {
            type: "string",
            format: "date",
            description: "The user's date of birth (YYYY-MM-DD format)"
          },
          userImage: {
            type: "string",
            description: "The URL to the user's profile image"
          },
          bio: {
            type: "string",
            description: "Short bio of the user"
          },
          role: {
            type: "string",
            description: "Role of the user (admin or user)"
          }
        }
      }
    }
  },
  paths: {
    "/register": {
      post: {
        summary: "Register a new user",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/RegisterUser"
              }
            }
          }
        },
        responses: {
          201: {
            description: "User registered successfully",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/User"
                }
              }
            }
          },
          400: {
            description: "Bad request, validation error"
          }
        }
      }
    }
    
  }
};
