const Button = ({ type }) => {
  let style = '';
  if (type === 'dark') {
    style = 'm-4 w-full h-auto flex flex-row items-center justify-center bg-[#150050] border-2 border-[#DCDCDC] rounded-md text-white font-bold text-lg';
  } else if (type === 'light') {
    style = 'm-4 w-full h-max flex flex-row items-center justify-center bg-none border-[1px] border-black/50 rounded-md text-black font-bold text-lg';
  }
  return (
    <button className={style}>
      <span className="py-6">Try for Free</span>
    </button>
  );
};
export default Button;