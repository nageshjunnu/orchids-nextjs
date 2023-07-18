import React from 'react';
import Link from 'next/link';

const cancellation = () => {
  return (
    <React.Fragment>
      <main className="th-container my-5" style={{ minHeight: "90vh" }}>
    <div className={"containers-legal bg-white " } >
    <h1 className={"fw-bold text-center"}> Cancellation / Refund Policy</h1>
      <div className={"row align-items-center"}>
       
          <div className={"containers-legal "}>
   <div className="accordion accordion-flush" id="accordionFlushExample">
                  <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                      Cancellation of Admission / Refund Policy of Fees
                      </button>
                      </h2>
                      <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" aria-labelledby="flush-headingOne">
                      <div className="accordion-body">
                      <p>Orchids International School reserves the right to cancel the admission / registration of the student during any period of the academic session. Once the student admission process is completed, no refund of fees to the student would be entertained.</p>
                      </div>
                      </div>
                  </div>

                    <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Cancellation by the Parent 
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" aria-labelledby="flush-headingTwo">
                    <div className="accordion-body">
                    <p>
                       If the parent chooses to withdraw the admission of the student from the school for any reason whatsoever,  no refund of amount paid would be given back.
                       </p>
                       <p>
                       If for any reason, the parent / student has paid in excess of the required amount at any time during the academic session either by cheque, draft, credit/debit card, Electronic Fund Transfer or cash, the excess fee amount collected would be adjusted against the ensuing term payments.
                       </p>
                    </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Cancellation by Orchids International School
                    </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" aria-labelledby="flush-headingThree">
                    <div className="accordion-body">
                    <p>If circumstances cause Orchids International School to cancel the admission, the school will inform the student / parent concerned regarding the reasons for cancellation..</p>
                    <p>In the event of the case for cancellation of admission being found genuine and legitimate, the school management will refund the fees (amount to be considered on a case to case basis) to the / student by means of a crossed cheque in favour of the name of the parent.</p>
                    </div>
                    </div>
                </div>

              
              </div>
              
          </div>
          
          
    </div>
    </div>
 
    </main>
    </React.Fragment>
  )
}

export default cancellation