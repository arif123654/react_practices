import { Container } from "react-bootstrap"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          {/* <h1>Welcome to ProShop</h1> */}
          <HomePage />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
