(function Account() {
  let userEmail;
  let userPassword;
  let userFirstName;
  let userLastName;

  function anonymize() {
    let result = '';
    let lettersNums = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYS1234567890';

    for (let i = 0; i <= 16; i += 1) {
      let key = Math.floor(Math.random() * 62);
      result = result.concat(lettersNums[key]);
    }

    return result;
  };

  return {
    init(email, password, firstName, lastName) {
      userEmail = email;
      userPassword = password;
      userFirstName = firstName;
      userLastName = lastName;
      this.displayName = anonymize();
  
      return this;
    },

    reanonymize(pass) {
      if (pass === userPassword) {
        this.displayName = anonymize();
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    resetPassword(currentPass, newPass) {
      if (currentPass === userPassword) {
        userPassword = newPass;
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    firstName(pass) {
      if (pass === userPassword) {
        return userFirstName;
      } else {
        return 'Invalid Password';
      }      
    },

    lastName(pass) {
      if (pass === userPassword) {
        return userLastName;
      } else {
        return 'Invalid Password';
      }      
    },

    email(pass) {
      if (pass === userPassword) {
        return userEmail;
      } else {
        return 'invalid password';
      }
    },
  }

})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.email('abc'));                  // logs 'Invalid Password'