// "use client"
// import React from 'react';
// import {useForm,SubmitHandler} from "react-hook-form";
// import {zodResolver} from "@hookform/resolvers/zod";


// const ReacthookFormwithzod = {} => {
//     const {
//         register,
//         handleSubmit,
//         formState: {error,insubmitting}
//         reset,
//         setError,
//     } = useForm{};

//     const onSubmit = async { data : any } => {
//         console.log(data);
//     };



//   return (
//     <div> <div className="flex justify-center items-center h-screen">
//     <form
//       onSubmit={handleSubmit}
//       className="w-full max-w-md border bg-white p-5 shadow"
//     >
//       <h2 className="text-2xl font-bold mb-5">Register</h2>
//       <div className="mb-4">
//         <label
//           htmlFor="name"
//           className="block text-gray-700 text-sm font-bold mb-2"
//         >
//           Name
//         </label>
//         <input
//         {...register("name")}
//           type="text"
//           name="name"
//           id="name"
//           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//         />
//       </div>
//       <div className="mb-4">
//         <label
//           htmlFor="email"
//           className="block text-gray-700 text-sm font-bold mb-2"
//         >
//           Email
//         </label>
//         <input
//         {...register("email")}
//           type="email"
//           name="email"
//           id="email"
          
//           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//         />
//       </div>
//       <div className="mb-4">
//         <label
//           htmlFor="password"
//           className="block text-gray-700 text-sm font-bold mb-2"
//         >
//           Password
//         </label>
//         <input
//         {...register("password")}
//           type="password"
//           name="password"
//           id="password"
//           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//         />
//       </div>
//       <div className="mb-4">
//         <label
//           htmlFor="confirmPassword"
//           className="block text-gray-700 text-sm font-bold mb-2"
//         >
//           Confirm Password
//         </label>
//         <input
//         {...register("confirmPassword")}
//           type="password"
//           name="confirmPassword"
//           id="confirmPassword"
//           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//         />
//       </div>
//       <div className="mb-4">
//         <label
//           htmlFor="phoneNo"
//           className="block text-gray-700 text-sm font-bold mb-2"
//         >
//           Phone No
//         </label>
//         <input
//         {...register("confirmPassword")}
//           type="text"
//           name="phoneNo"
//           id="phoneNo"
//           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//         />
//       </div>
//       <div className="flex items-center justify-between">
//         <button
//           type="submit"
//           className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
//         >
//          {IsSubmitting ? "submitting" : "submit"}
//         </button>
//       </div>
//     </form>
//   </div></div>
//   );
// }

// export default reacthookformwithzod;



















"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod"; // Importing zod for validation

// Define the schema for validation using zod
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Confirm password must be at least 6 characters"),
  phoneNo: z.string().min(10, "Phone number must be 10 digits"),
});

type FormData = z.infer<typeof schema>; // Infer types from the schema

const ReactHookFormWithZod = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
    // Handle your form submission here, e.g., API call
    // After success, you can reset the form if needed:
    // reset();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md border bg-white p-5 shadow"
      >
        <h2 className="text-2xl font-bold mb-5">Register</h2>
        {/* Name Field */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            name="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        {/* Confirm Password Field */}
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Confirm Password
          </label>
          <input
            {...register("confirmPassword")}
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
        </div>

        {/* Phone Number Field */}
        <div className="mb-4">
          <label
            htmlFor="phoneNo"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Phone No
          </label>
          <input
            {...register("phoneNo")}
            type="text"
            name="phoneNo"
            id="phoneNo"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {errors.phoneNo && <span>{errors.phoneNo.message}</span>}
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReactHookFormWithZod;

