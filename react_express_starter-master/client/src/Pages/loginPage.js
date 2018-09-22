import React, { Component } from 'react'
import { Helmet } from "react-helmet";

class loginPage extends Component {
  render() {
    return (
      <div>
          <Helmet>
          <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/4.1.0/css/bootstrap.min.css"></link>
					<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
					<script src="https://cdn.bootcss.com/popper.js/1.12.5/umd/popper.min.js"></script>
					<script src="https://cdn.bootcss.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>
					</Helmet>
					<div style="background-image: url(../../school.jpeg);background-repeat :no-repeat; height: 810px;position: fixed;width: 100%; background-size: cover;">
					</div>
    			<div class="form-group" style="margin-left: 18%;margin-right: 18%;margin-top: 12% ;">
            <p class="text-center" style="font-size: 30px;color: white;">Welcome,Student!</p>
						<br></br><br></br>
            <form class="theme-signin">
                <div class="form-group text-center" >
                    <div class="form-group " >


                        <input type="text" style="height: 40px;" class="col-6" id="studentnumber"  placeholder="e.g. z500000"></input>
                    </div>
										<br></br>
                    <div class="form-group ">
                        <input type="password" style="height: 40px;" class="col-6 password" id="Password"  placeholder="Password"></input>
                    </div><br></br><br></br>


                </div>
						</form>
    			</div>
    	<div class="form-group text-center" >
        <button type="submit"  class="btn btn-primary btn-lg" style="width: 20%;">Login</button>

    	</div>
		</div>
    )
  }
}

export default loginPage
