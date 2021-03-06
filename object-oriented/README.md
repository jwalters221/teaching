## Javascript Object Oriented User Registration ##

Create a class, User, with the following properties:

Public:
firstName
lastName
gender

**Public properties should be passed to constructor on object instantiation**

Private:
id
userName
tempPassword
userType

**Use getter and setter methods for all private properties**
**All users should be assigned (set) a userType = 'Standard' from constructor**

Within User class, public register() method should set the following properties:

id - a unique identifier generated by timestamp of register
userName - first letter of first name + last name
tempPassword - should be a random alphanumeric string at least 5 characters long

Create a child class, AdminUser, that inherits from User 

AdminUser object should use parent setter method and set userType = 'Admin' from AdminUser class

Outside of your classes:

1. Create a new male Standard User
2. Register the Standard User
3. Create a new female Admin User
4. Register the Admin User
5. Output your Standard User object to console
6. Output your Admin User object to console

