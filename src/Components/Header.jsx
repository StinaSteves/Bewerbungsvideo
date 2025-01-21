import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../public/images/imagesNeu/YoutubeSchwarz.png";
import "./Header.css";
import "./../App.css";

export default function Header() {
  return (
    <div className="headerContainer">
      <div className="box left">
        <div className="button">
          <FontAwesomeIcon icon={faBars}  size="1g"/>     
        </div>  
        <img src={Logo} alt="Logo" style={{ width: "140px", height: "50px" }} />      
      </div>
      <div className="box center">
        <div className="border stretch">
          <input type="text" placeholder="Suchen" className="searchField" />
          <span className="search">
          <svg className="icon " version="1.0" xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 300.000000 300.000000"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
>
<path d="M1249 2595 c-152 -29 -289 -89 -414 -182 -192 -143 -322 -335 -387
-571 -18 -64 -22 -105 -22 -247 -1 -147 2 -181 22 -255 100 -368 375 -642 744
-742 114 -31 365 -33 478 -4 152 39 278 101 416 204 l40 31 268 -260 268 -259
39 31 c21 17 42 36 46 42 4 7 -101 116 -263 274 -207 201 -267 265 -259 276
111 152 173 279 211 427 29 113 27 364 -4 477 -53 196 -134 336 -277 478 -133
134 -273 214 -460 265 -104 29 -333 36 -446 15z m409 -136 c164 -43 281 -109
405 -228 279 -268 352 -698 177 -1043 -206 -405 -686 -595 -1108 -438 -255 95
-452 296 -538 551 -127 374 -3 769 316 1012 109 82 282 152 415 167 98 12 243
2 333 -21z"/>
</g>
</svg>
          </span>
        </div>
        <div className="button microphone">
        <svg className="icon" version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="300.000000pt" height="300.000000pt" viewBox="0 0 300.000000 300.000000"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
>
<path d="M1420 2671 c-141 -45 -242 -160 -269 -306 -15 -79 -15 -901 0 -980
38 -207 242 -353 445 -318 136 23 241 101 297 221 l32 67 0 525 0 525 -29 57
c-38 76 -75 119 -138 161 -100 66 -226 84 -338 48z"/>
<path d="M715 1490 c-10 -11 -18 -33 -17 -49 1 -50 63 -263 98 -339 71 -155
207 -303 338 -367 66 -33 206 -75 248 -75 16 0 18 -9 18 -78 0 -44 3 -127 7
-185 l6 -107 126 0 c69 0 132 4 138 8 9 6 13 58 15 182 l3 173 65 13 c90 19
172 51 238 94 111 71 239 223 293 346 27 61 78 235 86 292 7 49 -14 82 -52 82
-44 0 -62 -30 -95 -154 -31 -117 -67 -206 -112 -269 -156 -224 -359 -309 -663
-278 -193 19 -285 60 -405 181 -106 106 -155 197 -202 382 -18 70 -41 137 -50
148 -23 26 -60 26 -83 0z"/>
</g>
</svg>
        </div>
      </div>
      <div className="box right">
        <div>
          <FontAwesomeIcon icon={faEllipsisVertical} className="icon" />
        </div>
        <div className="border">
          <div className="button signIn">
          <svg className="icon" version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="300.000000pt" height="300.000000pt" viewBox="0 0 300.000000 300.000000"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
>
<path d="M1295 2740 c-241 -48 -432 -150 -614 -325 -203 -196 -321 -437 -358
-731 -15 -114 -15 -148 -5 -243 62 -557 447 -981 987 -1087 119 -23 340 -23
450 0 258 54 475 174 650 357 222 234 335 517 335 839 0 521 -323 974 -820
1148 -179 63 -437 80 -625 42z m490 -109 c149 -38 291 -104 405 -190 371 -279
531 -746 408 -1191 -16 -60 -69 -195 -81 -206 -2 -2 -52 45 -112 104 -116 113
-171 147 -314 197 -268 94 -730 109 -1036 34 -206 -51 -295 -103 -467 -271
-27 -27 -51 -48 -53 -48 -8 0 -42 75 -63 140 -59 179 -69 408 -28 592 100 441
443 767 898 854 103 19 337 12 443 -15z m24 -1326 c189 -28 339 -80 446 -156
22 -16 78 -70 123 -119 l83 -90 -42 -57 c-59 -81 -171 -188 -264 -252 -94 -65
-247 -134 -358 -162 -106 -26 -324 -36 -437 -20 -220 33 -436 140 -603 300
-66 63 -167 189 -167 207 0 15 171 179 223 213 94 64 229 110 394 135 125 20
468 20 602 1z"/>
<path d="M1460 2380 c-376 -67 -521 -518 -252 -787 223 -224 613 -154 743 133
127 280 -48 606 -351 654 -72 11 -76 11 -140 0z m221 -132 c200 -92 272 -340
152 -521 -72 -109 -169 -160 -303 -161 -71 0 -94 4 -141 26 -241 112 -292 413
-99 591 80 74 142 97 250 94 67 -2 97 -8 141 -29z"/>
</g>
</svg>  <h3>Anmelden</h3>
          </div>
        </div>
      </div>
    </div>
  );
}