import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react';
import SubAuthContainer from '../..';

const SubSignUp = () => {
    const validate = values => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.firstName) {
            errors.firstName = 'First name required';
        }

        if (!values.lastName) {
            errors.lastName = 'Last name required';
        }

        if (!values.accountType) {
            errors.accountType = 'Account type required';
        }

        if (!values.password) {
            errors.password = 'Password required';
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(values.password)) {
            errors.password = 'Password must be at least 8 character, a capital & a small letter, a number & a special character required!'
        }

        if (values.isAgree === false) {
            errors.isAgree = 'You must agree';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            firstName: '',
            lastName: '',
            accountType: '',
            password: '',
            isAgree: false
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            resetForm({});
        },
    });
    return (
        <SubAuthContainer>
            <h2 className="uppercase text-center font-bold text-xl my-5">Create an account</h2>

            <form onSubmit={formik.handleSubmit}>
                <div className="w-full p-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.email && formik.errors.email &&
                        <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.email}</div>
                    }
                </div>

                <div className="flex">
                    <div className="w-1/2 p-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                            First Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="firstName"
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {
                            formik.touched.firstName && formik.errors.firstName &&
                            <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.firstName}</div>
                        }
                    </div>
                    <div className="w-1/2 p-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                            Last Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="lastName"
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {
                            formik.touched.lastName && formik.errors.lastName &&
                            <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.lastName}</div>
                        }
                    </div>
                </div>

                <div className="w-full p-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="accountType">
                        Account Type
                    </label>
                    <select
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="accountType"
                        placeholder="Acount Type"
                        name="accountType"
                        onChange={(e) => formik.setFieldValue("accountType", e.target.value)}
                    >
                        <option value="">Select a type</option>
                        <option value="buyer">Buyer</option>
                        <option value="seller">Seller</option>
                    </select>
                    {
                        formik.errors.accountType &&
                        <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.accountType}</div>
                    }
                </div>

                <div className="w-full p-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.password && formik.errors.password &&
                        <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.password}</div>
                    }
                </div>

                <div className="p-2">
                    <label className=" block text-gray-500 font-bold">
                        <input
                            className="mr-2 leading-tight"
                            type="checkbox"
                            name="isAgree"
                            checked={formik.values.isAgree}
                            onChange={formik.handleChange} />
                        <span className="text-sm">
                            I agree to Rent-To-Own privacy policy and terms of use
                        </span>
                    </label>
                    {
                        formik.errors.isAgree &&
                        <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.isAgree}</div>
                    }
                </div>

                <div className="w-full p-2">
                    <button type="submit" className="w-full bg-green-400 text-white rounded py-2">Sign up</button>
                </div>

                <div className="w-full mb-2 p-2">
                    <p className="font-bold">Already have an account?
                        <Link href="/dashboard/login">
                            <a className="text-primary inline-block ml-2">
                                Login
                            </a>
                        </Link>
                    </p>
                </div>
            </form>
        </SubAuthContainer>
    );
};

export default SubSignUp;