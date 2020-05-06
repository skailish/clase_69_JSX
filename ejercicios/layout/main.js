const root = document.getElementById("root");
const e = React.createElement;

// Header
// Crear un componente Header que renderice un elemento header y que pueda contener componente dentro suyo
// NavMenu
// Crear un componente Nav que renderice un elemento nav y un elemento ul dentro del nav, el componente debe poder contener elementos dentro suyo
// El elemento ul debe tener el estilo display: flex y list-style: none
// El componente NavMenu debe aceptar la prop direction con los valores "row" o "column", siendo "row" el valor por defecto, y cambiar el valor de la propiedad flex-direction del elemento ul en consecuencia
// NavItem
// Crear un componente MenuItem que renderice un componente li con un componente a, el componente debe poder contener elementos dentro suyo
// El elemento li debe tener el estilo display: flex
// Debe aceptar la prop path que corresponde al atributo href del componente a
// Main
// Crear un componente Main que renderice un componente main y que pueda contener componente dentro suyo
// Footer
// Crear un componente Footer que renderice un componente footer y que pueda contener componente dentro suyo
// Crear un layout usando los componentes anteriores, de la siguiente forma:

// <Header>
//   <NavMenu>
//     <NavItem path='/home'>Home</NavItem>
//     <NavItem path='/about-us'>About Us</NavItem>
//     <NavItem path='/contact'>Contact</NavItem>
//   </Menu>
// </Header>
// <Main>
//   Hola mundo
// </Main>
// <Footer>® 2020 - All rights reserved</Footer>

const Header = ({ children }) => {
  return <header>{children}</header>;
};

const NavMenu = ({ direction = "row", children }) => {
  const misEstilos = {
    display: "flex",
    flexDirection: `${direction}`,
    listStyle: "none",
  };
  return (
    <nav>
      <ul style={{ ...misEstilos }}>{children}</ul>
    </nav>
  );
};

const NavItem = ({ path, children }) => {
  return (
    <li style={{ display: "flex" }}>
      <a href={path}>{children}</a>
    </li>
  );
};

const Main = ({ children }) => {
  return <main>{children}</main>;
};

const Footer = ({ children }) => {
  return <footer>{children}</footer>;
};

const App = () => {
  return (
    <div>
      <Header>
        <NavMenu direction="column">
          <NavItem path="/home">Home</NavItem>
          <NavItem path="/about-us">About Us</NavItem>
          <NavItem path="/contact">Contact</NavItem>
        </NavMenu>
      </Header>
      <Main>Hola mundo</Main>
      <Footer>® 2020 - All rights reserved</Footer>
    </div>
  );
};

ReactDOM.render(<App />, root);
