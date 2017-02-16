export const ACTION_TYPES ={
  searchRecipe: "SEARCH_RECIPE",
  showRecipe: "SHOW_RECIPE",
}


export function searchRecipe(ingredient){
  return {
    type: ACTION_TYPES.searchRecipe,
    payload: {
      ingredient,
    }
  }
}

export function showRecipe(recipe){
  return{
    type: ACTION_TYPES.showRecipe,
    payload: {
      recipe,
    }
  }
}
