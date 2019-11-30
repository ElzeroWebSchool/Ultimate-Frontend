$(function() {
  "use strict";
  $(".toggle-sidebar").on("click", function() {
    $(".content-area, .sidebar").toggleClass("no-sidebar");
  });
  // Toggle Submenu
  $(".toggle-submenu").on("click", function() {
    $(this)
      .find(".fa-angle-right")
      .toggleClass("down");
    $(this)
      .next(".child-links")
      .slideToggle();
  });
  // Open / Close Fullscreen
  $(".toggle-fullscreen").on("click", function() {
    $(this).toggleClass("full-screen");
    if ($(this).hasClass("full-screen")) {
      // Page Is Now Full Screen
      openFullscreen();
    } else {
      // Page is Not Full Screen
      closeFullscreen();
    }
  });
  // Toggle Settings
  $(".toggle-settings").on("click", function() {
    $(this)
      .find("i")
      .toggleClass("fa-spin");
    $(this)
      .parent()
      .toggleClass("hide-settings");
  });
});

var elem = document.documentElement;

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE/Edge */
    document.msExitFullscreen();
  }
}

const myMap = new Map();
const mySet = new Set();