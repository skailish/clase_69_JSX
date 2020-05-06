const root = document.getElementById("root");

// UserGreeting
// Crear un componente UserGreeting que acepte una prop user (que es un string). Si user tiene algún valor, debe renderizar un componente p que diga Welcome ${user} y un componente a que diga Logout, en cambio si user no tiene ningún valor, debe mostrar dos componentes a, uno que diga Login y otro Register. Separar luego ambas opciones en dos componentes distintos: GuestUserMessage (para cuando user no tiene ningún valor) y LoggedUserMessage,
// List
// Crear un componente List que acepte una prop items que sea un array de strings, y renderice un componente ul con componentes li por cada string de items. Si items está vacío o no está definido, se debe mostrar un componente p que diga Sorry, this list is empty
// Field
// Crear un componente PasswordField que acepte una prop status que es un string con los valores posibles: "default", "error", "valid". El componente Field debe renderizar un label que diga "Password" y un input de tipo password. Si status tiene el valor "valid", debe mostrar el input con un borde de color verde. Si tiene el valor "error", debe mostrar el input con un borde de color rojo y renderizar debajo del input un componente small en color rojo que diga: "Invalid password, please try again"

const UserGreeting = ({ user }) => {
  return (
    <div>
      {user != "" && <GuestUserMessage user={user} />}
      {user === "" && <LoggedUserMessage />}
    </div>
  );
};
const GuestUserMessage = ({ user }) => {
  return (
    <div>
      <p>Welcome {user}</p>
      <a href="#">Logout</a>
    </div>
  );
};
const LoggedUserMessage = ({}) => {
  return (
    <div>
      <a href="#">Login</a>
      <br />
      <a href="#">Register</a>
    </div>
  );
};

const List = ({ items }) => {
  const ulItems = items.map((item) => <li>{item}</li>);
  return (
    <div>
      {items.length > 0 && <ul>{ulItems}</ul>}
      {items.length == 0 && <p>Sorry, this list is empty</p>}
    </div>
  );
};

const PasswordField = ({ status }) => {
  return (
    <div>
      <label>Password</label>
      <input
        type={"password"}
        style={{ borderColor: status == "valid" ? "green" : "red" }}
      />
      {status == "error" && (
        <small style={{ color: "red" }}>
          Invalid password, please try again
        </small>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div>
      {/* <div>
        <UserGreeting user={""} />
      </div> */}
      {/* <div>
        <List items={["hola", "claro", "tercer item", "todo bien"]} />
      </div> */}
      <div>
        <PasswordField status={"error"} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, root);
