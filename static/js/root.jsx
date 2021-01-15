const Router = ReactRouterDOM.BrowserRouter;
const Route =  ReactRouterDOM.Route;
const Link =  ReactRouterDOM.Link;
const Prompt =  ReactRouterDOM.Prompt;
const Switch = ReactRouterDOM.Switch;
const Redirect = ReactRouterDOM.Redirect;

const { Button, Col, Container, CardDeck, Card, ListGroup, ListGroupItem, Form, FormControl, Navbar, Nav, Row, Table, Modal, Spinner, Alert } = ReactBootstrap;


function App() {

  const [isLoggedIn, setIsLoggedIn] = React.useState("False");
  const [hasJustLoggedIn, setHasJustLoggedIn] = React.useState("False");
  const setLoggedInStatus = () => { 
    let loggedInStatus = localStorage.getItem('user')? "True" : "False";
    if (loggedInStatus !=null) {
      setIsLoggedIn(loggedInStatus);
    }
  }

  return (
    <div>
      <Router>
        <div> 
          <Spinner color="info" />
          <GlobalNavigationBar setLoggedInStatus={setLoggedInStatus} 
                                isLoggedIn={isLoggedIn} 
                                setHasJustLoggedIn={setHasJustLoggedIn}
                                hasJustLoggedIn={hasJustLoggedIn}
                                />
        </div>
      </Router><br/><br/>
      <div className="footer"><br/>
        <p className="footer-padding">© 2020 Copyright: Beanstalk Square.<br/>All rights reserved.</p>
      </div>
    </div>
  );
}

//Google map 
const googleMapScript = document.createElement('script');    
googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDrUUqanEvJqQxAOB3Kz1uOSBI4uReY7_Y&libraries=places`;
//In body tag of DOM, add script tags.
document.body.appendChild(googleMapScript);

//Call the function to create map and geocode after script tag has loaded.
googleMapScript.addEventListener('load', () => {    
  window.googlemapsdidload=true;
});


ReactDOM.render(
  <App />, document.querySelector('#root')
);