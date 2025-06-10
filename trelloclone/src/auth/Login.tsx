import { Checkbox } from '../components/ui/checkbox'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className='min-h-screen w-screen bg-gray-100 justify-center items-center flex'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
        <h2 className="text-2xl font-bold mb-6 text-center ">LOGIN</h2>
        <form
          className='space-y-4'>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type='email'
              className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100 rounded-none"
            />
          </div>

          <div>
            <label className='block text-gray-700 mb-1'>Password</label>
            <input type='password'
              className='w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100 rounded-none'
            />
          </div>


          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me
            </label>

          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2  hover:bg-blue-600 transition rounded-none"
          >
            LOGIN
          </button>
        </form>

        <div className='justify-center items-center  mt-4 flex'>
          <p>OR Login with</p>
        </div>

        <div className="justify-center items-center mt-4 flex">
          <p className= "text-sm text-gray-700">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline"> Register here</Link>
          </p>

        </div>

        <div className="justify-center items-center mt-4 flex h-10 gap-4">
          <button
            type="button"
            className="flex items-center justify-center gap-2 w-full px-4 py-2 border border-gray-300 text-gray-700 bg-white hover:bg-pink-500 hover:text-white hover:border-gray-300 transition-colors rounded-none"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="h-5 w-5"
            />
            Facebook
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-2 w-full px-4 py-2 border border-gray-300 text-gray-700 bg-white hover:bg-pink-500 hover:text-white hover:border-gray-300 transition-colors rounded-none"
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
              className="h-5 w-5"
            />
            Google
          </button>
        </div>


      </div>
    </div>

  )
}

export default Login