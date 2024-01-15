import Card, { ProductRoot } from "./Card"
import { useStore } from "../Hooks/UseStore"
import { observer } from "mobx-react-lite"
import { useEffect } from "react"

const AllProducts = observer(() => {
  const {rootStore : {productsStore}} = useStore()
  useEffect(() => {
    productsStore.fetchProducts()
  }, [])
  return (
    <div className="grid grid-cols-4 gap-5">
        {
          productsStore.products.map((pro : ProductRoot)  => {
            return (
              <Card  key={pro.id} product = {pro}/>
            )
          })
        }
    </div>
  )
})

export default AllProducts