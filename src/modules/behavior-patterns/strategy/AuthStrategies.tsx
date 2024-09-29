interface AuthStrategy {
  login(): void
}

export class EmailAuthStrategy implements AuthStrategy {
  login() {
    console.log("Logging in with email...")
  }
}

export class GoogleAuthStrategy implements AuthStrategy {
  login() {
    console.log("Logging in with Google...")
  }
}

export class FacebookAuthStrategy implements AuthStrategy {
  login() {
    console.log("Logging in with Facebook...")
  }
}
