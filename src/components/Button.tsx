import { IButton } from '@/interfaces/Button';

const Button = ({type, onClick, text}: IButton) => {
  return (
    <button
      className="p-1 text-base mx-2 border-2 border-slate-800 rounded mt-1 w-full md:w-fit"
      type={ type }
      onClick={onClick}
    >
      {text}
    </button>
  )
};

export default Button;
