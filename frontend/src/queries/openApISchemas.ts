/**
 * Generated by @openapi-codegen
 *
 * @version 0.0.1
 */
export type CategoriesSchema = {
  id: number;
  name: string;
};

export type CountriesSchema = {
  id: number;
  name: string;
  history: string;
};

export type HTTPValidationError = {
  detail?: ValidationError[];
};

export type IngredientsRecipeSchema = {
  name: string;
  weight: number;
};

export type RecipeIngredientsSchema = {
  title: string;
  desc: string;
  ingredients: IngredientsRecipeSchema[];
};

export type RecipesSchema = {
  id: number;
  title: string;
  desc: string;
};

export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
