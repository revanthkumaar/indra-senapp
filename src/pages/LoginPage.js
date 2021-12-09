import React from "react"
import {Link} from "react-router-dom"

const LoginComponent = () => {
    return (
      <div>
        <p>login component</p>
        <Link to="/task">Go to tasks page</Link>
      </div>
    );
}

export default LoginComponent;