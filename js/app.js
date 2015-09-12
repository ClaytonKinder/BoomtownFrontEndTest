// Loads all html files into index.html

$(window).load(function () {

  // $(function(){
  //   $("#navbarInclude").load("./views/navbar.html");
  //   $("#sideNavbarInclude").load("./views/side-navbar.html");
  //   $("#headerInclude").load("./views/header.html");
  //   $("#mainUsersInclude").load("./views/main-users.html");
  //   $("#mainWeatherInclude").load("./views/main-weather.html");
  //   $("#mainChatInclude").load("./views/main-chat.html");
  //   $("#mainUsageInclude").load("./views/main-usage.html");
  //   $("#asideActivitiesInclude").load("./views/aside-activities.html");
  //   $("#asideSettingsInclude").load("./views/aside-settings.html");
  //   $("#asideTasksInclude").load("./views/aside-tasks.html");
  // });
});

// Toggles the side-menu
$('body').on('click', '#sideMenuToggle', function(){
  $('.sideNavbarBlock').toggleClass('sideNavbarOpen');
  $('.sideNavbarMask').toggleClass('sideNavbarOpen');
  $('.contentWrapper').toggleClass('sideNavbarOpen');
})

$('body').on('click', '.sideNavbarMask', function(){
  $('.sideNavbarBlock').removeClass('sideNavbarOpen');
  $('.sideNavbarMask').removeClass('sideNavbarOpen');
  $('.contentWrapper').removeClass('sideNavbarOpen');
})

// Controls the custom checkboxes in the first section of the sidebar settings
$('body').on('change', '.slideCheckbox', function(){
  $(this).closest('.slideCheckboxBlock').toggleClass('slideChecked');
})
