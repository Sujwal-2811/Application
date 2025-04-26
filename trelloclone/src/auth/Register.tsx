// import axios from 'axios';
import { useForm } from 'react-hook-form'
// import { useNavigate } from 'react-router-dom';

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

export const Register = () => {
  const { register,
    // handleSubmit, 

    formState: { errors } } = useForm<RegisterFormData>();
  // const navigate = useNavigate
  // const onSubmit = async (data: RegisterFormData) => {
  //   try {
  //     await axios.post('http://localhost:4000/api/auth/register', data);
  //     alert('Registration successful! Please login.');
  //     navigate('/login');
  //   }catch(error:any) {
  //     console.error(error);
  //     alert(error.response?.data?.message || "Registration failed.");
  //   }
  // };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-100 ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form
          // onSubmit={handleSubmit(onSubmit)} 
          className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className='block text-gray-700 mb-1'>Email</label>
            <input
              type='email'
              {...register('email', { required: 'Email is required' })}
              className='w-full px-4 py-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
            {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>


          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>

        {/* Link to Login */}
        <p className="mt-4 text-center text-gray-600 text-sm">
          Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
        </p>
      </div>
    </div>
  )
}
