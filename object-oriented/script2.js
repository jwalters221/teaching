class User {

  //constructor method    
  constructor(firstName, lastName, gender) {
      
      //public properties
      this.firstName = firstName;
      this.lastName = lastName;
      this.gender = gender;
      
      //private properties
      this._id;
      this._userName;
      this._tempPassword;
      this._setUserType('Standard');
      
  }
  
  //public method
  register() {
      
      //private methods
      this._setId();
      this._setUserName();
      this._setTempPassword();
  }
  
  //private method
  _setId() {
      let IdFromTimestamp = new Date().valueOf();
      this._id = IdFromTimestamp;
  }
  
  //public method
  getId() {
      return this._id;
  }
  
  //public method
  getUserName() {
    return this._userName;
  }
  
  //private method
  _setTempPassword() {
    this._tempPassword = Math.random().toString(36).replace('0.', '');
  }
  
  //public method
  getTempPassword() {
    return this._tempPassword;
  }
  
  //private method
  _setUserName() {
    this._userName = this.firstName.charAt(0) + this.lastName;
  }
  
  //public method
  getUserName() {
    return this._userName;
  }  
  
  //private method
  _setUserType(userType) {
      this._userType = userType;
  }

  //public method
  getUserType() {
      return this._userType;
  }  
  
}

class AdminUser extends User{
 
  constructor(firstName, lastName, gender){
  	
  	//always call super constructor
  	super(firstName, lastName, gender);
  	super._setUserType('admin');
  }
  
}

let standard = new User('John', 'Smith', 'male');
standard.register();

console.log(standard);

let admin = new AdminUser('Jessica', 'Johnson', 'female');
admin.register();

console.log(admin);


