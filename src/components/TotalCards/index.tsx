import './index.css'

type TotalCardVariant = 'pending' | 'overdue' | 'expired';

interface TotalCardsProps {
  variant: TotalCardVariant;
  icon: React.ReactNode;
  desc: string;
  total: string;
} 

export function TotalCards({ variant, icon, desc, total }: TotalCardsProps) {
  return (
    <div className={`total-cards-div d-flex justify-content-start align-items-center gap-3 px-3 py-4 total-cards--${variant}`}>
      <div className=" d-flex justify-content-center align-items-center total-cards__icon">
        {icon}
      </div>

      <div className="d-flex flex-column justify-content-center total-cards__content">
        <p className="p-0 m-0 text-start total-cards__desc">{desc}</p>
        <h4 className="text-white fw-bold p-0 m-0 total-cards__total">{total}</h4>
      </div>
    </div>
  );
}