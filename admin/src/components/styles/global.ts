export const css = (theme: "light" | "dark") => `
:root {
  --primary: ${theme === "light" ? "#4945ff" : "#7b79ff"};
  --secondary: ${theme === "light" ? "#FFFFFF" : "#212134"};
  --border: ${theme === "light" ? "#e0e0e0" : "#4a4a6a"};
  --background: ${theme === "light" ? "#F7FAFC" : "#212134"};
  --text: ${theme === "light" ? "#4A5568" : "#fff"};
}

.react-tagsinput {
  width: 100%;
  background-color: var(--background);
  border: 1px solid var(--border);
  border-radius: 4px;
  overflow: hidden;
  padding-left: 5px;
  padding-top: 5px;
}

.react-tagsinput--focused {
  outline: 3px solid var(--primary);
}

.react-tagsinput-tag {
  background-color: var(--tag-background);
  border-radius: 2px;
  color: #fff;
  display: inline-block;
  font-family: sans-serif;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 5px;
  margin-right: 5px;
  padding: 5px;
}

.react-tagsinput-remove {
  cursor: pointer;
  font-weight: bold;
}

.react-tagsinput-tag a::before {
  content: " ×";
}

.react-tagsinput-input {
  background: transparent;
  border: 0;
  color: var(--text);
  font-family: sans-serif;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 6px;
  margin-top: 1px;
  outline: none;
  padding: 5px;
  width: 100%;
}

.react-tagsinput > span {
  display: flex;
  flex-flow: wrap;
}

.react-autosuggest__container {
  display: flex;
  flex-direction: column;
  flex: auto;
}

.react-autosuggest__suggestions-container {
  position: absolute;
  z-index: 200;
  width: 280px;
  margin: 0;
  padding: 0;
  list-style-type: none;
  background-color: var(--background);
}

.react-autosuggest__suggestions-container--open {
  border: 1px solid var(--primary);
}

.react-autosuggest__suggestion {
  cursor: pointer;
  padding: 10px 20px;
}

.react-autosuggest__suggestion > span {
  font-size: 13px;
  font-weight: 400;
}

.react-autosuggest__suggestion--highlighted,
.react-autosuggest__suggestion--focused {
  background-color: var(--primary);
}
`;
