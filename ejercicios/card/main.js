const root = document.getElementById('root')
const e = React.createElement

// Card
// Crear un componente Card que renderice un elemento article y que pueda contener elementos dentro suyo
// Crear un componente CardTitle que renderice un elemento h3 y que pueda contener texto dentro suyo
// Crear un componente CardDescription que renderice un elemento p y que pueda contener texto dentro suyo
// Crear un componente CardActions que renderice un elemento div y que pueda contener elementos dentro suyo. Dicho div debe contener la propiedad display: flex
// Crear un componente CardAction que renderice un elemento button y que pueda contener texto dentro suyo

const CardAction = ({ children }) =>
{
  return <button>{children}</button>
}

const CardActions = ({ children }) =>
{
  return <div style={{ display: "flex" }}>{children}</div>
}

const CardDescription = ({ children }) =>
{

  return <p>{children}</p>
}

const CardTitle = ({ children }) =>
{
  return <h3>{children}</h3>
}

const Card = ({ children }) =>
{
  return <article>{children}</article>
}

const App = () =>
{
  return (
    <div>
      <Card>
        <CardTitle>Sarasa</CardTitle>
        <CardDescription>Lorem Ipsum</CardDescription>
        <CardActions>
          <CardAction>Hola</CardAction>
          <CardAction>Chau</CardAction>
        </CardActions>
      </Card>
      <Card>
        <CardTitle>Sarasa</CardTitle>
        <CardDescription>Lorem Ipsum</CardDescription>

      </Card>
      <Card>
        <CardDescription>Lorem Ipsum</CardDescription>
        <CardActions>
          <CardAction>Hola</CardAction>
          <CardAction>Chau</CardAction>
        </CardActions>
      </Card>
    </div>
  )
}




ReactDOM.render(<App />, root)
