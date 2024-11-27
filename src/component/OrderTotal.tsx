import { useCallback} from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalProps = {
  order: OrderItem[],
  tip: number,
  placeOrder: ()=>void
}
export function OrderTotal({order, tip, placeOrder}: OrderTotalProps) {

  const subTotal =useCallback(()=>order.reduce((acc, item)=> acc + (item.price * item.quantity), 0), [order])
  const tipAmount = useCallback(()=>subTotal() * tip, [tip, order])
  const totalAmount = useCallback(()=>subTotal() + tipAmount(), [tip, order])

  return (
     <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Total y Propina:</h2>
        <p>Subtotal a pagar:{''}
          <span className="font-bold">{formatCurrency(subTotal())}</span>
        </p>
        <p>Propina:{''}
          <span className="font-bold">{formatCurrency(tipAmount())}</span>
        </p>
        <p>Total a pagar:{''}
          <span className="font-bold">{formatCurrency(totalAmount())}</span>
        </p>
      </div>
      <button className="w-full bg-black p-3 uppercase text-white font-bold mt-10" disabled={totalAmount()===0} onClick={placeOrder}> Guardar Orden</button>
     </>
  )
}
