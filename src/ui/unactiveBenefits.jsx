import { FcCheckmark } from 'react-icons/fc';

const UnActiveBenefits = ({text}) => {
  return (
    <div className='w-full flex items-center justify-start gap-4'>
        <FcCheckmark style={{opacity: 0.5}}/>
      <span className="line-through text-black opacity-50">{text}</span>
    </div>
  );
};
export default UnActiveBenefits;