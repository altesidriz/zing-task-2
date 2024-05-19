import ActiveBenefits from '@/ui/activeBenefits';
import Button from '@/ui/button';
import UnActiveBenefits from '@/ui/unactiveBenefits';

const active = [
  '10 team members',
  '1,000 Contacts & Companies',
  '5 Campaign Workflows',
  '10 Nodes Per Campaign',
  '5 Automation Rules (Triggers)',
  '3 Plugins/Integrations',
  'Marketing Automation	',
  'Custom Deal Tracks'
];

const unactive = [
  'Automated Voicemails	',
  'Post-call Automation	'
];

const CardProfessional = () => {
  return (
    <div className='p-8 flex flex-col gap-4 rounded-lg bg-white'>
      {/* PLAN NAME */}
      <div className="w-full flex items-center justify-between">
        <span className="font-bold text-2xl">Professional</span>
        <span className="px-4 py-2 text-xs font-bold rounded-lg bg-green-100 text-green-600">Recommended</span>
      </div>
      {/* Description */}
      <p className="font-medium text-base text leading-7">Everything you need to boost performance and revenue lorem ipsum</p>
      {/* Price */}
      <div>
      <span className="font-bold text-5xl leading-[58px]">$29,90</span>
        <span className="font-bold text-base text-[#777777]">/month</span>
      </div>
      {/* Button */}
      <Button type="dark"/>
      <span className="text-sm text-[#787878]">Free 14-day trial. No credit card required</span>
      {/* Separator */}
      <div className="w-full h-[1px] bg-[#787878]"></div>
      {/* Benefits */}
      {active.map((t,i) => (
        <ActiveBenefits key={i} text={t} />
      ))}
      {unactive.map((t,i) => (
        <UnActiveBenefits key={i} text={t} />
      ))
      }
    </div>
  );
};
export default CardProfessional;