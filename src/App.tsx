import React, { useState } from "react";

type inputChangeEvent = React.ChangeEvent<HTMLInputElement>;

const App = () => {
const [name, setName] = useState('João');
const [surname, setSurname] = useState('Silva');
const [age, setAge] = useState('20');

const handleName = (ev: inputChangeEvent) =>{
  setName(ev.target.value);
}

const handleSurname = (ev: inputChangeEvent) =>{
  setSurname(ev.target.value);
}

const handleAge = (ev: inputChangeEvent) =>{
  setAge(ev.target.value);
}

  return(
    <div>
      <div>
        Nome:
        <input type='text' value={name} onChange={handleName} />
      </div>

      <div>
        Sobrenome:
        <input type='text' value={surname} onChange={handleSurname} />
      </div>

      <div>
        Idade:
        <input type='text' value={age} onChange={handleAge}/>
      </div>

      <hr />
      Olá {`${name} ${surname}`}, tudo bem?
      Você tem {age} anos.
    </div>
  );
}
export default App;