# what is module 

```
1. A module in JavaScript is a piece of code that encapsulates specific functionality, making it reusable and maintainable. 
2. It consists of already predefined functions/methods that can be directly used in the development process for faster and more efficient results. 
3. Modules help organize code, promote reusability, and enhance the overall structure of a JavaScript application.

```

# Types of module in NodeJS

1. Buit-in Modules

```This type of moduel does not required any installation process. i.e it can be directly used whenever it needed in the application for Example: http,fs,path..etc```

2. user-define Module(third-party module) 

```
although these both the thing are not the same because the third-party module always required a installation step before importing otherwise you will get an error called no_module found!.

where as user-define module is a pice of a code which explicitly written by the programmer in the local machine by keeping the thought of separation of concern or resuability of the same code.

  
```
# The way to include module in the NodeJS Application.

1.  first method : use a lagcy method to import the module i.e by the help of require('_module_name');
  <br>
  <code> 
const moduleName = require('_module_name');
</code>
2. second Method : use a ES6 import method , introduced by ECMAScript in 2017
<br> 
<code>import moduleName from '_module_name';</code>