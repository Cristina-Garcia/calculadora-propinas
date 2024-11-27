import type {MenuItem} from "../types"

type MenuItemProps ={
 item:MenuItem,
 addItem: (item:MenuItem)=> void
}

export default function MenuItem({item, addItem}: MenuItemProps) {
  return (
    <>
      <button className="rounded-md border-2 border-teal-800 hover:bg-teal-500 w-full p-3 flex justify-between font-bold " onClick={()=>addItem(item)}>
        <p>{item.name}</p>
        <p>{item.price}</p>
      </button>
    </>
  )
}
