# OpenAPI Documentation

## Introduction
This document provides information about the OpenAPI specification for the API.

## Version
- **OpenAPI:** 3.1.0
- **API Version:** 0.0.1

## Base URL
- **Base URL:** /api/v1

## Paths

### 1. /countries
#### GET /countries
- **Tags:** Categories for filters
- **Summary:** Retrieve all countries
- **Operation ID:** countries_get_all_countries_get
- **Responses:**
  - 200: Successful Response
    - Content:
      - application/json:
        - Schema: [CountriesSchema](#/components/schemas/CountriesSchema) (array)

### 2. /countries_recipes
#### GET /countries_recipes
- **Tags:** Retrieve data by filter
- **Summary:** Retrieve recipes by country
- **Operation ID:** countries_recipes_get_all_countries_recipes_get
- **Parameters:**
  - countries_id (query, integer, required)
  - page (query, integer, optional, default: 1)
  - per_page (query, integer, optional, default: 5)
- **Responses:**
  - 200: Successful Response
    - Content:
      - application/json:
        - Schema: [RecipesSchema](#/components/schemas/RecipesSchema) (array)
  - 422: Validation Error
    - Content:
      - application/json:
        - Schema: [HTTPValidationError](#/components/schemas/HTTPValidationError)

### 3. /categories_recipes
#### GET /categories_recipes
- **Tags:** Retrieve data by filter
- **Summary:** Retrieve recipes by categories
- **Operation ID:** categories_recipes_get_all_categories_recipes_get
- **Parameters:**
  - categories_id (query, integer, required)
  - page (query, integer, optional, default: 1)
  - per_page (query, integer, optional, default: 5)
- **Responses:**
  - 200: Successful Response
    - Content:
      - application/json:
        - Schema: [RecipesSchema](#/components/schemas/RecipesSchema) (array)
  - 422: Validation Error
    - Content:
      - application/json:
        - Schema: [HTTPValidationError](#/components/schemas/HTTPValidationError)

### 4. /categories
#### GET /categories
- **Tags:** Categories for filters
- **Summary:** Retrieve all categories
- **Operation ID:** сategories_get_all_categories_get
- **Responses:**
  - 200: Successful Response
    - Content:
      - application/json:
        - Schema: [CategoriesSchema](#/components/schemas/CategoriesSchema) (array)

### 5. /recipe
#### GET /recipe
- **Tags:** Retrieve complete data
- **Summary:** Retrieve all information about a recipe
- **Operation ID:** recipe_get_recipe_get
- **Parameters:**
  - recipe_id (query, integer, required)
- **Responses:**
  - 200: Successful Response
    - Content:
      - application/json:
        - Schema: [RecipeIngredientsSchema](#/components/schemas/RecipeIngredientsSchema)

### 6. /auth/jwt/login
#### POST /auth/jwt/login
- **Tags:** auth
- **Summary:** Auth:Jwt.Login
- **Operation ID:** auth_jwt_login_auth_jwt_login_post
- **Request Body:**
  - content: application/x-www-form-urlencoded
    - Schema: [Body_auth_jwt_login_auth_jwt_login_post](#/components/schemas/Body_auth_jwt_login_auth_jwt_login_post) (required)
- **Responses:**
  - 200: Successful Response
    - Content: application/json

### 7. /auth/jwt/logout
#### POST /auth/jwt/logout
- **Tags:** auth
- **Summary:** Auth:Jwt.Logout
- **Operation ID:** auth_jwt_logout_auth_jwt_logout_post
- **Responses:**
  - 200: Successful Response
    - Content: application/json
  - 401: Missing token or inactive user
  - 204: No Content
- **Security:**
  - APIKeyCookie

### 8. /auth/register
#### POST /auth/register
- **Tags:** auth
- **Summary:** Register:Register
- **Operation ID:** register_register_auth_register_post
- **Request Body:**
  - content: application/json
    - Schema: [UserCreate](#/components/schemas/UserCreate) (required)
- **Responses:**
  - 201: Successful Response
    - Content: application/json
  - 400: Bad Request
    - Content: application/json
      - Schema: [ErrorModel](#/components/schemas/ErrorModel)
  - 422: Validation Error
    - Content: application/json
      - Schema: [HTTPValidationError](#/components/schemas/HTTPValidationError)

### 9. /auth/forgot-password
#### POST /auth/forgot-password
- **Tags:** auth
- **Summary:** Reset:Forgot Password
- **Operation ID:** reset_forgot_password_auth_forgot_password_post
- **Request Body:**
  - content: application/json
    - Schema: [Body_reset_forgot_password_auth_forgot_password_post](#/components/schemas/Body_reset_forgot_password_auth_forgot_password_post) (required)
- **Responses:**
  - 202: Successful Response
    - Content: application/json
  - 422: Validation Error
    - Content: application/json
      - Schema: [HTTPValidationError](#/components/schemas/HTTPValidationError)

### 10. /auth/reset-password
#### POST /auth/reset-password
- **Tags:** auth
- **Summary:** Reset:Reset Password
- **Operation ID:** reset_reset_password_auth_reset_password_post
- **Request Body:**
  - content: application/json
    - Schema: [Body_reset_reset_password_auth_reset_password_post](#/components/schemas/Body_reset_reset_password_auth_reset_password_post) (required)
- **Responses:**
  - 200: Successful Response
    - Content: application/json
  - 400: Bad Request
    - Content: application/json
      - Schema: [ErrorModel](#/components/schemas/ErrorModel)
  - 422: Validation Error
    - Content: application/json
      - Schema: [HTTPValidationError](#/components/schemas/HTTPValidationError)

### 11. /auth/request-verify-token
#### POST /auth/request-verify-token
- **Tags:** auth
- **Summary:** Verify:Request-Token
- **Operation ID:** verify_request_token_auth_request_verify_token_post
- **Request Body:**
  - content: application/json
    - Schema: [Body_verify_request_token_auth_request_verify_token_post](#/components/schemas/Body_verify_request_token_auth_request_verify_token_post) (required)
- **Responses:**
  - 202: Successful Response
    - Content: application/json
  - 422: Validation Error
    - Content: application/json
      - Schema: [HTTPValidationError](#/components/schemas/HTTPValidationError)

### 12. /auth/verify
#### POST /auth/verify
- **Tags:** auth
- **Summary:** Verify:Verify
- **Operation ID:** verify_verify_auth_verify_post
- **Request Body:**
  - content: application/json
    - Schema: [Body_verify_verify_auth_verify_post](#/components/schemas/Body_verify_verify_auth_verify_post) (required)
- **Responses:**
  - 200: Successful Response
    - Content: application/json
  - 400: Bad Request
    - Content: application/json
      - Schema: [ErrorModel](#/components/schemas/ErrorModel)
  - 422: Validation Error
    - Content: application/json
      - Schema: [HTTPValidationError](#/components/schemas/HTTPValidationError)

### 13. /users/me
#### GET /users/me
- **Tags:** users
- **Summary:** Users:Current User
- **Operation ID:** users_current_user_users_me_get
- **Responses:**
  - 200: Successful Response
    - Content: application/json
      - Schema: [UserRead](#/components/schemas/UserRead)
  - 401: Missing token or inactive user
- **Security:**
  - APIKeyCookie

#### PATCH /users/me
- **Tags:** users
- **Summary:** Users:Patch Current User
- **Operation ID:** users_patch_current_user_users_me_patch
- **Request Body:**
  - content: application/json
    - Schema: [UserUpdate](#/components/schemas/UserUpdate) (required)
- **Responses:**
  - 200: Successful Response
    - Content: application/json
      - Schema: [UserRead](#/components/schemas/UserRead)
  - 401: Missing token or inactive user
  - 400: Bad Request
    - Content: application/json
      - Schema: [ErrorModel](#/components/schemas/ErrorModel)
  - 422: Validation Error
    - Content: application/json
      - Schema: [HTTPValidationError](#/components/schemas/HTTPValidationError)
- **Security:**
  - APIKeyCookie

### 14. /users/{id}
#### GET /users/{id}
- **Tags:** users
- **Summary:** Users:User
- **Operation ID:** users_user_users__id__get
- **Parameters:**
  - id (path, string, required)
- **Responses:**
  - 200: Successful Response
    - Content: application/json
      - Schema: [UserRead](#/components/schemas/UserRead)
  - 401: Missing token or inactive user
  - 403: Not a superuser
  - 404: The user does not exist
  - 422: Validation Error
    - Content: application/json
      - Schema: [HTTPValidationError](#/components/schemas/HTTPValidationError)

#### PATCH /users/{id}
- **Tags:** users
- **Summary:** Users:Patch User
- **Operation ID:** users_patch_user_users__id__patch
- **Parameters:**
  - id (path, string, required)
- **Request Body:**
  - required: true
  - content: application/json
    - Schema: [UserUpdate](#/components/schemas/UserUpdate) (required)
- **Responses:**
  - 200: Successful Response
    - Content: application/json
      - Schema: [UserRead](#/components/schemas/UserRead)
  - 401: Missing token or inactive user
  - 403: Not a superuser
  - 404: The user does not exist
  - 400: Bad Request
    - Content: application/json
      - Schema: [ErrorModel](#/components/schemas/ErrorModel)
  - 422: Validation Error
    - Content: application/json
      - Schema: [HTTPValidationError](#/components/schemas/HTTPValidationError)

#### DELETE /users/{id}
- **Tags:** users
- **Summary:** Users:Delete User
- **Operation ID:** users_delete_user_users__id__delete
- **Parameters:**
  - id (path, string, required)
- **Responses:**
  - 204: Successful Response
  - 401: Missing token or inactive user
  - 403: Not a superuser
  - 404: The user does not exist
  - 422: Validation Error
    - Content: application/json
      - Schema: [HTTPValidationError](#/components/schemas/HTTPValidationError)
- **Security:**
  - APIKeyCookie

## Components

### Schemas

#### Body_auth_jwt_login_auth_jwt_login_post
- grant_type (string, pattern: password, nullable: true)
- username (string)
- password (string)
- scope (string, default: "")
- client_id (string, nullable: true)
- client_secret (string, nullable: true)

#### Body_reset_forgot_password_auth_forgot_password_post
- email (string, format: email)

#### Body_reset_reset_password_auth_reset_password_post
- token (string)
- password (string)

#### Body_verify_request_token_auth_request_verify_token_post
- email (string, format: email)

#### Body_verify_verify_auth_verify_post
- token (string)

#### CategoriesSchema
- id (integer)
- name (string)

#### CountriesSchema
- id (integer)
- name (string)
- history (string)

#### ErrorModel
- detail (string or object)

#### HTTPValidationError
- detail (array of ValidationError)

#### IngredientsRecipeSchema
- name (string)
- weight (number)

#### RecipeIngredientsSchema
- title (string)
- desc (string)
- ingredients (array of IngredientsRecipeSchema)

#### RecipesSchema
- id (integer)
- title (string)
- desc (string)

#### UserCreate
- email (string, format: email)
- password (string)
- is_active (boolean, nullable: true, default: true)
- is_superuser (boolean, nullable: true, default: false)
- is_verified (boolean, nullable: true, default: false)

#### UserRead
- id (string, format: uuid)
- email (string, format: email)
- is_active (boolean, default: true)
- is_superuser (boolean, default: false)
- is_verified (boolean, default: false)

#### UserUpdate
- password (string or nullable: true)
- email (string or nullable: true)
- is_active (boolean or nullable: true)
- is_superuser (boolean or nullable: true)
- is_verified (boolean or nullable: true)

#### ValidationError
- loc (array of string or integer)
- msg (string)
- type (string)

### Security Schemes

#### APIKeyCookie
- type: apiKey
- in: cookie
- name: fastapiusersauth
