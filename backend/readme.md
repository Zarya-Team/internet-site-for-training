# API для сайта с рецептами

Этот документ описывает API для сайта с рецептами. Версия API: 0.0.1

## Основная информация

- **Базовый URL**: `/api/v1`

## Содержание

- [Получение всех стран](#получение-всех-стран)
- [Получение рецептов по стране](#получение-рецептов-по-стране)
- [Получение рецептов по категориям](#получение-рецептов-по-категориям)
- [Получение всех категорий](#получение-всех-категорий)
- [Получение всей информации о рецепте](#получение-всей-информации-о-рецепте)

## Получение всех стран

- **URL**: `/countries`
- **Метод**: `GET`
- **Описание**: Получение всех стран
- **Операция**: `countries_get_all_countries_get`
- **Ответ**: `200` - Успешный ответ
  - Тип данных: JSON
  - Схема данных: [Response Countries Get All Countries Get](#response-countries-get-all-countries-get)

## Получение рецептов по стране

- **URL**: `/countries_recipes`
- **Метод**: `GET`
- **Описание**: Получение рецептов по стране
- **Операция**: `countries_recipes_get_all_countries_recipes_get`
- **Параметры**:
  - `countries_id` (обязательно) - ID страны
  - `page` (необязательно) - Номер страницы, стандартно 1
  - `per_page` (необязательно) - Количество выгружаемых рецептов, стандартно 5
- **Ответ**: `200` - Успешный ответ
  - Тип данных: JSON
  - Схема данных: [Response Countries Recipes Get All Countries Recipes Get](#response-countries-recipes-get-all-countries-recipes-get)
- **Ответ**: `422` - Ошибка валидации
  - Тип данных: JSON
  - Схема данных: [HTTPValidationError](#httpvalidationerror)

## Получение рецептов по категориям

- **URL**: `/categories_recipes`
- **Метод**: `GET`
- **Описание**: Получение рецептов по категориям
- **Операция**: `categories_recipes_get_all_categories_recipes_get`
- **Параметры**:
  - `categories_id` (обязательно) - ID категории
  - `page` (необязательно) - Номер страницы, стандартно 1
  - `per_page` (необязательно) - Количество выгружаемых рецептов, стандартно 5
- **Ответ**: `200` - Успешный ответ
  - Тип данных: JSON
  - Схема данных: [Response Categories Recipes Get All Categories Recipes Get](#response-categories-recipes-get-all-categories-recipes-get)
- **Ответ**: `422` - Ошибка валидации
  - Тип данных: JSON
  - Схема данных: [HTTPValidationError](#httpvalidationerror)

## Получение всех категорий

- **URL**: `/categories`
- **Метод**: `GET`
- **Описание**: Получение всех категорий
- **Операция**: `сategories_get_all_categories_get`
- **Ответ**: `200` - Успешный ответ
  - Тип данных: JSON
  - Схема данных: [Response Сategories Get All Categories Get](#response-сategories-get-all-categories-get)

## Получение всей информации о рецепте

- **URL**: `/recipe`
- **Метод**: `GET`
- **Описание**: Получение всей информации о рецепте
- **Операция**: `recipe_get_recipe_get`
- **Параметры**:
  - `recipe_id` (обязательно) - ID рецепта
- **Ответ**: `200` - Успешный ответ
  - Тип данных: JSON
  - Схема данных: [RecipeIngredientsSchema](#recipeingredientsschema)
- **Ответ**: `422` - Ошибка валидации
  - Тип данных: JSON
  - Схема данных: [HTTPValidationError](#httpvalidationerror)

## Схемы данных

### CategoriesSchema

- `id` (integer) - ID
- `name` (string) - Название
- **Требуемые поля**: `id`, `name`

### CountriesSchema

- `id` (integer) - ID
- `name` (string) - Название
- `history` (string) - История
- **Требуемые поля**: `id`, `name`, `history`

### HTTPValidationError

- `detail` (array) - Массив ошибок валидации
  - `loc` (string или integer) - Местоположение ошибки
  - `msg` (string) - Сообщение об ошибке
  - `type` (string) - Тип ошибки
- **Требуемые поля**: `loc`, `msg`, `type`

### IngredientsRecipeSchema

- `name` (string) - Название
- `weight` (number) - Вес
- **Требуемые поля**: `name`, `weight`

### RecipeIngredientsSchema

- `title` (string) - Заголовок
- `desc` (string) - Описание
- `ingredients` (array) - Массив ингредиентов
  - Схема данных: [IngredientsRecipeSchema](#ingredientsrecipeschema)
- **Требуемые поля**: `title`, `desc`, `ingredients`

### RecipesSchema

- `id` (integer) - ID
- `title` (string) - Заголовок
- `desc` (string) - Описание
- **Требуемые поля**: `id`, `title`, `desc`

