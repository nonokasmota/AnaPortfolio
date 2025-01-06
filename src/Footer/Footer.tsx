import { useRef } from "react";

import React from 'react';
import './Footer.css';
const Footer: React.FC = () => {
  const ref = useRef(null);
    const scrollToComponent = (ref: any) => {
      window.scrollTo({
        top: 0, 
        behavior: "smooth"
      });
    };


  return (
    <div className='Footer'>
      <div className='Black'>
        <div id='FooterStuff'>
          <p>Thank you for visiting my portfolio!</p>
          <p className="italic nomargintop">Let's connect:</p>
          <div className="Socials">
            <a href='https://www.behance.net/nm230' target="_blank" className="FooterSvg">
            <svg width="524" height="524" viewBox="0 0 524 524" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M347.899 355.692C334.073 355.692 322.132 352.819 312.076 347.073C302.081 341.267 294.389 333.067 289.002 322.473C283.615 311.819 280.922 299.279 280.922 284.854C280.922 270.669 283.615 258.219 289.002 247.505C294.449 236.731 302.051 228.351 311.807 222.366C321.563 216.32 333.025 213.298 346.193 213.298C354.693 213.298 362.713 214.674 370.255 217.428C377.857 220.121 384.56 224.311 390.366 229.997C396.232 235.683 400.841 242.926 404.193 251.725C407.545 260.463 409.22 270.878 409.22 282.969V292.934H313.159C313.254 300.61 314.719 307.224 317.553 312.776C320.486 318.463 324.586 322.832 329.853 325.885C335.12 328.877 341.285 330.374 348.348 330.374C353.077 330.374 357.356 329.715 361.187 328.398C365.018 327.022 368.34 325.017 371.153 322.383C373.966 319.749 376.091 316.487 377.527 312.597L407.874 316.008C405.958 324.029 402.307 331.032 396.92 337.017C391.593 342.943 384.77 347.552 376.45 350.844C368.13 354.076 358.613 355.692 347.899 355.692ZM317.373 256.034C314.917 260.627 313.532 265.625 313.22 271.028H378.066C378.006 264.803 376.659 259.266 374.026 254.418C371.392 249.51 367.711 245.649 362.983 242.836C358.314 240.023 352.867 238.616 346.642 238.616C339.998 238.616 334.163 240.232 329.135 243.465C324.107 246.637 320.187 250.827 317.373 256.034Z" fill="#ADA0A8"/>
              <path d="M388.481 169.125V188.967H302.11V169.125H388.481Z" fill="#ADA0A8"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M122.119 169.125V352.999H196.548C210.614 352.999 222.286 350.814 231.563 346.445C240.841 342.075 247.784 336.12 252.393 328.578C257.002 320.976 259.306 312.417 259.306 302.9C259.306 293.563 257.391 285.602 253.56 279.018C249.729 272.434 244.791 267.347 238.746 263.755C232.761 260.104 226.506 258.099 219.982 257.74V255.944C225.967 254.508 231.384 252.143 236.232 248.851C241.08 245.559 244.941 241.28 247.814 236.013C250.687 230.686 252.124 224.281 252.124 216.799C252.124 207.701 249.909 199.561 245.48 192.379C241.11 185.196 234.496 179.54 225.638 175.41C216.839 171.22 205.796 169.125 192.508 169.125H122.119ZM191.251 325.166H155.428V271.297H192.149C199.032 271.297 204.958 272.584 209.926 275.158C214.894 277.672 218.725 281.143 221.418 285.572C224.112 289.942 225.458 294.85 225.458 300.297C225.458 307.599 222.765 313.584 217.378 318.253C212.051 322.862 203.342 325.166 191.251 325.166ZM188.378 247.325H155.428V196.598H189.097C198.913 196.598 206.305 198.903 211.273 203.512C216.301 208.12 218.814 213.986 218.814 221.109C218.814 226.496 217.468 231.164 214.774 235.115C212.141 239.005 208.519 242.028 203.911 244.183C199.302 246.278 194.124 247.325 188.378 247.325Z" fill="#ADA0A8"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M80 0H444C488.183 0 524 35.8172 524 80V444C524 488.183 488.183 524 444 524H80C35.8172 524 0 488.183 0 444V80C0 35.8172 35.8172 0 80 0ZM80 25C49.6243 25 25 49.6243 25 80V444C25 474.376 49.6243 499 80 499H444C474.376 499 499 474.376 499 444V80C499 49.6243 474.376 25 444 25H80Z" fill="#ADA0A8"/>
            </svg>
            </a>
            <a href='https://www.instagram.com/nonokasmota/' target="_blank" className="FooterSvg">
            <svg width="524" height="524" viewBox="0 0 524 524" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M399.265 262.001C399.265 337.81 337.81 399.265 262.001 399.265C186.193 399.265 124.738 337.81 124.738 262.001C124.738 186.193 186.193 124.738 262.001 124.738C337.81 124.738 399.265 186.193 399.265 262.001ZM262.001 374.265C324.003 374.265 374.265 324.003 374.265 262.001C374.265 200 324.003 149.738 262.001 149.738C200 149.738 149.738 200 149.738 262.001C149.738 324.003 200 374.265 262.001 374.265Z" fill="#ADA0A8"/>
              <path d="M403.798 141.244C418.932 141.244 431.201 128.975 431.201 113.841C431.201 98.7063 418.932 86.4375 403.798 86.4375C388.663 86.4375 376.395 98.7063 376.395 113.841C376.395 128.975 388.663 141.244 403.798 141.244Z" fill="#ADA0A8"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M132.12 519.756C97.9616 515.38 69.7883 506.133 46.9721 485.012C44.2093 482.454 41.5462 479.791 38.9885 477.028C17.8669 454.212 8.62014 426.038 4.24444 391.88C-0.000926971 358.738 -0.000509211 316.64 1.14953e-05 263.767V260.233C-0.000509211 207.36 -0.000926971 165.262 4.24444 132.12C8.62014 97.9616 17.8669 69.7883 38.9885 46.9721C41.5462 44.2093 44.2093 41.5462 46.9721 38.9885C69.7883 17.8669 97.9616 8.62014 132.12 4.24444C165.262 -0.000926971 207.36 -0.000509211 260.233 1.14953e-05H263.767C316.64 -0.000509211 358.738 -0.000926971 391.88 4.24444C426.038 8.62014 454.212 17.8669 477.028 38.9885C479.791 41.5462 482.454 44.2093 485.012 46.9721C506.133 69.7883 515.38 97.9616 519.756 132.12C524.001 165.261 524 207.359 524 260.23V263.77C524 316.641 524.001 358.739 519.756 391.88C515.38 426.038 506.133 454.212 485.012 477.028C482.454 479.791 479.791 482.454 477.028 485.012C454.212 506.133 426.038 515.38 391.88 519.756C358.739 524.001 316.641 524 263.77 524H260.23C207.359 524 165.261 524.001 132.12 519.756ZM57.3344 63.9554C25 98.8839 25 153.256 25 262C25 370.744 25 425.116 57.3344 460.045C59.4555 462.336 61.6641 464.545 63.9554 466.666C98.8839 499 153.256 499 262 499C370.744 499 425.116 499 460.045 466.666C462.336 464.545 464.545 462.336 466.666 460.045C499 425.116 499 370.744 499 262C499 153.256 499 98.8839 466.666 63.9554C464.545 61.6641 462.336 59.4555 460.045 57.3344C425.116 25 370.744 25 262 25C153.256 25 98.8839 25 63.9554 57.3344C61.6641 59.4555 59.4555 61.6641 57.3344 63.9554Z" fill="#ADA0A8"/>
            </svg>
            </a>
            <a href='https://unsplash.com/@nonokasmota' target="_blank" className="FooterSvg">
            <svg width="521" height="524" viewBox="0 0 521 524" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M375.432 0H145.029V174.418H375.432V0ZM170.029 149.418V25H350.432V149.418H170.029Z" fill="#ADA0A8"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M184.796 216.344H0V524H520.463V216.344H335.666V350.34H184.796V216.344ZM159.796 375.34H360.666V241.344H495.463V499H25V241.344H159.796V375.34Z" fill="#ADA0A8"/>
            </svg>
            </a>
            <a href='https://www.linkedin.com/in/ana-mota-76b39331a/' target="_blank" className="FooterSvg">
            <svg width="524" height="524" viewBox="0 0 524 524" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M267.128 272.198V353.002H234.627V215.096H265.692V238.53H267.308C270.48 230.808 275.538 224.673 282.481 220.124C289.484 215.575 298.133 213.301 308.428 213.301C317.945 213.301 326.235 215.336 333.297 219.406C340.42 223.476 345.927 229.372 349.817 237.093C353.768 244.814 355.713 254.182 355.653 265.195V353.002H323.152V270.223C323.152 261.005 320.758 253.792 315.969 248.585C311.241 243.378 304.687 240.774 296.307 240.774C290.621 240.774 285.563 242.031 281.134 244.545C276.765 246.999 273.323 250.56 270.809 255.229C268.355 259.898 267.128 265.554 267.128 272.198Z" fill="#ADA0A8"/>
              <path d="M168.705 215.095V353H201.206V215.095H168.705Z" fill="#ADA0A8"/>
              <path d="M171.758 190.405C175.469 193.817 179.898 195.523 185.046 195.523C190.253 195.523 194.682 193.817 198.333 190.405C202.044 186.933 203.9 182.774 203.9 177.925C203.9 173.017 202.044 168.857 198.333 165.446C194.682 161.974 190.253 160.238 185.046 160.238C179.898 160.238 175.469 161.974 171.758 165.446C168.047 168.857 166.191 173.017 166.191 177.925C166.191 182.774 168.047 186.933 171.758 190.405Z" fill="#ADA0A8"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M131 0H393C465.349 0 524 58.6507 524 131V393C524 465.349 465.349 524 393 524H131C58.6507 524 0 465.349 0 393V131C0 58.6507 58.6507 0 131 0ZM131 25C72.4578 25 25 72.4578 25 131V393C25 451.542 72.4578 499 131 499H393C451.542 499 499 451.542 499 393V131C499 72.4578 451.542 25 393 25H131Z" fill="#ADA0A8"/>
            </svg>
            </a>
            <a href='mailto:nonokasmota@gmail.com?subject=Hello' className="FooterSvg">
            <svg width="524" height="524" viewBox="0 0 524 524" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M524 80C524 35.8172 488.183 0 444 0H80C35.8172 0 0 35.8172 0 80V444C0 488.183 35.8172 524 80 524H444C488.183 524 524 488.183 524 444V80ZM499 169V80C499 49.6243 474.376 25 444 25H80C49.6243 25 25 49.6243 25 80V169L231.226 308.224C249.821 320.778 274.179 320.778 292.774 308.224L499 169ZM25 199.164L217.237 328.944C244.286 347.205 279.714 347.205 306.763 328.944L499 199.164V444C499 474.376 474.376 499 444 499H80C49.6243 499 25 474.376 25 444V199.164Z" fill="#ADA0A8"/>
            </svg>
            </a>
          </div>
        </div>
        <button onClick={() => scrollToComponent(ref)} id='scrollButtonTop'>to top ↗</button>
      </div>
    </div>
  );
};

export default Footer;