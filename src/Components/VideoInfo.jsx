import React from "react";

import Foto from "/images/Stina.png";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

import "./../App.css";
import "./VideoInfo.css";

export default function VideoInfo() {
  const handleSubscribeClick = () => {
    const email = "stina.steves@gmx.de"; 
    const subject = "Dein Bewerbungsvideo"; 
    const body = `Hallo Stina,\n\n unsere Meinung zu deinem Bewerbungsvideo ist: \nPro: \n\nKontra: \n`; 


    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="imageContainer">
      <h1>Bewerbungsvideo Stina Steves 2025</h1>
      <div className="aboWrapper">
   
        <div className="profileSection">
          <img src={Foto} alt="Bewerbung Stina Steves" />
          <div className="textSection">
            <h2>Stina.Steves</h2>
            <p>15 Abonnenten</p>
          </div>
          <button className="subscribeButton" onClick={handleSubscribeClick}>
            Abonnieren
          </button>
        </div>


        <div className="buttonWrapper">
          <div className="likeIconContainer">
            <button className="likeButtonUp">
            <svg className="icon" version="1.0" xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 300.000000 300.000000"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)">
<path d="M1740 2550 c-69 -32 -286 -258 -559 -582 l-242 -288 -282 -2 -282 -3
-3 -612 c-2 -576 -1 -612 15 -617 10 -2 448 -6 973 -8 l955 -3 44 25 c52 30
65 53 124 235 106 326 137 454 137 574 0 170 -77 299 -212 355 -77 32 -134 38
-367 37 -206 -2 -233 0 -227 14 3 8 26 78 51 155 74 224 106 362 112 480 5 94
3 111 -17 157 -31 73 -59 96 -122 100 -39 3 -65 -2 -98 -17z m116 -101 c16
-18 19 -36 19 -113 -1 -109 -21 -198 -106 -466 -87 -276 -88 -279 -61 -301 21
-16 42 -17 285 -12 252 6 267 5 336 -16 91 -28 150 -81 172 -156 18 -65 16
-191 -5 -285 -40 -177 -158 -529 -183 -548 -13 -9 -135 -12 -527 -12 -281 0
-575 3 -653 7 l-143 6 1 516 0 516 250 295 c257 303 471 533 530 569 43 26 61
26 85 0z m-966 -1389 l0 -510 -210 0 -210 0 0 510 0 510 210 0 210 0 0 -510z"/>
</g>
</svg>{" "}
              754
            </button>
            <button className="likeButtonDown">
              <div className="vertical-line"></div>
              <svg className="icon" version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="300.000000pt" height="300.000000pt" viewBox="0 0 300.000000 300.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
>
<path d="M643 2541 c-55 -26 -74 -57 -127 -221 -129 -392 -158 -530 -136 -665
21 -129 78 -213 179 -265 91 -45 153 -53 399 -51 122 1 222 -2 222 -6 0 -4
-18 -64 -40 -133 -60 -183 -109 -378 -119 -473 -21 -190 35 -307 148 -307 116
0 222 101 659 628 l227 272 282 0 283 0 0 609 c0 336 -3 612 -7 614 -5 3 -440
8 -968 11 -942 7 -961 6 -1002 -13z m1040 -91 l317 0 0 -517 0 -518 -258 -310
c-355 -426 -509 -585 -568 -585 -54 0 -70 128 -35 296 10 50 51 196 91 326 76
247 80 276 38 295 -15 6 -113 8 -273 5 -209 -4 -260 -2 -313 12 -145 37 -202
117 -202 285 0 115 37 264 142 576 36 108 50 132 80 139 13 3 167 3 343 0 176
-2 463 -4 638 -4z m835 -517 l2 -513 -210 0 -210 0 0 515 0 515 208 -2 207 -3
3 -512z"/>
</g>
</svg>
            </button>
          </div>
          <div className="actionButtonContainer">
            <button className="shareButton">
            <svg className="icon"  version="1.0" xmlns="http://www.w3.org/2000/svg"
 viewBox="0 0 300.000000 300.000000"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
>
<path d="M1776 2558 c-3 -51 -9 -230 -13 -397 l-8 -305 -115 -17 c-269 -39
-450 -106 -650 -237 -115 -76 -278 -241 -362 -368 -62 -92 -174 -312 -232
-452 -47 -118 -110 -362 -92 -362 3 0 36 46 75 102 103 152 171 222 291 300
328 214 672 328 992 328 l130 0 -6 -387 -7 -388 47 50 c41 43 848 988 912
1067 21 25 22 31 10 46 -7 9 -83 98 -168 197 -86 99 -239 277 -341 395 -381
444 -426 495 -441 508 -14 11 -17 3 -22 -80z m512 -642 c182 -212 332 -391
332 -396 0 -5 -40 -56 -88 -112 -85 -100 -157 -185 -482 -566 l-155 -182 -5
280 c-3 191 -9 283 -16 291 -18 17 -169 31 -274 24 -330 -22 -634 -125 -946
-321 -48 -30 -90 -52 -93 -49 -10 11 107 230 169 317 149 208 353 366 587 454
97 37 250 71 388 88 96 12 123 19 136 34 16 21 28 226 29 501 l1 116 42 -46
c23 -25 192 -220 375 -433z"/>
</g>
</svg>
{" "}
              Teilen
            </button>
            <button className="bookmarkButton">
            <svg className="icon" version="1.0" xmlns="http://www.w3.org/2000/svg"
 viewBox="0 0 300.000000 300.000000"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
>
<path d="M664 2575 c-8 -19 3 -2225 10 -2233 6 -5 82 48 311 218 250 185 458
338 506 373 l39 28 412 -294 c227 -162 425 -302 441 -312 l27 -17 0 103 c1
339 -24 2125 -29 2131 -3 3 -390 10 -858 14 -813 6 -853 6 -859 -11z m1612
-100 c8 -2 13 -217 18 -727 3 -397 9 -833 13 -967 4 -178 3 -243 -5 -240 -6 2
-179 123 -383 269 -205 146 -379 266 -388 268 -9 1 -182 -121 -386 -272 -203
-151 -371 -273 -372 -272 -1 1 -6 1938 -4 1947 1 6 1488 0 1507 -6z"/>
</g>
</svg>{" "}
              Speichern
            </button>
            <button className="ellipsisButton">
              <FontAwesomeIcon icon={faEllipsis} size="2x" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}