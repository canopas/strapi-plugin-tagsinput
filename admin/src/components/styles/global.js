import { createGlobalStyle, css } from "styled-components";

const light = css`
  :root {
    --primary: #7b79ff;
    --secondary: rgb(255, 255, 255);
    --text: #32324d;
    --input-background: #ffffff;
    --input-border: #dcdce4;
    --tag-background: #f0f0ff;
    --tag-text: #4945ff;
    --suggestion-background: #ffffff;
    --suggestion-hover: #f6f6f9;
  }
`;

const dark = css`
  :root {
    --primary: #7b79ff;
    --secondary: rgb(33, 33, 52);
    --text: #ffffff;
    --input-background: #181826;
    --input-border: #4a4a6a;
    --tag-background: #7b79ff;
    --tag-text: #ffffff;
    --suggestion-background: #181826;
    --suggestion-hover: #212134;
  }
`;

const styles = css`
  .react-tagsinput {
    width: 100%;
    border: 1px solid var(--input-border);
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
    border: 1px solid var(--tag-background);
    color: var(--tag-text);
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
    background-color: var(--suggestion-background);
  }

  .react-autosuggest__suggestions-container--open {
    border: 1px solid var(--input-border);
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
    background-color: var(--suggestion-hover);
  }
`;

export const getStyling = (theme) => {
  let themeStyle = light;

  switch (theme) {
    case 'dark':
      themeStyle = dark;
      break;
    default:
      themeStyle = light;
  }

  return createGlobalStyle`
    ${themeStyle}
    ${styles}
  `;
};
