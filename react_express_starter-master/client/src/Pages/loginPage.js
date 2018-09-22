import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import '../css/style.css';

class loginPage extends Component {

	onClick(){
		window.location.href = "/home"
	}

  render() {
    return (
      <div>
          <Helmet>
					<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
					<link rel="stylesheet" href="../css/style.css"/>
          <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/4.1.0/css/bootstrap.min.css"></link>
					<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
					<script src="https://cdn.bootcss.com/popper.js/1.12.5/umd/popper.min.js"></script>
					<script src="https://cdn.bootcss.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>
					</Helmet>
					<div class="wel-bg">
     				<img src={require("../images/school.jpeg")} class="wel-bg" />
						<div class="form-group login-form">
							<p class="text-center wel-name">Welcome,Student!</p><br/><br/>
            <form method="post" enctype="multipart/form-data" class="theme-signin">
                <div class="form-group text-center" >
                    <div class="form-group" >
                        <input type="text" class="col-6 input-form" id="studentnumber"  placeholder="e.g. z500000"/>
                    </div><br/>
                    <div class="form-group ">
                        <input type="password" class="col-6 password input-form" id="Password"  placeholder="Password"/>
                    </div><br/><br/>
                </div>
            </form>
        	</div>
        <div class="form-group text-center" >
            <button type="submit" class="btn btn-primary btn-lg log-button" onClick={this.onClick.bind(this)}>Login</button>

        </div>
    	</div>
		</div>
    )
  }
}

export default loginPage
