import React from 'react'
import { Link } from 'react-router-dom'
import CustomInput from '../components/CustomInput'
import Container from '../components/Container'

const Login = () => {
  return (
   <>
    <Container class1="login-wrapper py-1 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Login</h3>
                            <form action=""  className='d-flex flex-column gap-15'>
                                <CustomInput type="email" name='email' placeholder='Email'
                                />
                              
                                <CustomInput type="password" name='password' placeholder='password'
                                        />
                                     
                              
                                <div>
                                    <Link to="/forgot-password">Forgot Password</Link>
                                    <div className='mt-3 d-flex justify-content-center gap-15  align-items-center'>
                                        <Link className='button login-btn button border-0 '>Login</Link>
                                        <Link className='button signup text-white' to="/signup">Sign up</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
   
   </>
  )
}

export default Login