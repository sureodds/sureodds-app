"use client";
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';
import Link from 'next/link';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import InputField from '../forms/InputField';
import PasswordInput from '../forms/PasswordInput';
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import loginImg from '/public/loginImg.png'


const validationSchema = Yup.object({
  password: Yup.string().required('Password is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});

const LoginForm = () => {
    const [continueWithEmail, setContiuneWithEmail] = useState(false);
     const initialValues = {
        email: '',
        password: '',
    };

    const onSubmit = async (values: typeof initialValues) => {
        console.log(values)
    };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 w-auto bg-zinc-50 h-4/5 rounded-xl mt-20">
      <div className='w-96 bg-red-800 rounded-l-xl sm:block hidden'>
        {/* <h1 className='text-3xl text-zinc-100 font-bold'>Success starts here</h1> */}
        <AspectRatio ratio={16 / 9}>
            <Image src={loginImg} alt="Image" className="rounded-xl object-cover" />
        </AspectRatio>
      </div>
      <div className='form w-96 p-8'>
        <h1 className='font-bold text-xl mb-1'>Sign in to your account</h1>
        <p className="text-sm mb-6">Don’t have an account? <Link href="/join" className="underline underline-offset-2">Join here</Link></p>
        {continueWithEmail && <Button className='mb-8' onClick={() => setContiuneWithEmail(false)} variant="outline">Go back</Button>}
        {!continueWithEmail ? <div>
            <Button variant="outline" className="px-8 w-full mt-8 py-6 flex items-center justify-around"><FcGoogle className="h-6 w-6" /> <span className='font-medium text-md dark:text-zinc-200'>Continue with Google</span></Button>
            <Button variant="outline" className="px-8 w-full mt-4 py-6 flex items-center justify-around"><FaFacebookF className="h-6 w-6 text-blue-800" /> <span className='font-medium text-md dark:text-zinc-200'>Continue with Facebook</span></Button>
            <h1 className='font-bold text-center my-4 text-zinc-300'>OR</h1>
            <Button onClick={() => setContiuneWithEmail(true)} variant="outline" className="px-8 w-full mt-4 py-6 flex items-center justify-around"><HiOutlineMail className="h-6 w-6" /> <span className='font-medium text-md dark:text-zinc-200'>Continue with your email</span></Button>
        </div> :
        <div>
            <Formik 
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}>
                {() => ( 
                    <Form>
                        <InputField
                            label="Email"
                            name="email"
                            placeholder="Enter Email"
                            type="email"
                            ariaLabel="email"
                        />
                        <PasswordInput
                            label="Password"
                            name="password"
                            placeholder="Password@347"
                            ariaLabel="password"
                        />
                        <Button variant="default" className="w-full mt-6">Sign in</Button>
                    </Form>
                )}
            </Formik>
        </div> }
        <p className="text-xs mt-40">By joining, you agree to the SureOdds <Link href="/" className="underline underline-offset-2">Terms of Service</Link> and to occasionally receive emails from us. Please read our <Link href="/" className="underline underline-offset-2">Privacy Policy</Link> to learn how we use your personal data.</p>
      </div>
    </div>
  )
}

export default LoginForm
