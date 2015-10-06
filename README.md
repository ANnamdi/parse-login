# Parse Login

## Description
Build out a simple web application that allows users to log in with Parse.


## Objectives

### Learning Objectives

After completing this assignment, you should…

* Understand how user authentication works


### Performance Objectives

After completing this assignment, you be able to effectively use

* Parse login and registration



## Details

### Deliverables

* A repo containing at least:
  * `scripts/main.js`
  * `index.html`

### Requirements

* No ESLint warnings or errors


## Normal Mode
Fork and clone this repository. After cloning, cd into the new directory and run the tiyfe command.

You will need to add your own parse API tokens using `Parse.initialize(...)` in the scripts/main.js file in order for this code to work.

In this assignment you will implement a log in page component that checkd a username / password combination using parse. If an error is returned from parse (ie. the username is incorrect, the password is incorrect, or anything else) the error should be shown on your registration page. If the user successfully logs in, you should redirect the user to the dashboard page.

## Hard Mode
Add security measures such that if a user is not logged in, they cannot access the dashboard page. One way to do this would be to redirect them to the login page if they try to access the dashboard page while logged out.


## Notes

* React state (`this.state` and `this.setState(...)`) is useful for showing errors.
* Passing an instantiated router into your registration component will make it easy to redirect the user to the correct place once they successfully log in.
* You will need to create an account and a new applicaton on [parse.com](http://parse.com) to complete this assignment.

## Additional Resources

* [Parse User Documentation](https://parse.com/docs/js/guide#users)
# Parse_User_Authentication
