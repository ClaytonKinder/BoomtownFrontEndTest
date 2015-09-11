// Loads all html files into index.html
$(function(){
  $("#navbarInclude").load("../views/navbar.html");
  $("#sideNavbarInclude").load("../views/side-navbar.html");
  $("#headerInclude").load("../views/header.html");
  $("#mainUsersInclude").load("../views/main-users.html");
  $("#mainWeatherInclude").load("../views/main-weather.html");
  $("#mainChatInclude").load("../views/main-chat.html");
  $("#mainUsageInclude").load("../views/main-usage.html");
  $("#asideActivitiesInclude").load("../views/aside-activities.html");
  $("#asideSettingsInclude").load("../views/aside-settings.html");
  $("#asideTasksInclude").load("../views/aside-tasks.html");
});

$(window).load(function () {
  // Controls the initial color of the custom checkboxes in the first section of the
  // sidebar settings
  $('.slideCheckbox').each(function(){
    if ($(this)[0].checked === true) {
      $(this).closest('.slideCheckboxBlock').css('background-color', '#679900');
    } else {
      $(this).closest('.slideCheckboxBlock').css('background-color', '#CCCCCC');
    }
  });
});

// Toggles the side-menu
$('body').on('click', '#sideMenuToggle', function(){
  alert('You clicked me!');
})

// Controls the custom checkboxes in the first section of the sidebar settings
$('body').on('change', '.slideCheckbox', function(){
  if ($(this)[0].checked === true) {
    $(this).closest('.slideCheckboxBlock').css('background-color', '#679900');
  } else {
    $(this).closest('.slideCheckboxBlock').css('background-color', '#CCCCCC');
  }
})
