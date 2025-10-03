import Form from "./components/Form"
import List from "./components/List"
import { useState } from "react"

const App = () => {
  const [users, setUsers] = useState([
    {name: "mehmet" , email:"mehmetahmet@gmail.com", age:"30"},
    {name: "Ali" , email:"alihttps@gmail.com", age:"40"},
    {name: "Ayşe" , email:"ayseweb@gmail.com", age:"29"},
    { name: "Kerem", email: "keremcan@example.com", age: "29" },
    { name: "Elif", email: "elifsu@example.com", age: "35" },
    { name: "Mustafa", email: "mustafademir@example.com", age: "42" },
    { name: "Burak", email: "burakkaya@example.com", age: "51" },
  ])

  
  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className="container ">
      <h2 className="text-center my-5">Kullanıcı Paneli</h2>

      <Form addUser={addUser} />

      <List users={users} />
    </div>
  );
};

export default App;