import { useSelector } from "react-redux";
export default function RegisterationModal(props) {
  const modalMode = useSelector((state) => state.modalMode.value);

  return (
    <>
      <section>
        <div className="container">
          <div
            id="myModal"
            className={`${
              modalMode ? "block" : "hidden"
            } fixed w-full h-full top-0 left-0 z-[1001] bg-[#4D6982] backdrop-blur-[10px]`}
            // onClick={() => props.hideModal()}
          >
            <section
              className="fixed bg-white rounded-3xl transition-all duration-1000 w-[37.5rem] h-[18.75rem] p-5 pt-6 right-2/4 
            bottom-1/2 translate-x-2/4 translate-y-1/2 animate-[opac_1s_ease-in-out]"
              onClick={(e) => e.stopPropagation()}
            >
              kkkkkkkkkkkkkkkkkkkkkkkk
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
