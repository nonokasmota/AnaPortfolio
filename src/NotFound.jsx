import React, { useEffect } from 'react';

function NotFound() {
  useEffect(() => {
    window.location.href = "https://nonokasmota.github.io/AnaPortfolio";
  }, []);

  return (
    <div class="container404">
        <h1>404</h1>
        <p>Redirecting you to the homepage...</p>
        <p>If you are not redirected, click <a href="https://nonokasmota.github.io/AnaPortfolio">here</a>.</p>
        <p>Ahem... 😅 This is my first time using react, so please be patient. If you know how to fix this issue please let me know! ✨</p>
    </div>
  );
}

export default NotFound;