let Account = (function() {
  const Private = new WeakMap();

  function anonymize() {
    let result = '';
    let lettersNums = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYS1234567890';

    for (let i = 0; i <= 16; i += 1) {
      let key = Math.floor(Math.random() * 62);
      result = result.concat(lettersNums[key]);
    }

    return result;
  };

  function passwordCheck(pass, pvtObj) {
    return pass === pvtObj.password;
  };

  return {
    init(email, password, firstName, lastName) {
      Private.set(this, {email, password, firstName, lastName});
      this.displayName = anonymize();
  
      return this;
    },

    reanonymize(pass) {
      if (passwordCheck(pass, Private.get(this))) {
        this.displayName = anonymize();
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    resetPassword(currentPass, newPass) {
      let privateObject = Private.get(this);
      if (passwordCheck(currentPass, privateObject)) {
        privateObject.password = newPass;
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    firstName(pass) {
      let privateObject = Private.get(this);
      if (passwordCheck(pass, privateObject)) {
        return privateObject.firstName;
      } else {
        return 'Invalid Password';
      }      
    },

    lastName(pass) {
      let privateObject = Private.get(this);
      if (passwordCheck(pass, privateObject)) {
        return privateObject.lastName;
      } else {
        return 'Invalid Password';
      }      
    },

    email(pass) {
      let privateObject = Private.get(this);
      if (passwordCheck(pass, privateObject)) {
        return privateObject.email;
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