/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import string from 'string';

// Extract a list of equipments from a recipe
export function extractEquipments(recipe) {
  const { steps } = recipe.analyzedInstructions[0];

  // Extract deeply-nested equipments
  const equipments = [];
  for (let i = 0; i < steps.length; i++) {
    const { equipment } = steps[i];
    for (let j = 0; j < equipment.length; j++) {
      const { name } = equipment[j];
      equipments.push(name);
    }
  }

  return equipments;
}

// Extract a list of ingredients from a recipe
export function extractIngredients(recipe) {
  const { extendedIngredients } = recipe;

  // Extract deeply-nested ingredients
  const ingredients = extendedIngredients.map((ingredient) => {
    const { amount } = ingredient;
    const { unit } = ingredient;
    const { name } = ingredient;
    return `${amount} ${unit} ${name}`;
  });

  return ingredients;
}

// Extract a list of instructions from a recipe
export function extractInstructions(recipe) {
  const { steps } = recipe.analyzedInstructions[0];

  // Extract deeply-nested instructions
  let instructions = steps.map((step) => step.step);

  // Remove step numbers from instructions
  instructions = instructions.filter((instruction) =>
    !string(instruction).isNumeric()
  );

  return instructions;
}
