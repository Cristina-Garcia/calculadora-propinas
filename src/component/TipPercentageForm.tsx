import type { Dispatch, SetStateAction } from "react"
const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]
type TipPercentageFormProps = {
  setTip: Dispatch<SetStateAction<number>>,
  tip: number
}
export const TipPercentageForm = ({setTip, tip}:TipPercentageFormProps) => {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>
      <form action="">
        <div className="flex gap-2">
          {
            tipOptions.map(option => (
              <label key={option.id} htmlFor={option.id}>
                <input type="radio" name="tip" id={option.id} value={option.value} onChange={e=>setTip(+e.target.value)} checked={option.value === tip}/>
                {option.label}
              </label>
            ))
          }
        </div>
      </form>
    </div>
  )
}
