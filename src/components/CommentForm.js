import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";

import FormField from "components/FormField";
import { closeCommentsModal } from "store/slices/view";
import { addComment } from "store/slices/comment";

const UserCommentSchema = Yup.object().shape({
  name: Yup.string().min(2).max(50).required("Required"),
  email: Yup.string().email(),
  comment: Yup.string().min(2).required("Required"),
});

const useStyles = makeStyles((theme) => ({
  formContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "start",
    flexDirection: "column",
    padding: "12px 24px",
    "& > *": {
      margin: "8px 0",
    },
  },
}));

const CommentFormFields = {
  name: {
    label: "Name",
    fieldType: "text",
  },
  comment: {
    label: "Comment",
    fieldType: "text",
    multiline: true,
  },
};

const CommentForm = () => {
  const [userComment] = useState({ name: "", comment: "" });
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleCloseModal = () => dispatch(closeCommentsModal());
  const handleFormSubmit = (values, actions) => {
    dispatch(addComment(values));
    handleCloseModal();
  };

  return (
    <>
      <Formik
        initialValues={userComment}
        validationSchema={UserCommentSchema}
        onSubmit={handleFormSubmit}
        validateOnBlur
      >
        {(formikProps) => (
          <Form className={classes.formContainer}>
            <div>
              <h3>Leave a comment</h3>
            </div>
            {Object.keys(userComment).map((key, index) => (
              <FormControl key={index} error={formikProps.errors?.[key]}>
                <FormField
                  id={key}
                  label={CommentFormFields?.[key]?.label}
                  value={formikProps.values[key]}
                  onChange={formikProps.handleChange}
                  type={CommentFormFields?.[key]?.fieldType}
                  multiline={CommentFormFields?.[key]?.multiline}
                />
                <FormHelperText>{formikProps.errors[key]}</FormHelperText>
              </FormControl>
            ))}
            <Button variant="contained" type="submit" color="primary">
              Post Comment
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CommentForm;
