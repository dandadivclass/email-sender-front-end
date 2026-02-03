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
    <>
      <section className="next-bill-div d-flex flex-column gap-4 px-3 py-4 mt-5">
        <div className="d-flex align-items-center px-3 py-4 gap-4">
          <div className="yellow-div d-flex justify-content-center align-items-center p-4">
            {icon}
          </div>
          <div className="d-flex flex-column text-start justify-content-center">
            <p className="p-0 m-0 text-start yellow-grad ">{descCard}</p>
            <h3 className="p-0 m-0 text-white">{title}</h3>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center px-3 py-1">
          <div className="d-flex flex-column justify-content-center">
            <span className="next-bill-div-text text-start">Valor</span>
            <h3 className="yellow-grad ">{value}</h3>
          </div>
          <div className="d-flex flex-column justify-content-center">
            <span className="next-bill-div-text text-start">Vencimento</span>
            <p className="text-white fw-bold fs-5">{dueDate}</p>
          </div>
          <div className="d-flex flex-column justify-content-center">
            <span className="next-bill-div-text text-start">Tempo Restante</span>
            <div className="d-flex">
              {iconTime}
              <p className="text-white fw-bold fs-5">{timeRemaining}</p>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-start px-3 py-1">
          <p className="next-bill-div-text">{descBill}</p>
          <button className='btn btn-next-bill'>
            <i className="bi bi-check me-2"></i>
            <span>Marcar como Pago</span>
          </button>
        </div>
      </section>
    </>
  )
}