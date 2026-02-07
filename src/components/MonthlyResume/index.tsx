import * as Accordion from "@radix-ui/react-accordion";
import './index.css'

interface MonthlyResumeProps {
    iconCardOne: React.ReactNode;
    dateBill: string;
    totalBills: string;
    iconCardTwo: React.ReactNode; 
    paidValue: string;
    pendingValue: string;
    totalValue: string;
    accordionIcon: React.ReactNode;
}

export function MonthlyResume({ iconCardOne, dateBill, totalBills, iconCardTwo, paidValue, pendingValue, totalValue, accordionIcon }: MonthlyResumeProps) {
    return (
        <Accordion.Root type="single" collapsible>
            <Accordion.Item value="jan">

                <Accordion.Trigger className="bill-trigger w-100 d-flex justify-content-between gap-5 rounded-4 p-4">

                    {/* HEADER  */}

                    <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center py-2 gap-3 gap-sm-4">
                        <div className="yellow-div d-flex justify-content-center align-items-center p-4">
                            <span>{iconCardOne}</span>
                        </div>
                        <div className="d-flex flex-column text-start justify-content-center">
                            <h5 className="p-0 m-0 text-white text-start">{dateBill}</h5 >
                            <p className="p-0 m-0">{totalBills}</p>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center py-2 gap-4 gap-sm-4">
                        <div className="paid-bills-total-accordion d-flex justify-content-center align-items-center gap-3">
                            <div>
                                <span>{iconCardTwo}</span>
                            </div>
                            <div>
                                <p className="p-0 m-0 text-end p-pago">Pago</p>
                                <h5>{paidValue}</h5>
                            </div>
                        </div>
                        <div className="pending-bills-total-accordion d-flex justify-content-center align-items-center">
                           <div>
                                <p className="p-0 m-0 text-end">Pendente</p>
                                <h5 className="text-white">{pendingValue}</h5>
                            </div>
                        </div>
                        <div className="total-bills-accordion d-flex justify-content-center align-items-center">
                           <div>
                                <p  className="p-0 m-0 text-end">Total</p>
                                <h5 className="text-white yellow-grad">{totalValue}</h5>
                            </div>
                        </div>

                        <span>{accordionIcon}</span>
                    </div>


                </Accordion.Trigger>

                <Accordion.Content>
                    BODY
                </Accordion.Content>

            </Accordion.Item>
        </Accordion.Root>
    )
}