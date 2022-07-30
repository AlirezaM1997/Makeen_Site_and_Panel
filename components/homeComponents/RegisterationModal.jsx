import { useSelector, useDispatch } from "react-redux";
import { showHideModalAction } from "../../slices/showRegistrationModalSlice";

export default function RegisterationModal(props) {
  const modalMode = useSelector((state) => state.modalMode.value);
  const dispatch = useDispatch();
  return (
    <>
      <section>
        <div className="">
          <div
            className={`${
              modalMode ? "block" : "hidden"
            } fixed w-full h-full top-0 left-0 z-[1001] p-[48px] bg-[#4D6982] backdrop-blur-[10px]`}
            onClick={() => dispatch(showHideModalAction(false))}
          >
            <section
              className="bg-white absolute rounded-[20px] shadow-[10px_10px_20px_#00000014] w-[85%] h-[85%] p-5 pt-6 right-1/2 bottom-1/2 translate-x-2/4 translate-y-1/2"
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
