import Main from "./Main/Main";
import Posts from "./Posts/Posts";
import Users from "./Users/Users";
import NavBar from "./NavBar/NavBar";
// import readline from "readline";
import store from './store/Counter/Counter';
import { increment, decrement, selectCount } from './store/Counter/counterSlice';

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function displayCount() {
//   const count = store.getState().counter.value;
//   console.log('Current count:', count);
// }

// function handleInput(input) {
//   switch (input.trim()) {
//     case '+':
//       store.dispatch(increment());
//       break;
//     case '-':
//       store.dispatch(decrement());
//       break;
//     case 'q':
//       rl.close();
//       process.exit(0);
//     default:
//       console.log('Unknown command');
//   }
// }

// store.subscribe(displayCount);
// displayCount();

// rl.on('line', handleInput);


export { Posts, Main, NavBar };