import "./index.css"; 

interface ButtonWithTextProps {
    iconOne?: React.ReactNode;
    iconTwo?: React.ReactNode;
    title: string;
    desc: string;
    buttonLabel: string;
}  

export function ButtonWithText({iconOne, iconTwo, title, desc, buttonLabel}: ButtonWithTextProps) {
    return ( 
        <div className="div-button-with-text d-flex justify-content-start flex-column mb-5">
            <div className="d-flex align-items-center mb-3">
                <div className="yellow-div d-flex justify-content-center align-items-center">
                    {iconOne}
                </div>
                <h1 className="text-white ms-2 p-0 m-0">{title}</h1>
            </div>
            <div className="d-flex align-items-center">
                <p className="fs-5">{desc}</p>
            </div>

            <div className="d-flex align-items-center">
                <button 
                className="py-1 px-3"
                onClick={() => alert("Clicou no botão Nova Conta!")}>
                    <div className="d-flex align-items-center gap-2">
                        {iconTwo}
                        {buttonLabel} 
                    </div>
                </button>
            </div>
        </div> 
    )
}