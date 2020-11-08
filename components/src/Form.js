import React from 'react';

export default function Form(props) {
    const {
        values,
        onInputChange,
        onSubmit,
        disabled,
        errors,
        onCheckboxChange,
    } = props;

    return (
        <form onSubmit={onSubmit} className="container">
            <h2>New User</h2>
            <label>
                Name:&nbsp;
            <input
                    name="name"
                    type="type"
                    onChange={onInputChange}
                    value={values.name}
                />
            </label>

            <label>
                Email:&nbsp;
                <input
                    name="email"
                    type="email"
                    onChange={onInputChange}
                    value={values.email}
                />
            </label>

            <label>
                Password:&nbsp;
            <input
                    name="password"
                    type="password"
                    onChange={onInputChange}
                    value={values.password}
                />
            </label>

            <label className="checkbox">
                I accept the Terms of Service:&nbsp;
            <input
                    type="checkbox"
                    name="termsOfService"
                    checked={values.termsOfService}
                    onChange={onCheckboxChange}
                />
            </label>

            <button disabled={disabled}>Submit</button>
            <div className="errors">
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.termsOfService}</div>
            </div>
        </form>

    );
}
