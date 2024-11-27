import { MenuItem } from "./types"
import { menuItems } from "./data/db"
import MenuItems from "./component/MenuItem"
import useOrder from "./hooks/useOrder"
import { OrderContents } from "./component/OrderContents"
import { OrderTotal } from "./component/OrderTotal"
import { TipPercentageForm } from "./component/TipPercentageForm"

function App() {

  const {order, addItem, removeItem,tip,setTip,placeOrder} =useOrder()
  return (
    <>
    <header className="bg-teal-800 py-5">
      <h1 className="text-center text-4xl font-black">Calculadora de propinas y consumo</h1>
    </header>
    <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
      <div className="p-5">
        <h2 className="text-4xl font-black mb-10">Menú</h2>
        <div className="space-y-3">
          {
            menuItems.map((item: MenuItem) => (
              <MenuItems key={item.id} item={item} addItem={addItem}/>
            ))
          }
        </div>
      </div>
      <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
        {
          order.length > 0 ?(
            <>
            <OrderContents order={order} removeItem={removeItem}/>
            <TipPercentageForm  setTip={setTip} tip={tip}/>
            <OrderTotal order={order} tip={tip} placeOrder={placeOrder}/>
            </>
          ):<p className="text-3xl text-gray-700">No hay pedidos</p>
        }

      </div>
    </main>
    </>
  )
}

export default App
