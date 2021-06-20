import "./App.css";
import React ,{useState} from "react";

import Home from "./feature/homepage";
import Branches from "./../src/feature/admin/branches";
import Component_Block_Last from "./components/component_block_last";
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
import Notification_tag from "./components/notification_tag";
import Notification_client from "./feature/client/notification";
import Footer_client from "./../src/components/footer_client";
import Room_client from "./../src/feature/client/room";
import Room_tag from "./../src/components/room_tag";
import Homepage_admin from "./../src/feature/admin/homepage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
  Link,
} from "react-router-dom";
import Reportissues_client from "./feature/client/report-issues";
import Reportissues_tag from "./components/reportissue_tag";
import Detail_room from "./feature/client/detail_room";
import Rules_client from "./feature/client/rules";
import Invoices from "./feature/admin/invoice";
import Profile from "./feature/client/profile";
import Login from "./feature/login";
import Cookies from "js-cookie";
import { PrivateRoute, AuthButton } from "./fakeAuth";
import Register from './feature/register'
import Invoiceone from './feature/client/invoiceone'
import Info from './feature/admin/info'
import Password from './feature/admin/password'
import PasswordUs from './feature/client/passworduser'
function App() {
  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  );
  const Userlayout =()=>{
     return (
       <Switch>
        {Cookies.get("Bearer") ? (
          <>
         <Route path="/detailroom">
           <Detail_room />
         </Route>
         <Route path="/roomUsers">
           <Room_client />
         </Route>
         <Route path="/profileUs">
           <Profile />
         </Route>
         <Route path="/ruleUsers">
           <Rules_client />
         </Route>
         <Route path="/report-issueUsers">
           <Reportissues_client />
         </Route>
         <Route path="/invoieUsers">
           <Invoiceone />
         </Route>
         <Route path="/notificationUsers">
           <Notification_client />
         </Route>
         <Route path="/changepassUs">
           <PasswordUs/>
         </Route>
         <Route exact path="/">
           <Home />
         </Route>
         </>
         ) : (
          <PrivateRoute path="/" name="HomeAdmin" component={Userlayout} />
        )}
       </Switch>
     );
  }
  const Adminlayout = () => {
     return (
       <Switch>
          {Cookies.get("Bearer") ? (
            <>
         <Route path="/branches">
           <Branches />
         </Route>
         <Route path="/info">
           <Info />
         </Route>
         <Route path="/password">
           <Password />
         </Route>
         <Route path="/rooms">
           <Room />
         </Route>
         <Route path="/facilities">
           <Facilities />
         </Route>
         <Route path="/electricity-waters">
           <ElectricityWaters />
         </Route>
         <Route path="/monthlyincomes">
           <Monthlyincome />
         </Route>
         <Route path="/monthlypayments">
           <Monthlypayment />
         </Route>
         <Route path="/contracts">
           <Contract />
         </Route>
         <Route path="/users">
           <Users />
         </Route>
         <Route path="/roles">
           <Role />
         </Route>
         <Route path="/rules">
           <Rules />
         </Route>
         <Route path="/notifications">
           <Notification />
         </Route>
         <Route path="/reported-issues">
           <Reportedissues />
         </Route>
         <Route path="/invoices">
           <Invoices />
         </Route>
         <Route exact path="/">
           <Homepage_admin />
         </Route>
         </>
         ) : (
          <PrivateRoute path="/" name="HomeAdmin" component={Userlayout} />
        )}
       </Switch>
     );
       
  }
  return (
    <div className="App">
      <Switch>
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
            Cookies.get("roles") === "ROLE_ADMIN" ?
              <Adminlayout {...props} /> : <Userlayout {...props} /> 
            }
          />
        ) : (
          <PrivateRoute path="/" name="HomeAdmin" component={Userlayout} />
        )}
      </Switch>

      {/* </Switch>   */}
      {/* <Room_client/> */}

      {/* <Detail_room/> */}
      {/* <Detailroom_tag/> */}
      {/* <Rules_client/> */}
      {/* <Reportissues_client/> */}
      {/* <Profile/> */}
      {/* <Login /> */}
    </div>
  );
}
export default App;
