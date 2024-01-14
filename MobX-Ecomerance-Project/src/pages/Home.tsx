import Navbar from '../components/Navbar'
import AllProducts from '../components/AllProducts'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="flex flex-col space-y-10">
      <Navbar />
      <AllProducts />
      <Footer />
    </div>
  )
}

export default Home