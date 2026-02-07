import "./index.css"

interface NextBillProps {
  icon: React.ReactNode;
  descCard: string;
  title: string;
  value: string;
  dueDate: string;
  iconTime: React.ReactNode,
  timeRemaining: string;
  descBill: string;
}

export function NextBill({ icon, descCard, title, value, dueDate, iconTime, timeRemaining, descBill }: NextBillProps) {
  return ( 
      <section className="next-bill-div d-flex flex-column gap-4 px-3 py-4 mt-5">
        <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center px-3  gap-3 gap-sm-4">
          <div className="yellow-div d-flex justify-content-center align-items-center p-4">
            {icon}
          </div>
          <div className="d-flex flex-column text-start justify-content-center">
            <p className="p-0 m-0 text-start yellow-grad ">{descCard}</p>
            <h4 className="p-0 m-0 text-white">{title}</h4>
          </div>
        </div>

        <div className="row px-3 py-1 gy-3">
          <div className="col-12 col-md-4 d-flex flex-column justify-content-center">
            <span className="next-bill-div-text text-start">Valor</span>
            <h3 className="yellow-grad text-start">{value}</h3>
          </div>
          <div className="col-12 col-md-4 d-flex flex-column justify-content-center">
            <span className="next-bill-div-text text-start">Vencimento</span>
            <p className="text-white fw-bold fs-5 text-start">{dueDate}</p>
          </div>
          <div className="col-12 col-md-4 d-flex flex-column justify-content-center">
            <span className="next-bill-div-text text-start">Tempo Restante</span>
            <div className="d-flex">
              <span className="mt-1">{iconTime}</span> 
              <p className="text-white fw-bold fs-5 text-start">{timeRemaining}</p>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-start px-3 py-1">
          <p className="next-bill-div-text text-start">{descBill}</p>
          <button className="px-3 py-2 btn-next-bill w-sm-auto">
            <i className="bi bi-check me-2"></i>
            <span>Marcar como Pago</span>
          </button>
        </div>
      </section> 
  )
}