import './App.css'
import { ButtonWithText } from './components/ButtonWithText'
import { TotalCards } from './components/TotalCards'
import { NextBill } from './components/NextBill'
function App() {

  return (
    <>
      <section className='container'>
        <ButtonWithText
          iconOne={<span><i className="bi bi-file-earmark-text fs-4 p-0 m-0" style={{ color: "#F5A507" }}></i></span>}
          title='Memorial de Contas'
          desc='Acompanhe suas dívidas e mantenha tudo sob controle.'
          buttonLabel='Nova Conta'
          iconTwo={<span><i className="bi bi-plus fs-4"></i></span>}
        ></ButtonWithText>

        <div className='d-flex justify-content-between align-items-center flex-wrap gap-4'>
          <TotalCards
            variant="pending"
            icon={<i className="bi bi-wallet" />}
            desc="Total Pendente"
            total="R$ 5.041,30"
          />

          <TotalCards
            variant="overdue"
            icon={<i className="bi bi-graph-down-arrow" />}
            desc="Total Vencido"
            total="R$ 341,40"
          />

          <TotalCards
            variant="expired"
            icon={<i className="bi bi-exclamation-triangle" />}
            desc="Contas Vencidas"
            total="2 contas"
          />
        </div>

        <NextBill
          icon={<span><i className="bi bi-lightning-charge fs-4 p-0" style={{ color: "#F5A507" }}></i></span>}
          descCard="Próxima Conta"
          title="Conta de Luz"
          value="R$ 210,45"
          dueDate="10 de Agosto"
          iconTime={<span><i className="bi bi-clock me-2" style={{ color: "#F5A507" }}></i></span>}
          timeRemaining="5 dias restantes"
          descBill="Pagar sua conta de luz para evitar cortes no fornecimento.">
        </NextBill>
      </section>
    </>
  )
}

export default App
