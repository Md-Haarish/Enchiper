import logo from './logo.svg';
import './App.css';

// Task1
// function Hello() {
//   return <h2>Hello React</h2>;
// }

// Task2
// function Welcome() {
//   return <h2>Welcome to React Class</h2>;
// }

// Task3
// function Header({ message }) {
//   return <h1>{message}</h1>;
// }

// Task4
// function TwoElements() {
//   return (
//     <div>
//       <p>First Element</p>
//       <p>Second Element</p>
//     </div>
//   );
// }

// Task5
// function Name() {
//   return <p>My name is Mohamed Haarish</p>;
// }

// Task6
// function HelloUser() {
//   const name = "Mohamed Haarish";
//   return <p>Hello {name}</p>;
// }

// Task7
// function Sum() {
//   return <p>{10 + 20}</p>;
// }

// Task8
// function Admin() {
//   const isAdmin = true;
//   return <p>{"Admin User"}</p>;
// }

// Task9
// function User({ name }) {
//   return <p>User Name: {name}</p>;
// }

// Task10
// function Person({ name, age }) {
//   return (
//     <p>
//       Name: {name}, Age: {age}
//     </p>
//   );
// }

// Task11
// function Title({ title }) {
//   return <h1>{title}</h1>;
// }

// Task12
// function Button({ label }) {
//   return <button>{label}</button>;
// }

// Task13
// function LoginStatus({ isLoggedIn }) {
//   return <p>{isLoggedIn ? "Logged In" : "Logged Out"}</p>;
// }

// Task14
// function UserInfo({ user }) {
//   return (
//     <p>
//       Name: {user.name} , Email: {user.email}
//     </p>
//   );
// }

// Task15
// function Skills({ skills }) {
//   return (
//     <ul>
//       {skills.map((skill, index) => (
//         <li key={index}>{skill}</li>
//       ))}
//     </ul>
//   );
// }

// Task16 & 17
// function Card({ name, age }) {
//   return (
//     <div>
//       <h3>{name}</h3>
//       <p>{age}</p>
//     </div>
//   );
// }

// Task18
// function ChildOne({ data }) {
//   return <p>Child One: {data}</p>;
// }

// function ChildTwo({ data }) {
//   return <p>Child Two: {data}</p>;
// }

// function Parent() {
//   return (
//     <div>
//       <ChildOne data="Hello Mohamed Haarish" />
//       <ChildTwo data="Hello Mohamed Haarish" />
//     </div>
//   );
// }

// Task19
// function ChildButton({ onClick }) {
//   return <button onClick={onClick}>Click Me</button>;
// }

// function ParentWithFunction() {
//   const showMessage = () => {
//     alert("Button Clicked!");
//   };
//   return <ChildButton onClick={showMessage} />;
// }

// Task20
// function Header({ message }) {
//   return <h2>Header: {message}</h2>;
// }

// function Content({ message }) {
//   return <p>Content: {message}</p>;
// }

// function Footer({ message }) {
//   return <h4>Footer: {message}</h4>;
// }

function App() {
  const appMessage = "Hello from Mohamed Haarish";

  return (
    <div className="App">
      {/* <Name /> */}
      {/* <HelloUser /> */}
      {/* <User name="Mohamed Haarish" /> */}
      {/* <Person name="Mohamed Haarish" age={21} /> */}
      {/* <UserInfo user={{ name: "Mohamed Haarish", email: "mohamedhaarish@gmail.com" }} /> */}
      {/* <Card name="Mohamed Haarish" age="21" /> */}
      {/* <Parent /> */}
      {/* <Header message={appMessage} />
      <Content message={appMessage} />
      <Footer message={appMessage} /> */}
    </div>
  );
}

export default App;