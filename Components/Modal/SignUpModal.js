import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FaTimes } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import baseURL from '../../Helpers/httpRequest';
import { signIn } from '../../redux/slices/auth';
import CustomModal from './CustomModal';

const SignUpModal = ({ showSignUpModal, setShowSignUpModal, setShowSignInModal, redirectLink }) => {
    const [error, setError] = useState({ status: false, msg: "" })
    const [loading, setLoading] = useState(false)

    // Redux dispatch
    const dispatch = useDispatch();

    // next router
    const router = useRouter()

    // Formik Validation
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

        if (!values.type) {
            errors.type = 'Account type required';
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
            type: '',
            password: '',
            isAgree: false
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            // loading started
            setLoading(true);
            setError({ status: false, msg: "" })

            // axios request for checking sign in
            axios({
                method: "POST",
                url: `${baseURL}/v2/auth/signup`,
                data: values
            })
                .then((res) => {
                    if (res.data.success) {
                        // Saving token to local-storage
                        localStorage.setItem('authToken', res.data.data.token)

                        // verifying token
                        axios({
                            method: "POST",
                            url: `${baseURL}/v2/auth/verify`,
                            headers: { Authorization: res.data.data.token }
                        })
                            .then((res) => {
                                if (res.data.success) {
                                    // loading end
                                    setLoading(false);
                                    // Making error empty
                                    setError({ status: false, msg: "" })
                                    // Updating redux
                                    dispatch(signIn(res.data?.data?.data));
                                    // Dynamic routing
                                    router.push(redirectLink)
                                    // Closing the modal
                                    setShowSignUpModal(false);
                                    resetForm({});
                                } else {
                                    // loading end
                                    setLoading(false);
                                    setError({ status: true, msg: "Error occurred. Please try again!" })
                                }
                            })
                            .catch((err) => {
                                // loading end
                                setLoading(false);
                                setError({ status: true, msg: err.response.data.message })
                            })
                    } else {
                        // loading end
                        setLoading(false);
                        setError({ status: true, msg: res.data.message })
                    }
                })
                .catch((err) => {
                    // loading end
                    setLoading(false);
                    setError({ status: true, msg: err.response.data.message })
                })
        },
    });
    return (
        <CustomModal isOpen={showSignUpModal}>
            {/* For cross button  */}
            <div className="text-right px-4">
                <button
                    className="p-2 rounded hover:bg-gray-200 text-2xl"
                    onClick={() => setShowSignUpModal(false)}>
                    <FaTimes />
                </button>
            </div>
            <h2 className="uppercase text-center font-bold text-xl my-5">Create an account</h2>

            {
                error.status && <p className="bg-red-50 border border-red-200 text-red-500 text-center p-2 my-2 rounded">{error.msg}</p>
            }

            <form onSubmit={formik.handleSubmit} style={{ height: "400px", overflow: "auto" }}>
                <div className="w-full mb-2 p-2">
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

                <div className="flex mb-2">
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

                <div className="w-full mb-2 p-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
                        Account Type
                    </label>
                    <select
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="type"
                        placeholder="Acount Type"
                        name="type"
                        value={formik.values?.type}
                        onChange={(e) => formik.setFieldValue("type", e.target.value)}
                    >
                        <option value="">Select a type</option>
                        <option value="BUYER">Buyer</option>
                        <option value="SELLER">Seller</option>
                    </select>
                    {
                        formik.errors.type &&
                        <div className="text-md text-red-500 mt-2 ml-1">{formik.errors.type}</div>
                    }
                </div>

                <div className="w-full mb-2 p-2">
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

                <div className="mb-6 p-2">
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

                <div className="w-full mb-2 p-2">
                    <button
                        type={loading ? "button" : "submit"}
                        className="w-full flex justify-center items-center bg-primary text-white rounded py-2"
                        disabled={loading}
                    >
                        {
                            loading &&
                            <span className="animate-spin flex justify-center items-center w-7">
                                <span className="rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></span>
                            </span>
                        }
                        {loading ? "Loading..." : "Sign up"}
                    </button>
                </div>

                <div className="w-full mb-2 p-2">
                    <p>Already have an account? <button
                        onClick={() => {
                            setShowSignInModal(true)
                            setShowSignUpModal(false)
                        }}
                        className="text-green-400 font-bold">Login</button>
                    </p>
                </div>
            </form>
        </CustomModal>
    );
};

export default SignUpModal;