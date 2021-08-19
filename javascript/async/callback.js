"use strict";

// Javascript is synchronous
// Execute the code block in order after hoisting.
// hoisting : var, function declaration

console.log("1");
setTimeout(function () {
  console.log("2");
}, 1000);
console.log("3");

// Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

console.clear();

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      // 로그인 하는데 2초정도 걸린다고 가정!
      if (
        (id === "minbro" && password === "minbro") ||
        (id === "test" && password === "test")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      // 권한 확인을 하는데 1초정도 걸린다고 가정!
      if (user === "minbro") {
        onSuccess({ name: "minbro", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your passsword");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
          alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
