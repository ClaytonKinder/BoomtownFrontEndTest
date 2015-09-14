/***********
FUNCTIONS
***********/

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

function isSafari() {
  return /^((?!chrome).)*safari/i.test(navigator.userAgent);
}

function isInternetExplorer() {
  var ua = window.navigator.userAgent;
  var old_ie = ua.indexOf('MSIE ');
  var new_ie = ua.indexOf('Trident/');

  if ((old_ie > -1) || (new_ie > -1)) {
    console.log('ie');
    return true;
  } else {
    console.log('not ie');
    return false;
  }
}

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

/***********
FEATURE DETECTION
***********/

if (isSafari()) {
  $('nav.uk-navbar ul:last-of-type').addClass('safari');
  $('.contentWrapper').addClass('safari');
}

if (isInternetExplorer()) {
  $('nav.uk-navbar ul:first-of-type li:first-of-type').addClass('internetExplorer');
}

if (isMobile.any()) {
  $('.contentWrapper').addClass('mobile');
}

/***********
CLICK EVENTS
***********/

// Toggles the side-menu
$('body').on('click', '#sideMenuToggle', function(){
  $('.sideNavbarBlock').toggleClass('sideNavbarOpen');
  $('.sideNavbarMask').toggleClass('sideNavbarOpen');
  $('aside').toggleClass('sideNavbarOpen');
  $('.contentWrapper').toggleClass('sideNavbarOpen');
  $('.asideToggle').removeClass('thisAsideOpen');
  $('section.activities').removeClass('thisAsideOpen');
  $('section.settings').removeClass('thisAsideOpen');
  $('section.tasks').removeClass('asideOpen');
  $('aside').removeClass('asideOpen');
})

// Clicking the opaque area while side-menu is open closes the side-menu
$('body').on('click', '.sideNavbarMask', function(){
  $('.sideNavbarBlock').removeClass('sideNavbarOpen');
  $('.sideNavbarMask').removeClass('sideNavbarOpen');
  $('aside').removeClass('sideNavbarOpen');
  $('.contentWrapper').removeClass('sideNavbarOpen');
})

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

/***********
CHANGE EVENTS
***********/

// Controls the custom checkboxes in the first section of the sidebar settings
$('body').on('change', '.slideCheckbox', function(){
  $(this).closest('.slideCheckboxBlock').toggleClass('slideChecked');
})
