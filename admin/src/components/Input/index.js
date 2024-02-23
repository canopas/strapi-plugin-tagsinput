import TagsInput from "react-tagsinput";
import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/global.css";

import {
  Flex,
  Field,
  FieldHint,
  FieldError,
  FieldLabel,
} from "@strapi/design-system";
import { useIntl } from "react-intl";

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
  const [tags, setTags] = useState(() => {
    try {
      const values = JSON.parse(value);
      return values.map((value) => value.name);
    } catch (e) {
      return [];
    }
  });

  const handleTagsChange = (tags) => {
    setTags(tags);
    onChange({
      target: {
        name,
        value: JSON.stringify(tags.map((tag) => ({ name: tag }))),
        type: attribute.type,
      },
    });
  };

  return (
    <Field
      name={name}
      id={name}
      // GenericInput calls formatMessage and returns a string for the error
      error={error}
      hint={description && formatMessage(description)}
      required={required}>
      <Flex direction="column" alignItems="stretch" gap={1}>
        <FieldLabel action={labelAction}>{formatMessage(intlLabel)}</FieldLabel>
        <Flex>
          <TagsInput value={tags} onChange={handleTagsChange} />
        </Flex>
        <FieldHint />
        <FieldError />
      </Flex>
    </Field>
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
