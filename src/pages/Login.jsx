import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { loginUser } from "../features/user/userSlice";

const loginSchema = yup.object({
  email: yup.string().email("Email Should be valid").required("Email required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const authState=useSelector(state=>state.auth)
    const navigate=useNavigate()
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });


  useEffect(()=>{
    if(authState.user!==null && authState.isError==false){
        navigate('/')
        
    }
   
  },[authState])
  return (
    <>
      <Container class1="login-wrapper py-1 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login User</h3>
              <form action="" onSubmit={formik.handleSubmit} className="d-flex flex-column gap-15">
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur("email")}
                />
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>

                <CustomInput
                  type="password"
                  name="password"
                  placeholder="password"
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                />

                <div className="error">
                  {formik.touched.password && formik.errors.password}
                </div>

                <div>
                  <Link to="/forgot-password">Forgot Password</Link>
                  <div className="mt-3 d-flex justify-content-center gap-15  align-items-center">
                    <button className="button signup  button border-0  text-center">
                      Login
                    </button>
                    
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
