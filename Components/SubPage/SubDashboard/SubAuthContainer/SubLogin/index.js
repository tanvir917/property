import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react';
import SubAuthContainer from '../..';

const SubLogin = () => {

    const validate = (values) => {
        const errors = {};

        if (!values.email) {
            errors.email = "Required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
            errors.email = "Invalid email address";
        }

        if (!values.password) {
            errors.password = "Password required";
        } else if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
                values.password
            )
        ) {
            errors.password =
                "Password must be at least 8 character, a capital & a small letter, a number & a special character required!";
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            resetForm({});
        },
    });
    return (
        <SubAuthContainer>
            <h2 className="uppercase text-center font-bold text-2xl my-3">
                Log In
            </h2>
            <form onSubmit={formik.handleSubmit} >
                <div className="w-full mb-2 p-2">
                    <label
                        className="block text-secondary text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="text"
                        placeholder="john.doe@gmail.com"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div className="text-md text-red-500 mt-2 ml-1">
                            {formik.errors.email}
                        </div>
                    )}
                </div>

                <div className="w-full mb-2 p-2">
                    <label
                        className="block text-secondary text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Enter your password here"
                        autoComplete="off"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.password && formik.errors.password && (
                        <div className="text-md text-red-500 mt-2 ml-1">
                            {formik.errors.password}
                        </div>
                    )}
                </div>

                <div className="w-full mb-2 p-2  text-right">
                    <a href="#" className="inline-block font-bold">
                        Forget Password
                    </a>
                </div>

                <div className="w-full mb-2 p-2">
                    <button
                        type="submit"
                        className="w-full bg-primary text-white rounded py-2"
                    >
                        Submit
                    </button>
                </div>

                <div className="w-full mb-2 p-2 text-center">
                    <p className="font-bold">
                        Don't have an account?
                        <Link href="/dashboard/signup">
                            <a  className="text-primary inline-block ml-2">
                                Sign up
                            </a>
                        </Link>
                    </p>
                </div>
            </form>
        </SubAuthContainer>
    );
};

export default SubLogin;