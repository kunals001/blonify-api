
'use client';
import React, { useEffect } from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

interface Props {
  setcontent: string;
  onchange: (value: string) => void;
}

const SunEditorComponent: React.FC<Props> = ({ setcontent, onchange }) => {
  useEffect(() => {
    // You could preload content using setcontent if needed
  }, [setcontent]);

  return (
    <SunEditor

       setDefaultStyle="font-size: 1vw; line-height: 1.5; height: 16vw; border: 1px solid #ccc; padding: 10px; overflow-y: scroll;"
      setContents={setcontent}
      onChange={(content) => onchange(content)} // updates parent state
      setOptions={{
        buttonList: [
          ['undo', 'redo'],
          ['bold', 'underline', 'italic', 'strike'],
          ['fontSize', 'formatBlock'],
          ['align', 'list', 'link', 'image', 'video'],
          ['codeView', 'fullScreen']
        ]
      }}
    />
  );
};

export default SunEditorComponent;






