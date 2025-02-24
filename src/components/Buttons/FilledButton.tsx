import Link from "next/link";

const FilledButton = ({ backgroundColor, children, handleClick, textColor, textD }:{ children: React.ReactNode, backgroundColor?: string, textColor?: string,
  textD?:string, handleClick?:any
 }) => {
  return (
    <button
      onClick={handleClick}
      className={`bg-${backgroundColor || '#7B90FF'} rounded-xl text-${textColor || 'white'} px-6 py-3 font-bold capitalize inline-flex gap-2 text-xl ${textD}`}
    >
      {children}
    </button>
  );
};

export default FilledButton;
