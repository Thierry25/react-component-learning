import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { patchTodo, retrieveTodo } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Todo = () => {
  const username = useAuth().username;
  const { id } = useParams();

  const [currentTodo, setCurrentTodo] = useState({
    description: "",
    targetDate: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    retrieveTodo(username, id)
      .then((response) => {
        const val = response.data;
        setCurrentTodo({
          description: val.description,
          targetDate: val.targetDate,
        });
      })
      .catch((err) => console.log(err));
  }, [username, id]);

  const onSubmit = function (values) {
    patchTodo(username, id, values)
      .then((response) => navigate("/todos"))
      .catch((err) => console.log(err));
  };

  const validate = (values) => {
    const errors = {
      // description: "Enter a valid desc",
    };

    if (values.description.length < 5) {
      errors.description = "Description should be at least 5 characters";
    }
    if (!values.targetDate) {
      errors.targetDate = "Enter a target Date";
    }

    return errors;
  };

  return (
    <div className="container">
      <h1>Enter Todo Details</h1>
      <Formik
        initialValues={{
          description: currentTodo.description,
          targetDate: currentTodo.targetDate,
        }}
        enableReinitialize={true}
        onSubmit={onSubmit}
        validate={validate}
      >
        {(props) => {
          return (
            <Form className="form-group">
              <ErrorMessage
                name="description"
                component="div"
                className="alert alert-danger"
              />
              <ErrorMessage
                name="targetDate"
                component="div"
                className="alert alert-danger"
              />
              <fieldset>
                <label>Description</label>
                <Field
                  type="text"
                  className="form-control"
                  name="description"
                />
              </fieldset>

              <fieldset>
                <label>Target Date</label>
                <Field type="date" className="form-control" name="targetDate" />
              </fieldset>

              <div>
                <button className="btn btn-success m-2" type="submit">
                  Update
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Todo;
