import React from "react";
import { Field, reduxForm, change } from "redux-form";

const SimpleForm = (props) => {
  const { handleSubmit, change } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          お名前：
          <Field name="name" component="input" type="text" />
          <Field name="email" component="input" type="text" />
          <Field name="性別" component="select" type="select">
            <option value={0}>男性</option>
            <option value={1}>女性</option>
          </Field>
        </label>
      </div>
      <button type="submit">送信</button>
    </form>
  );
};

// このコンポーネントでRedux Formを使えるようにする
export default reduxForm({
  form: "sample-form",
})(SimpleForm);
