import * as React from "react"
import {
  ChakraProvider,
  Flex,
  theme,
} from "@chakra-ui/react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from './login/Login';
import LoginPassword from './login_password/LoginPassword';
import OTPEmail from './otp_email/OTPEmail';
import OTPSms from './otp_sms/OTPSms';
import Signup from './signup/Signup';

export const App = ():JSX.Element => (
  <ChakraProvider theme={theme}>
    <Flex width="100vw" height="100vh" direction="column" justifyContent="center" alignItems="center">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login"></Redirect>
          </Route>
          <Route exact path="/login_with_password">
            <LoginPassword/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/otp/email">
            <OTPEmail />
          </Route>
          <Route exact path="/otp/sms">
            <OTPSms />
          </Route>

        </Switch>
      </Router>
    </Flex>
  </ChakraProvider>
)
