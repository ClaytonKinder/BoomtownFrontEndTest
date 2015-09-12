

// Toggles the side-menu
$('body').on('click', '#sideMenuToggle', function(){
  $('.sideNavbarBlock').toggleClass('sideNavbarOpen');
  $('.sideNavbarMask').toggleClass('sideNavbarOpen');
  $('aside').toggleClass('sideNavbarOpen');
  $('.contentWrapper').toggleClass('sideNavbarOpen');
})

// Clicking the opaque area while side-menu is open closes the side-menu
$('body').on('click', '.sideNavbarMask', function(){
  $('.sideNavbarBlock').removeClass('sideNavbarOpen');
  $('.sideNavbarMask').removeClass('sideNavbarOpen');
  $('aside').removeClass('sideNavbarOpen');
  $('.contentWrapper').removeClass('sideNavbarOpen');
})

var asideMenuToggle = function(asideToggle, asideSection) {
    var at = asideToggle;
    var atSibs = asideToggle.siblings();
    var aside = $('aside');

    if (asideSection === 'activities') {
      var as = $('section.activities');
      var asSibs = as.siblings();
    } else if (asideSection === 'tasks') {
      var as = $('section.tasks');
      var asSibs = as.siblings();
    } else {
      var as = $('section.settings');
      var asSibs = as.siblings();
    }

    if (at.hasClass('thisAsideOpen')) {
      atSibs.removeClass('thisAsideOpen');
      at.removeClass('thisAsideOpen');
      as.removeClass('asideOpen');
      asSibs.removeClass('asideOpen');
      aside.removeClass('asideOpen');
    } else {
      atSibs.removeClass('thisAsideOpen');
      at.addClass('thisAsideOpen');
      as.addClass('asideOpen');
      asSibs.removeClass('asideOpen');
      aside.addClass('asideOpen');
    }
}

// Clicking navbar icons open the appropriate aside block
$('body').on('click', '.asideToggle', function(){
  if ($(this).is('#asideToggleActivities')) {
    asideMenuToggle($('#asideToggleActivities'), 'activities');
  } else if ($(this).is('#asideToggleTasks')) {
    asideMenuToggle($('#asideToggleTasks'), 'tasks');
  } else if ($(this).is('#asideToggleSettings')) {
    asideMenuToggle($('#asideToggleSettings'), 'settings');
  }
})

// Controls the custom checkboxes in the first section of the sidebar settings
$('body').on('change', '.slideCheckbox', function(){
  $(this).closest('.slideCheckboxBlock').toggleClass('slideChecked');
})
