import { observer } from "mobx-react-lite"
import { useStore } from "../Hooks/UseStore"

const Cart = observer(() => {
    const {rootStore : {cartStore}} = useStore()
    return (
        <div>
            {cartStore.cartProducts.length}
        </div>
    )
})

export default Cart