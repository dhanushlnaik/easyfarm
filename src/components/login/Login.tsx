import Image from "next/image";
import Head from "../layout/Head";

export default function Login() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* Left Side (Image) */}
      <div className="flex items-center justify-center md:order-1">
        <Image src="/India.jpg" alt="Login Image" width={800} height={600} />
      </div>

      {/* Right Side (Form) */}
      <div className="flex flex-col items-center justify-center p-8 md:order-2">
        <div className="w-full max-w-md space-y-10">
          <div>
            <Head title="Welcome Back!" subtitle="Please sign in to your account." />
          </div>
          <form className="space-y-9">
            <div>
              <label htmlFor="email" className="block font-bold text-gray-700">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border-gray-300 rounded-md focus:border-green-400 focus:ring focus:ring-green-200"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block font-bold text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border-gray-300 rounded-md focus:border-green-400 focus:ring focus:ring-green-200"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-3 font-bold text-white bg-green-400 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green focus:border-green-700"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
