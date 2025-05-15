'use client';

import React, { useState } from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

const SunEditorComponent = () => {
  const [content, setContent] = useState('');

  return (
    <div>
      <h2>Editor</h2>
      <SunEditor
        setDefaultStyle="font-size: 1vw; line-height: 1.5; height: 16vw; border: 1px solid #ccc; padding: 10px; overflow-y: scroll;"
        setContents={content}
        onChange={setContent}
        setOptions={{
          buttonList: [
            ['undo', 'redo'],
            ['formatBlock', 'bold', 'italic', 'underline'],
            ['link', 'image'],
          ],
        }}
      />
    </div>
  );
};

export default SunEditorComponent;
