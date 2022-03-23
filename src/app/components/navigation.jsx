import '../css/navigation.css'

export const NavigationView = () => {
  return (
    <div className="home__navigation">
      <div className="home__navigation__logo">
        <h1>Markai</h1>
      </div>
      <div className="home__navigation__options">
        <p>Features</p>
        <p>Products</p>
        <p>Company</p>
        <p>Pricing</p>
        <p>Support</p>
      </div>
      <div className="home__navigation__sign">
        <button className="home__navigation__signIn">Login</button>
        <button className="home__navigation__signUp">Register</button>
      </div>
    </div>
  )
}
