// ==UserScript==
// @name         Pointercrate Darkmode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Provides a *beta* darkmode for the Pointercrate API Website
// @author       PokeyYapper1991
// @match        https://pointercrate.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pointercrate.com
// @grant        none
// ==/UserScript==

(function () {
        'use strict';

        // Define the dark mode CSS rules
        const darkModeCSS=` .hover white {
            background-color: black;
        }

        body {
            background-color: #202020;
        }

        section {
            background-color: #080808;
        }

        header {
            background-color: black;
        }

        #editors {
            background-color: #303030;
            color: aliceblue;
            border-radius: 25px;
            border-style: none !important;
            box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);
        }

        #rules {
            background-color: #303030;
            color: aliceblue;
            border-radius: 25px;
            border-style: none !important;
            box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);
        }

        #submit {
            background-color: #303030;
            color: aliceblue;
            border-radius: 25px;
            border-style: none !important;
            box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);
        }

        #stats {
            background-color: #303030;
            color: aliceblue;
            border-radius: 25px;
            border-style: none !important;
            box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);
        }

        #discord {
            background-color: #303030;
            color: aliceblue;
            border-radius: 25px;
            border-style: none !important;
            box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);
        }

        a {
            color: aliceblue;
        }

        .left {
            color: #000;
        }

        section[class="panel fade"] {
            background-color: #282828;
            color: azure;
            border-style: none !important;
            border-radius: 15px;
            box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);
            transition: opacity 0.8s ease;
        }

        section[class="panel fade"]:hover {
            background-color: #363636;
            color: azure;
            border-style: none !important;
            border-radius: 15px;
            box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);
            transition: opacity 0.8s ease;
        }

        nav[class="center collapse underlined see-through"],
        [class="nav-item hover white"] {
            background-color: #222;
            color: azure;
            border-style: none !important;
        }

        .overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.8);
            z-index: 1083458237
        }

        .hover, .hover:hover:not(.disabled):not([disabled]) {
            transition: opacity .8s ease
        }

        #statsviewers {
            background-color: #303030 !important;
            border-style: none !important;
            border-radius: 20px !important;
        }

        #stats-viewer-pagination li i {
            padding-left: 5px;
            color: #fff;
            font-size: 70%;
            font-variant: small-caps
        }

        #lists {
            background-color: #303030 !important;
            border-style: none !important;
            border-radius: 20px !important;
        }

        a[class="blue hover button"], [class="blue hover button js-scroll"] {
            background-color: rgb(255, 120, 0);
            color: #000000;
        }

        .white {
            background-color: #202020 !important;
            color: azure !important;
        }

        .white:hover {
            background-color: #303030 !important;
            color: azure !important;
        }

        body>div:first-child {
            background-image:url("https://cdn.discordapp.com/attachments/1006030501561253899/1099649976633671781/squares5_1.png")
        }

        section[class="panel fade js-scroll-anim"] {
            background-color: #282828 !important;
            color: azure;
            border-style: none !important;
            border-radius: 15px;
            box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);

        }

        div[class="panel fade js-scroll-anim js-collapse"], [class="panel fade js-scroll-anim js-collapse active"] {
            background-color: #282828 !important;
            background: #282828 !important;
            color: azure;
            border-style: none !important;
            border-radius: 15px;
            box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);

        }

        p[class="info-yellow"] {
            font-family: montserrat, sans-serif;
            text-align: center;
            background: #353535;
            border-style: none !important;
            border-radius: 15px;
            padding: 5px 15px;
            color: #ffffff;
            margin: 25px 0;
            flex-grow: 1;
            box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);
        }

        .panel {
            background: #282828 !important;
            color: azure !important;
            border-style: none !important;
            border-radius: 15px;
            box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);

        }

        .arrow {
            color: #ffffff !important;
            opacity
        }

        .arrow:before, .arrow:after {
            position: absolute;
            content: "";
            display: inline-block;
            width: 12px;
            height: 3px;
            background-color: #fff;
            transition: .4s ease
        }

        .blue {
            background-color: rgb(255, 120, 0);
            color: #000000;
        }

        .blue.hover:not(.disabled):not([disabled]):hover, .blue.active {
            background-color: #076696;
            color: #fff
        }

        .blue.hover:not(.disabled):not([disabled]):active {
            background-color: #055075;
            color: #eee
        }

        tr {
            background: #252525;
        }

        tr:nth-child(even) {
            background: #232323;
        }

        a.link {
            color: rgb(255, 120, 0);
        }

        #history-table tr {
            background: rgb(32, 32, 32);
            color: azure;
        }

        #history-table tr.moved-up {
            background: #074d07;
            color: #dfd;
        }

        #history-table tr.moved-down {
            background: #4d0707;
            color: #fdd;
        }

        /* Front Page */

        .information-banner>* {
            background: #282828 !important;
            padding: 50px 20px;
            max-width: 1072px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 0 7px 5px #282828;
            color: azure;
        }

        .information-banner {
            background-color: rgba(0, 0, 0, 0);
            display: flex;
            justify-content: center;
            font-size: 110%
        }

        .information-stripe {
            background: rgb(255, 120, 0);
            text-align: center;
            color: #000000;
            font-weight: 700;
            position: relative
        }
        `;

        // Create a new style element with the dark mode CSS rules
        const styleElement=document.createElement('style');
        styleElement.innerHTML=darkModeCSS;

        // Add the style element to the document head
        document.head.appendChild(styleElement);
    }

)();
