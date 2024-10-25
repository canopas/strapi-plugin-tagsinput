import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Flex, Field } from "@strapi/design-system";
import { useIntl } from "react-intl";
import TagsInput from "react-tagsinput";
import Autosuggest from "react-autosuggest";
import { css } from "./styles/global.ts";

const Tags = ({
  attribute,
  description,
  error,
  intlLabel,
  labelAction,
  name,
  onChange,
  required,
  value,
}) => {
  const { formatMessage } = useIntl();
  const apiUrl = attribute?.options?.apiUrl || "";
  const attrName = apiUrl.slice(apiUrl.lastIndexOf("=") + 1) || "name";
  const inputEle = useRef(null);

  const [tags, setTags] = useState(() => {
    try {
      const values = typeof value === "string" ? JSON.parse(value) : value;
      return values.map((value) => value[attrName] || value["name"]);
    } catch (e) {
      return [];
    }
  });

  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestionsContainer = document.querySelector(
      ".react-autosuggest__suggestions-container"
    );
    if (suggestionsContainer && inputEle.current) {
      suggestionsContainer.style.top = `${inputEle.current.offsetHeight + 5}px`;
    }

    const handleClickOutside = (event) => {
      const tagsInput = document.querySelector(".react-tagsinput");
      if (tagsInput) {
        tagsInput.classList.toggle(
          "react-tagsinput--focused",
          inputEle.current?.contains(event.target)
        );
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleTagsChange = (newTags) => {
    setTags(newTags);
    onChange({
      target: {
        name,
        value: JSON.stringify(newTags.map((tag) => ({ [attrName]: tag }))),
        type: attribute.type,
      },
    });
  };

  const getSuggestions = async () => {
    if (!apiUrl) return;
    try {
      const res = await axios.get(apiUrl);
      setSuggestions(res.data);
    } catch (err) {
      console.error("Error fetching suggestions:", err);
    }
  };

  const autocompleteRenderInput = (props) => {
    const handleOnChange = (e, { newValue, method }) => {
      if (method === "enter") {
        e.preventDefault();
      } else {
        props.onChange(e);
      }
    };

    const inputValue = (props.value && props.value.trim()) || "";
    const inputLength = inputValue.length;

    let s = suggestions.data ? suggestions.data : suggestions;
    if (suggestions <= 0) {
      getSuggestions();
    }

    if (inputLength > 0) {
      s = s
        .map((state) => {
          const suggestionName = state.attributes ? state.attributes[attrName] : state[attrName];

          if (suggestionName.toLowerCase().slice(0, inputLength) === inputValue.toLowerCase()) {
            let suggObj = { id: state.id };
            suggObj[attrName] = suggestionName;
            return suggObj;
          }
          return null;
        })
        .filter((ele) => ele !== null || ele != undefined);
    }

    return (
      <Autosuggest
        ref={props.ref}
        suggestions={s}
        shouldRenderSuggestions={(value) => value && value.trim().length > 0}
        getSuggestionValue={(s) => s[attrName]}
        renderSuggestion={(s) => <span>{s[attrName]}</span>}
        inputProps={{ ...props, onChange: handleOnChange }}
        onSuggestionSelected={(_, { suggestion }) => props.addTag(suggestion[attrName])}
        onSuggestionsFetchRequested={() => {}}
      />
    );
  };

  return (
    <>
      <style>{css}</style>
      <Field.Root
        name={name}
        id={name}
        // GenericInput calls formatMessage and returns a string for the error
        error={error}
        hint={description && formatMessage({ id: description })}
        required={required}
      >
        <Flex
          direction="column"
          alignItems="stretch"
          gap={1}
          style={{ position: "relative" }}
          ref={inputEle}
        >
          <Field.Label action={labelAction}>
            {intlLabel && formatMessage({ id: intlLabel })}
          </Field.Label>
          <Flex direction="column">
            <TagsInput
              value={tags}
              onChange={handleTagsChange}
              onlyUnique
              renderInput={autocompleteRenderInput}
            />
          </Flex>
          <Field.Hint />
          <Field.Error />
        </Flex>
      </Field.Root>
    </>
  );
};

Tags.defaultProps = {
  description: null,
  disabled: false,
  error: null,
  labelAction: null,
  required: false,
  value: "",
};

Tags.propTypes = {
  intlLabel: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  attribute: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.object,
  error: PropTypes.string,
  labelAction: PropTypes.object,
  required: PropTypes.bool,
  value: PropTypes.string,
};

export default Tags;
