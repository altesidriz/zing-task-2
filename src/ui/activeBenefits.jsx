import { FcCheckmark } from 'react-icons/fc';

const ActiveBenefits = ({text}) => {
  return (
    <div className='w-full flex items-center justify-start gap-4'>
        <FcCheckmark />
      <span>{text}</span>
    </div>
  );
};
export default ActiveBenefits;