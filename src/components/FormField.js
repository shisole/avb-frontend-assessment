import react from "react";
import PropTypes from "prop-types";

import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

const FormField = ({
  id = "defaultId",
  multiline = false,
  label,
  type,
  ...rest
}) => {
  return (
    <>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input
        id={id}
        {...rest}
        multiline={multiline}
        rows={multiline ? 4 : undefined}
      />
    </>
  );
};

FormField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  multiline: PropTypes.bool,
  type: PropTypes.oneOfType(["text", "radio", "select"]),
};

export default FormField;
