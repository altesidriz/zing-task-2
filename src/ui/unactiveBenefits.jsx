import { FcCheckmark } from 'react-icons/fc';

const UnActiveBenefits = ({text}) => {
  return (
    <div className='w-full flex items-center justify-start gap-4'>
        <FcCheckmark style={{opacity: 0.5}}/>
      <p className="line-through text-black/50 opacity-50">{text}</p>
    </div>
  );
};
export default UnActiveBenefits;