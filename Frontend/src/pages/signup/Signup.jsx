import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox.jsx";
import { useState } from "react";
import useSignup from "../../hooks/UseSignup.js"
const Signup = () => {
  
  const {loading,signup} = useSignup();


  const [inputs, setinputs] = useState({
    userName: "",
    fullName: "",
    password: "",
    confirmPassword: "",
    Gender: "",
  });


  let handlesubmit = async (e) => {
    e.preventDefault();
   await signup(inputs);
  };

  let handlecheckboxchange = (Gender) => {
    setinputs({ ...inputs, Gender });
  };
  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 backdrop-blur-lg backdrop-filter bg-clip-padding bg-opacity-0">
        <h1 className="text-4xl font-bold text-center text-gray-200">
          SIGNUP &nbsp;
          <span className="text-4xl font-bold text-center text-green-300">
            NEXUS
          </span>
        </h1>

        <form onSubmit={handlesubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text"> Fullname</span>
            </label>
            <input
              type="text"
              placeholder="Enter Fullname"
              className="w-full  input input-accent h-10"
              value={inputs.fullName}
              onChange={(e) => {
                setinputs({ ...inputs, fullName: e.target.value });
              }}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full  input input-accent h-10"
              value={inputs.userName}
              onChange={(e) => {
                setinputs({ ...inputs, userName: e.target.value });
              }}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text"> Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full  input input-accent h-10"
              value={inputs.password}
              onChange={(e) => {
                setinputs({ ...inputs, password: e.target.value });
              }}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text"> Re-enter Password</span>
            </label>
            <input
              type="text"
              placeholder="Re enter password"
              className="w-full  input input-accent h-10"
              value={inputs.confirmPassword}
              onChange={(e) => {
                setinputs({ ...inputs, confirmPassword: e.target.value });
              }}
            />
          </div>
          <GenderCheckbox
            oncheckboxchange={handlecheckboxchange}
            selectedgender={inputs.Gender}
          />
          <Link
            to="/Login"
            className="text-sm hover:underline  hover:text-blue-600 mt-4 mb-4 inline-block"
          >
            Have an account? Login here
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span>: "SignUp"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

// starter code of signup page

// import GenderCheckbox from "./GenderCheckbox.jsx"

// const Signup = () => {
//   return (
//     <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 backdrop-blur-lg backdrop-filter bg-clip-padding bg-opacity-0">
//     <h1 className="text-4xl font-bold text-center text-gray-200">
//       SIGNUP &nbsp;
//     <span className="text-4xl font-bold text-center text-green-300">ChatApp</span>
//     </h1>

//     <form >
//     <div>
//       <label  className="label p-2">
//     <span className="text-base label-text"> Fullname</span>
//       </label>
//       <input type="text" placeholder="Enter Username" className="w-full  input input-accent h-10" />
//     </div>
//     <div>
//       <label  className="label p-2">
//     <span className="text-base label-text">Username</span>
//       </label>
//       <input type="text" placeholder="Enter Password" className="w-full  input input-accent h-10" />
//     </div>
//     <div>
//       <label  className="label p-2">
//     <span className="text-base label-text"> Password</span>
//       </label>
//       <input type="text" placeholder="Enter Password" className="w-full  input input-accent h-10" />
//     </div>
//     <div>
//       <label  className="label p-2">
//     <span className="text-base label-text"> Re-enter Password</span>
//       </label>
//       <input type="text" placeholder="Enter password" className="w-full  input input-accent h-10" />
//     </div>
//     <GenderCheckbox/>
//    <a href="#" className="text-sm hover:underline  hover:text-blue-600 mt-4 mb-4 inline-block">Don't have an account?</a>
//    <div>
//     <button className="btn btn-block btn-sm mt-2">SignUp</button>
//    </div>
//     </form>
//       </div>
//     </div>
//   )
// }

// export default Signup
