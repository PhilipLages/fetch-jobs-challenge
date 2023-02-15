import { IButton } from '@/interfaces/Button';

export const Button = ({type, onClick, text}: IButton) => {
  return (
    <button
    className="mx-2 border-2 border-slate-800 rounded mt-1 mb-1"
    type={ type }
    onClick={onClick}
    >
      {text}
    </button>
  )
}
