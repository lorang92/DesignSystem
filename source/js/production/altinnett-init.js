/* globals
  AltinnModal
  feedbackToggle
  handleFocus
  addListExpandHandler
  initializeDatepicker
  setupTruncateLines
  newsArchive
  menuToggleEffectAltinnett
  popoverGlobalInit
  popoverLocalInit
  subscribe
  togglePanel
  questionnaireInteraction
  setupFormValidation
  setValidatorSettings
  setupSlickCarousel
  searchFilterView
*/
window.altinnettInit = function() {
  AltinnModal.init();
  feedbackToggle();
  handleFocus();
  addListExpandHandler();
  initializeDatepicker();
  setupTruncateLines();
  newsArchive();
  menuToggleEffectAltinnett();
  popoverGlobalInit();
  popoverLocalInit();
  subscribe();
  togglePanel();
  questionnaireInteraction();
  searchFilterView();
  setupFormValidation();
  setValidatorSettings();

  function setupForm() {
    $('body').off('focus', '#contactForm', setupForm);
    setupFormValidation('#contactForm', '#a-js-contactForm-submit');
  }

  $('body').on('focus', '#contactForm', setupForm);
  setupSlickCarousel();
};

window.altinnettInit();
