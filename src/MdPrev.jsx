import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const prevState = `
# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... **_both!_**

There's also [links](https://www.google.com), and
> Block Quotes!

![Google Logo](	https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png)

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.
`;

const MdPrev = () => {
  const [state, setState] = useState(prevState);
  const handleChange = (event) => {
    setState(event.target.value);
  };
  return (
    <div id="container" className="container-fluid">
      <div className="editor">
        <span className="toolbar">Editor</span>
        <textarea id="editor" onChange={handleChange}>
          {state}
        </textarea>
      </div>
      <div className="preview">
        <span className="toolbar">Previewer</span>
        <div id="preview">
          <ReactMarkdown>{state}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default MdPrev;
