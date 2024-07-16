"use client"

import React,{useState} from 'react';
import { signInSchema,signInType} from '@repo/zod-types/zod';
import axios from 'axios';
import { useRouter } from 'next/navigation';


const signInForm = () =>{
    const router = useRouter();
    const [form, setForm] = useState<signInType>({
        email:'',
        password:''
    });
    //fxn to handle individual changes
    const handleChange = (e:any) =>{
        const {name,value} = e.target;
        setForm({
            ...form,
            [name]:value
        })
    }
    //fxn to submit form
    const handleSubmit = async (e:any) =>{
        e.preventDefault();

        //zod validate
        if(!signInSchema.safeParse(form)){
            alert("Please enter valid data type.")
        }
        //backend route
        const response = await axios.post("http://localhost:3000/api/signin",form);
        if(!response.data.success){
            alert("axios sign-in request failed!")
        }else{
            router.push("/chat-interface")
        }    
    }

    return(
        <div className="min-h-screen bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900 flex items-center justify-center p-4 relative overflow-hidden">
       
  {/* Animated subtle patterns */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 opacity-10 animate-pulse">
      <div className="h-full w-full bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900 blur-3xl"></div>
    </div>
    <div className="absolute inset-0 opacity-5 animate-pulse delay-1000">
      <div className="h-full w-full bg-gradient-to-tl from-zinc-600 via-zinc-700 to-zinc-900 blur-3xl"></div>
    </div>
  </div>

  {/* Form container */}
  <div className="bg-zinc-800 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-zinc-700 relative z-10 backdrop-blur-sm bg-opacity-80">
    <h2 className="text-4xl font-bold mb-8 text-zinc-100 text-center">Sign In</h2>
    
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-zinc-700 placeholder-zinc-400 rounded-lg border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition duration-200"
          placeholder="you@example.com"
          required
        />
      </div>
      
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-zinc-300 mb-2">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-zinc-700  placeholder-zinc-400 rounded-lg border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition duration-200"
          placeholder="••••••••"
          required
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-zinc-600 text-zinc-100 py-3 px-4 rounded-lg font-semibold hover:bg-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-800 transition duration-200 transform hover:scale-105"
      >
        Create Account
      </button>
    </form>

    <p className="mt-6 text-center text-zinc-400 text-sm">
      Already have an account?{" "}
      <a href="#" className="font-medium text-zinc-300 hover:text-zinc-100 transition duration-200">
        Sign in
      </a>
    </p>
  </div>
</div>
  );
};

export default signInForm;