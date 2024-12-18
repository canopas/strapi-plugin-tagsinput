export const css = `
:root {
  --primary: rgb(151, 54, 232);
  --secondary: rgb(255, 255, 255);
}

.react-tagsinput {
  width: 100%;
  background-color: var(--secondary);
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  padding-left: 5px;
  padding-top: 5px;
}

.react-tagsinput--focused {
  outline: 3px solid var(--primary);
}

.react-tagsinput-tag {
  background-color: var(--primary);
  border-radius: 2px;
  border: 1px solid var(--primary);
  color: var(--secondary);
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
  color: #777;
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
  background-color: #fff;
}

.react-autosuggest__suggestions-container--open {
  border: 1px solid #aaa;
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
  background-color: #ccc;
}
`;
