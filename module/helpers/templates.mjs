/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
 export const preloadHandlebarsTemplates = async function() {
  return loadTemplates([

    // Actor partials.
    "systems/rqg/templates/actor/parts/actor-features.html",
    "systems/rqg/templates/actor/parts/actor-items.html",
    "systems/rqg/templates/actor/parts/actor-spells.html",
    "systems/rqg/templates/actor/parts/actor-effects.html",
  ]);
};
