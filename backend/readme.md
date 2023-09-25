# FastAPI API Documentation

This is the documentation for the FastAPI API version 0.1.0. Below, you will find information about the available endpoints, request parameters, and response structures.

## Table of Contents

- [Base URL](#base-url)
- [Endpoints](#endpoints)
  - [Get All Countries](#get-all-countries)
  - [Get All Recipes by Country](#get-all-recipes-by-country)
  - [Get All Recipes by Category](#get-all-recipes-by-category)
  - [Get All Categories](#get-all-categories)
  - [Get Recipe by ID](#get-recipe-by-id)
- [Data Structures](#data-structures)
  - [CategoriesSchema](#categoriesschema)
  - [CountriesSchema](#countriesschema)
  - [HTTPValidationError](#httpvalidationerror)
  - [IngredientsRecipeSchema](#ingredientsrecipeschema)
  - [RecipeIngredientsSchema](#recipeingredientsschema)
  - [RecipesSchema](#recipesschema)
  - [ValidationError](#validationerror)

## Base URL

The base URL for all API endpoints is `/api/v1`.

## Endpoints

### Get All Countries

- **Summary:** Countries Get All
- **Operation ID:** countries_get_all_countries_get
- **HTTP Method:** GET
- **Path:** `/countries`
- **Responses:**
  - 200: Successful Response
    - Content:
      - `application/json`
        - Schema: [Response Countries Get All Countries Get](#recipecountriesgetall)
        
### Get All Recipes by Country

- **Summary:** Countries Recipes Get All
- **Operation ID:** countries_recipes_get_all_countries_recipes_get
- **HTTP Method:** GET
- **Path:** `/countries_recipes`
- **Parameters:**
  - `countries_id` (query, required, integer)
- **Responses:**
  - 200: Successful Response
    - Content:
      - `application/json`
        - Schema: [Response Countries Recipes Get All Countries Recipes Get](#recipecountriesrecipesgetall)
  - 422: Validation Error
    - Content:
      - `application/json`
        - Schema: [HTTPValidationError](#httpvalidationerror)
        
### Get All Recipes by Category

- **Summary:** Categories Recipes Get All
- **Operation ID:** categories_recipes_get_all_categories_recipes_get
- **HTTP Method:** GET
- **Path:** `/categories_recipes`
- **Parameters:**
  - `categories_id` (query, required, integer)
- **Responses:**
  - 200: Successful Response
    - Content:
      - `application/json`
        - Schema: [Response Categories Recipes Get All Categories Recipes Get](#recipecategoriesrecipesgetall)
  - 422: Validation Error
    - Content:
      - `application/json`
        - Schema: [HTTPValidationError](#httpvalidationerror)
        
### Get All Categories

- **Summary:** Categories Get All
- **Operation ID:** сategories_get_all_categories_get
- **HTTP Method:** GET
- **Path:** `/categories`
- **Responses:**
  - 200: Successful Response
    - Content:
      - `application/json`
        - Schema: [Response Categories Get All Categories Get](#recipecategoriesgetall)
        
### Get Recipe by ID

- **Summary:** Recipe Get
- **Operation ID:** recipe_get_recipe_get
- **HTTP Method:** GET
- **Path:** `/recipe`
- **Parameters:**
  - `recipe_id` (query, required, integer)
- **Responses:**
  - 200: Successful Response
    - Content:
      - `application/json`
        - Schema: [Response Recipe Get](#reciperecipeget)
  - 422: Validation Error
    - Content:
      - `application/json`
        - Schema: [HTTPValidationError](#httpvalidationerror)

## Data Structures

### CategoriesSchema

```json
{
  "id": integer,
  "name": string
}
```

### CountriesSchema
```json
{
  "id": integer,
  "name": string,
  "history": string
}
```

### HTTPValidationError
```json
{
  "detail": [
    {
      "loc": [string or integer],
      "msg": string,
      "type": string
    }
  ]
}
```

### IngredientsRecipeSchema
```json
{
  "name": string,
  "weight": number
}
```

### RecipeIngredientsSchema
```json
{
  "title": string,
  "desc": string,
  "ingredients": [IngredientsRecipeSchema]
}
```

### RecipesSchema
```json
{
  "id": integer,
  "title": string,
  "desc": string
}
```

### ValidationError
```json
{
  "loc": [string or integer],
  "msg": string,
  "type": string
}
```


Please note that this documentation provides an overview of the API endpoints and data structures. For more detailed information on request and response formats, refer to the provided JSON schema references.
