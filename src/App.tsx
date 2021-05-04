import * as React from "react"
import {
  ChakraProvider,
  Box,
  theme,
  Text
} from "@chakra-ui/react"
import ReactDOM from "react-dom" 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";


import { ColorModeSwitcher } from "./ColorModeSwitcher"

export const App = ():JSX.Element => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <ColorModeSwitcher></ColorModeSwitcher>
      <Router>
        <Switch>
          <Route exact path="/">
            <Text>Home Page</Text>
          </Route>
          <Route exact path="/login">
            <Text>Login Page</Text>
          </Route>
          <Route exact path="/signup">
            <Text>Signup</Text>
          </Route>
          <Route exact path="/otp">
            <Text>OTP</Text>
          </Route>
        </Switch>
      </Router>
    </Box>
  </ChakraProvider>
)
