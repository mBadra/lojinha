/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import { NavLink } from 'react-router-dom'
import $ from 'jquery'

$(function($) {

  var $nav = $('.topnav');
  var $win = $(window);
  var winH = $win.height();   // Get the window height.

  $win.on("scroll", function () {
      if ($(this).scrollTop() > winH ) {
          $nav.addClass("nav-colored");
      } else {
          $nav.removeClass("nav-colored");
      }
  }).on("resize", function(){ // If the user resizes the window
     winH = $(this).height(); // you'll need the new height value
  });

});

const TopnavComponent = () => (
  <header className='topnav'>
  <NavLink className='logo' to="/">LOJINHA UNIAMERICA</NavLink>
    <ul>
      <li><NavLink to='/About'>SOBRE NÓS</NavLink></li>
      <li><NavLink to='/Products'>PRODUTOS</NavLink></li>
    </ul>
  </header>
);

export default TopnavComponent;
