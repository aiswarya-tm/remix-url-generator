import { useState } from "react";
import { getURL } from "../../utils/urlGenerator";
import URLDisplay from "../urlDisplay";

export default function CodeArea() {
  const [editContent, setEditContent] = useState('');
  const [remixUrl, setRemixUrl] = useState('');

  const reset = () => {
    setEditContent('');
    setRemixUrl('');
  };

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    if(editContent?.length>0)
        setRemixUrl(getURL(editContent));


  }

  return (
    <div className="form-contianer">
      <form method="edit" onSubmit={handleSubmit}>
        <label className="label-container">
          <textarea
            className="text-area"
            name="codeContent"
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            rows={16}
            cols={200}
          />
        </label>
        <div className="button-container">
          <button onClick={() => reset()} data="Clear Area"></button>
          <button type="submit" data="Generate URL"></button>
        </div>

        {(remixUrl?.length>0) ? <URLDisplay remixUrl={remixUrl}/>: <></>}
      </form>
    </div>
  );
}
