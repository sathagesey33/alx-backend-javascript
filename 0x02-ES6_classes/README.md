# 0x02. ES6 classes 

## Implement a class named ClassRoom:

    Prototype: export default class ClassRoom
    It should accept one attribute named maxStudentsSize (Number) and assigned to _maxStudentsSize

### Import the ClassRoom class from 0-classroom.js.

Implement a function named initializeRooms. It should return an array of 3 ClassRoom objects with the sizes 19, 20, and 34 (in this order).


### Implement a class named HolbertonCourse:

    Constructor attributes:
        name (String)
        length (Number)
        students (array of Strings)
    Make sure to verify the type of attributes during object creation
    Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)


   ### Implement a getter and setter for each attribute.Implement a class named Currency:

    - Constructor attributes:
        code (String)
        name (String)
    Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
    Implement a getter and setter for each attribute.
    Implement a method named displayFullCurrency that will return the attributes in the following format name (code).



###     Import the class Currency from 3-currency.js

Implement a class named Pricing:

    Constructor attributes:
        amount (Number)
        currency (Currency)
    Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
    Implement a getter and setter for each attribute.
    Implement a method named displayFullPrice that returns the attributes in the following format amount currency_name (currency_code).
    Implement a static method named convertPrice. It should accept two arguments: amount (Number), conversionRate (Number). The function should return the amount multiplied by the conversion rate.


