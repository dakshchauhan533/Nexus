import {useState} from "react"
import { Link } from "react-router-dom"

import {UseLogin} from "../../hooks/UseLogin.js"


  const Login = () => {
  const [userName, setUsername] = useState("")
  const [password, setpassword] = useState("")
  const {loading, login} = UseLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login( userName, password );
  };
  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 backdrop-blur-lg backdrop-filter bg-clip-padding bg-opacity-0">
    <h1 className="text-4xl font-bold text-center text-gray-200">
      Login &nbsp;
    <span className="text-4xl font-bold text-center text-green-300">NEXUS</span>
    </h1>

    <form onSubmit={handleSubmit} >
    <div>
      <label  className="label p-2">
    <span className="text-base label-text"> Username</span>
      </label>
      <input type="text" placeholder="Enter Username" className="w-full  input input-accent h-10" value={userName} onChange={(e)=>setUsername(e.target.value)} />
    </div>
    <div>
      <label  className="label p-2">
    <span className="text-base label-text"> Password</span>
      </label>
      <input type="text" placeholder="Enter Password" className="w-full  input input-accent h-10" value={password} onChange={(e)=>setpassword(e.target.value)} />
    </div>
   <Link to="/Signup" className="text-sm hover:underline  hover:text-blue-600 mt-4 mb-4 inline-block">Don't have an account?</Link>
   <div>
    <button className="btn btn-block btn-sm mt-2" disabled={loading}>{loading?<span className="loading loading-spinner"></span>:"login"}</button>
   </div>
    </form>
      </div>
    </div>
  )
}

export default Login



// starter code for Login

// const Login = () => {
//   return (
//     <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 backdrop-blur-lg backdrop-filter bg-clip-padding bg-opacity-0">
//     <h1 className="text-4xl font-bold text-center text-gray-200">
//       Login &nbsp;
//     <span className="text-4xl font-bold text-center text-green-300">ChatApp</span>
//     </h1>

//     <form >
//     <div>
//       <label  className="label p-2">
//     <span className="text-base label-text"> Username</span>
//       </label>
//       <input type="text" placeholder="Enter Username" className="w-full  input input-accent h-10" />
//     </div>
//     <div>
//       <label  className="label p-2">
//     <span className="text-base label-text"> Password</span>
//       </label>
//       <input type="text" placeholder="Enter Password" className="w-full  input input-accent h-10" />
//     </div>
//    <a href="#" className="text-sm hover:underline  hover:text-blue-600 mt-4 mb-4 inline-block">Don't have an account?</a>
//    <div>
//     <button className="btn btn-block btn-sm mt-2">Login</button>
//    </div>
//     </form>
//       </div>
//     </div>
//   )
// }

// export default Login
