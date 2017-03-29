/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import Str from 'string';
import SentenceCleaner from 'sentence-cleaner';

// Extract a list of equipments from a recipe
export function extractEquipments(recipe) {
  const { steps } = recipe.analyzedInstructions[0];

  // Extract deeply-nested equipments
  const equipments = new Set();
  for (let i = 0; i < steps.length; i++) {
    const { equipment } = steps[i];
    for (let j = 0; j < equipment.length; j++) {
      const { name } = equipment[j];
      equipments.add(name.toLowerCase());
    }
  }

  return [...equipments];
}

// Extract a list of ingredients from ingredients
function extractIngredients(ingredients) {
  // Extract deeply-nested ingredients
  return ingredients.map((ingredient) => {
    const { amount } = ingredient;
    const { unit } = ingredient;
    const { name } = ingredient;

    return `${amount} ${unit} ${name}`;
  });
}

/*
 * Extract a list of used and missed ingredients from a recipe
 * NOTE: This function should be used to extract ingredients from
 * the JSON response of complexRecipeSearch.
 */
export function extractUsedAndMissedIngredients(recipe) {
  let { missedIngredients } = recipe;
  let { usedIngredients } = recipe;

  // Extract deeply-nested ingredients
  missedIngredients = extractIngredients(missedIngredients);
  usedIngredients = extractIngredients(usedIngredients);

  // Combine ingredients into one array
  return missedIngredients.concat(usedIngredients);
}

/*
 * Extract a list of extended ingredients from a recipe
 * NOTE: This function should be used to extract ingredients from
 * the JSON response of getRecipeInformation.
 */
export function extractExtendedIngredients(recipe) {
  const { extendedIngredients } = recipe;

  // Extract deeply-nested ingredients
  return extractIngredients(extendedIngredients);
}

// Extract a list of instructions from a recipe
export function extractInstructions(recipe) {
  const { steps } = recipe.analyzedInstructions[0];

  // Extract deeply-nested instructions
  let instructions = steps.map((step) => step.step);

  // Remove step numbers from instructions
  instructions = instructions.filter((instruction) =>
    !Str(instruction).isNumeric()
  );

  // Capitalizes the first letter of each sentence in each instruction
  return instructions.map((instruction) =>
    SentenceCleaner(instruction)
  );
}
