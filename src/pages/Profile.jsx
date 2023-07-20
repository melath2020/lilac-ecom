import React from "react";
import Container from "../components/Container";
import { FiEdit } from "react-icons/fi";
import { useSelector } from "react-redux";

const Profile = () => {
  const authState=useSelector(state=>state?.auth)
  return (
    <>
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div class="container mt-0">
              <div class="row d-flex justify-content-center">
                <div class="col-md-7">
                  <div class="card p-3 py-4">
                    <div class="text-center">
                      <img
                        src="https://i.imgur.com/bDLhJiP.jpg"
                        width="100"
                        class="rounded-circle"
                      />
                    </div>

                    <div class="text-center mt-3">
                     
                      <h5 class="mt-2 mb-0">{authState?.user?.firstname} {authState?.user?.lastname}</h5>
                      <span>{authState?.user?.mobile}</span>

                      <div class="px-4 mt-1">
                        <p class="fonts">
                        {authState?.user?.email}
                        </p>
                      </div>


                      <div class="buttons text-center">
                        <button class="btn btn-outline-primary px-4">
                         Logout
                        </button>
                  
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Profile;
