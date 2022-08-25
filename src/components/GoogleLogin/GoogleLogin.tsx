import React, { useEffect, memo } from "react";
import jwtDecode from "jwt-decode";

interface GoogleLoginProps {
  onSignInError: (error: {}) => void;
  onSignInSuccess: (user: {}) => void;
}

const GoogleLogin = (props: GoogleLoginProps) => {
  console.log("TESTTESTTEST");
  const { onSignInError, onSignInSuccess } = props;
  useEffect(() => {
    /** glable google object */
    // @ts-ignore
    google.accounts.id.initialize({
      client_id:
        "296294334339-uu2i9du22l5pqqpk82ugv9m5sns3ctvh.apps.googleusercontent.com",
      callback: handleGoogleResponse,
      width: 400,
    });

    // @ts-ignore
    google.accounts.id.renderButton(document.getElementById("googleLogin"), {
      theme: "outline",
      size: "large",
    });
  });

  const handleGoogleResponse = (response: any) => {
    let userObject: {} = jwtDecode(response.credential);
    if (Object.keys(userObject).length !== 0) {
      onSignInSuccess(userObject);
    } else {
      console.log("USER OBJECT VALUE");
      console.log(userObject);
      console.log("response");
      console.log(response);
      onSignInError({ error: "sign in failed" });
    }
  };

  return <div style={{ marginLeft: "15px" }} id={"googleLogin"}></div>;
};

export default memo(GoogleLogin);
