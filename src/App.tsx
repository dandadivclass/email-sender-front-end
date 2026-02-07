import './App.css'
import { ButtonWithText } from './components/ButtonWithText'
import { TotalCards } from './components/TotalCards'
import { NextBill } from './components/NextBill'
import { MonthlyResume } from './components/MonthlyResume'

function App() {

  return ( 
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

      <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center my-4 px-3 py-4 gap-3 gap-sm-4">
        <div className="yellow-div d-flex justify-content-center align-items-center p-4">
          <span><i className="bi bi-calendar3" style={{ color: "#F5A507" }}></i></span>
        </div>
        <div className="d-flex flex-column text-start justify-content-center">
          <h5 className="p-0 m-0 text-start yellow-grad ">Resumo Mensal</h5>
          <p className="p-0 m-0 text-white">Visualize suas contas agrupadas por mês</p>
        </div>
      </div>

      <MonthlyResume
        iconCardOne={<span><i className="bi bi-calendar" style={{ color: "#F5A507" }}></i></span>}
        dateBill="Janeiro de 2026"
        totalBills='5 Contas'
        iconCardTwo={<span><i className="bi bi-check-circle"></i></span>}
        paidValue='R$89,90'
        pendingValue='R$500,00'
        totalValue='R$589,90'
        accordionIcon={<span><i className="bi bi-arrow-down-short"></i></span>}>
      </MonthlyResume>

    </section> 
  )
}

export default App
