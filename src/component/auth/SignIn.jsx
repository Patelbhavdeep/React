import React, { useEffect, useState } from "react";
import { login } from "../../Redux/Reducer/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const SignIn = () => {
  const dispatch = useDispatch();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { isAuth, message } = useSelector((state) => state.user);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    if (message) {
      toast(message);
    }
    if (isAuth) {
      toast("Login Successfully");
    }
  }, [message, isAuth]);
  return (
    <div className="flex flex-col w-full gap-10 h-full justify-center items-center">
      <form
        onSubmit={loginHandler}
        className="flex flex-col w-full gap-5 h-full justify-center items-center"
      >
        <div className="flex flex-col w-3/12">
          <label>User Name</label>
          <input
            className="border rounded-xs"
            placeholder="username"
            name="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-3/12">
          <label>Password</label>
          <input
            className="border rounded-xs"
            placeholder="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="px-4 py-1 border rounded-xl w-3/12">
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;

