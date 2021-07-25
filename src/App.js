import "./App.css";
import React ,{useState} from "react";
import Home from "./feature/homepage";
import Branches from "./../src/feature/admin/branches";
import Role from "./../src/feature/admin/role";
import Rules from "./../src/feature/admin/rules";
import Reportedissues from "./../src/feature/admin/reported-issues";
import Notification from "./../src/feature/admin/notification";
import Monthlyincome from "./../src/feature/admin/monthlyincome";
import Monthlypayment from "./../src/feature/admin/monthlypayment";
import Users from "./../src/feature/admin/users";
import Facilities from "./../src/feature/admin/facilities";
import Room from "./../src/feature/admin/room";
import ElectricityWaters from "./../src/feature/admin/electricity-water";
import Contract from "./../src/feature/admin/contract";
import Notification_client from "./feature/client/notification";
import Room_client from "./../src/feature/client/room";
import Homepage_admin from "./../src/feature/admin/homepage";
import Cooperation from "./../src/feature/cooperation";
import Price from "./../src/feature/price"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Reportissues_client from "./feature/client/report-issues";
import Detail_room from "./feature/client/detail_room";
import Rules_client from "./feature/client/rules";
import Invoices from "./feature/admin/invoice";
import Profile from "./feature/client/profile";
import Login from "./feature/login";
import Cookies from "js-cookie";
import { PrivateRoute} from "./fakeAuth";
import Register from './feature/register'
import Invoiceone from './feature/client/invoiceone'
import Info from './feature/admin/info'
import Password from './feature/admin/password'
import PasswordUs from './feature/client/passworduser'
import Map from './feature/map'
import Floor from './feature/admin/floor'
import Contact from './feature/contact'
import Privacy from "./feature/privacy"
import Term from "./feature/term"
import Error_client from "./feature/client/404"
import Error_admin from "./feature/admin/404"
import Room_first from "./feature/room_client"
import Map_login from "./feature/client/map"
function App() {
  const Userlayout =()=>{
     return (
         <Switch>
           <Route path="/detailroom" component={Detail_room} />
           <Route path="/profileUs" component={Profile} />
           <Route path="/ruleUsers" component={Rules_client} />
           <Route path="/report-issueUsers" component={Reportissues_client} />
           <Route path="/invoieUsers" component={Invoiceone} />
           <Route path="/notificationUsers" component={Notification_client} />
           <Route path="/changepassUs" component={PasswordUs} />
           <Route path="/map" component={Map_login} />
           <Route exact path="/home" component={Room_client} />
           <Route path="*" component={Error_client} exact={false} />
         </Switch>
     );
  }
  const Adminlayout = () => {
     return (
       <Switch>
             <Route path="/branches" component={Branches}/>
             <Route path="/info" component={Info}/> 
             <Route path="/password" component={Password}/>
             <Route path="/rooms" component={Room}/>
             <Route path="/floors" component={Floor}/>
             <Route path="/facilities" component={Facilities}/>
             <Route path="/electricity-waters" component={ElectricityWaters}/>
             <Route path="/monthlyincomes" component={Monthlyincome}/>
             <Route path="/monthlypayments" component={Monthlypayment}/>
             <Route path="/contracts" component={Contract}/>
             <Route path="/users" component={Users}/>
             <Route path="/roles" component={Role}/>
             <Route path="/rules" component={Rules}/>
             <Route path="/notifications" component={Notification}/>
             <Route path="/reported-issues" component={Reportedissues}/>
             <Route path="/invoices" component={Invoices}/>
             <Route exact  path="/home" component={Homepage_admin}/>
              <Route exact={false} path="*" component={Error_admin} />
       </Switch>
     );
  }
  return (
    <div className="App">
      <Switch>
        {/* <Route
          exact={false}
          path="*"
          component={Error}
        /> */}
        {/* <Route exact path="/home" component={Room_client} /> */}
        <Route
          exact
          path="/roomclient"
          name="Room Page"
          render={(props) => <Room_first {...props} />}
        />
        <Route
          exact
          path="/mapclient"
          name="Map Page"
          render={(props) => <Map {...props} />}
        />
        <Route
          exact
          path="/term"
          name="Term Page"
          render={(props) => <Term {...props} />}
        />
        <Route
          exact
          path="/privacy"
          name="Privacy Page"
          render={(props) => <Privacy {...props} />}
        />
        <Route
          exact
          path="/cooperation"
          name="Cooperation Page"
          render={(props) => <Cooperation {...props} />}
        />
        <Route
          exact
          path="/price"
          name="Price Page"
          render={(props) => <Price {...props} />}
        />
        <Route
          exact
          path="/"
          name="HomeMain Page"
          render={(props) => <Home {...props} />}
        />
        <Route
          exact
          path="/contact"
          name="Contact Page"
          render={(props) => <Contact {...props} />}
        />
        <Route
          exact
          path="/register"
          name="Register Page"
          render={(props) => <Register {...props} />}
        />
        <Route
          exact
          path="/login"
          name="Login Page"
          render={(props) => <Login {...props} />}
        />
        {Cookies.get("Bearer") ? (
          <Route
            path="/"
            name="HomeAdmin"
            render={(props) =>
              Cookies.get("roles") === "ROLE_ADMIN" ? (
                <Adminlayout {...props} />
              ) : (
                <Userlayout {...props} />
              )
            }
          />
        ) : (
          <PrivateRoute path="/" name="HomeAdmin" component={Adminlayout} />
        )}
      </Switch>
    </div>
  );
}
export default App;
