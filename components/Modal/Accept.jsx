import { useEffect } from "react";
import './Modal.css'

export default function Modal({ showModal, setShowModal }) {
  console.log("show", setShowModal);
  useEffect(() => {
    if (showModal) {
      document.body.classList.add('pointer-events-none', 'overflow-hidden');
    } else {
      document.body.classList.remove('pointer-events-none', 'overflow-hidden');
    }

    return () => {
      document.body.classList.remove('pointer-events-none', 'overflow-hidden');
    };
  }, [showModal]);
  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative mx-auto my-6 w-auto max-w-3xl">
              <div className="bg-white relative flex w-full flex-col rounded-lg border-2 border-white shadow-lg outline-none focus:outline-none dark:bg-white">
                <div className="border-blueGray-200 flex items-start justify-between rounded-t border-b border-solid p-5">
                  <h3 className="text-3xl font-semibold">Disclaimer</h3>
                  <button
                    className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                  </button>
                </div>
                <div className="relative flex-auto p-6">
                  <p className="text-blueGray-500 my-4 text-lg leading-relaxed">
                    Legal Notice: Pursuant to The Bar Council of India Rules and
                    The Advocates Act, 1961, advocates refrain from client
                    solicitation through advertisements. This URL is not for
                    solicitation but provides essential information about our
                    profession and services to existing clients.
                    <br />
                    The content on this URL is not comprehensive legal advice;
                    it serves as an introduction only. To learn more about us
                    and our services, kindly click the Agree button below.
                  </p>
                </div>
                <div className="border-blueGray-200 flex items-center justify-end rounded-b border-t border-solid p-6">
                  <button
                    className="mb-1 mr-1 rounded bg-emerald-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                    type="button"
                    style={{pointerEvents:'auto'}}
                    onClick={() => {
                      sessionStorage.setItem("showModal", true);
                      setShowModal(false);
                    }}
                  >
                    Agree
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25 pointer-events-none"></div>
        </>
      ) : null}
    </>
  );
}
