import { useState } from "react";

export default function URLDisplay({ remixUrl }) {
  const [timeoutCopy, setTimeoutCopy] = useState(false);

  const copyToClipBoard = () => {
    setTimeoutCopy(true)
    navigator.clipboard.writeText(remixUrl);
    setTimeout(() => {
        setTimeoutCopy(false);
      }, 2000);
  };

  return (
    <div className="url-display-container">
      {timeoutCopy ? (
        <i
          class="fa-solid fa-copy fa-xs"
          data-title="Copied"
        ></i>
      ) : (
        <i
          class="fa-solid fa-copy fa-xs"
          data-title="Click To Copy"
          onClick={() => copyToClipBoard()}
        ></i>
      )}

      <div className="url-text-container">
        <p className="url-text">{remixUrl}</p>
        {console.log("url", remixUrl)}
      </div>
    </div>
  );
}
