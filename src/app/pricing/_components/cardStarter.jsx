import ActiveBenefits from '@/ui/activeBenefits';
import Button from '@/ui/button';
import UnActiveBenefits from '@/ui/unactiveBenefits';

const active = [
  '2 team members',
  '1,000 Contacts & Companies',
  '5 Campaign Workflows',
  '10 Nodes Per Campaign',
  '5 Automation Rules (Triggers)',
  '3 Plugins/Integrations'
];

const unactive = [
  'Marketing Automation	',
  'Custom Deal Tracks',
  'Automated Voicemails	',
  'Post-call Automation	'
];

const CardStarter = () => {
  return (
    <div className='p-8 flex flex-col gap-4 rounded-lg bg-white'>
      {/* PLAN NAME */}
      <div className="w-full flex items-center justify-between">
        <span className="font-bold text-2xl">Starter</span>
        <span></span>
      </div>
      {/* Description */}
      <p className="font-medium text-base leading-7">Get organized and set up simple sales processes lorem ipsum</p>
      {/* Price */}
      <div>
        <span className="font-bold text-5xl leading-[58px]">$8,90</span>
        <span className="font-bold text-base text-[#777777]">/month</span>
      </div>
      {/* Button */}
      <Button type="light"/>
      <span className="text-sm text-[#787878]">Free 14-day trial. No credit card required</span>
      {/* Separator */}
      <div className="w-full h-[1px] bg-[#787878]"></div>
      {/* Benefits */}
      {active?.map((t,i) => (
        <ActiveBenefits key={i} text={t} />
      ))}
      {unactive?.map((t,i) => (
        <UnActiveBenefits key={i} text={t} />
      ))
      }
    </div>
  );
};
export default CardStarter;