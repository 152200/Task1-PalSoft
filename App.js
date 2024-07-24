import "./App.css";
import FunctionalGreeting from './task1/FunctionalGreeting'
import ClassGreeting from './task1/ClassGreeting';
export default function App() {
  return (
   <>
    <FunctionalGreeting name="Nate" message="Welcome to our website!" />
      <ClassGreeting name="Nate" message="Have a great day!" />
   </>
  );
}
