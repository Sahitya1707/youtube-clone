import { useSelector, useDispatch } from "react-redux";
import { updateActiveDashboard } from "../utils/reduxSlices/activeDashboard";

const SidebarContent = (props) => {
  const { heading, list, icons, activeNumber } = props;

  const activeDashboard = useSelector((store) => {
    return store.activeDashboard.activeDashboard;
  });

  const dispatch = useDispatch();

  return (
    <>
      {heading ? <h1 className="font-bold">{heading}</h1> : null}

      <ul
        className="border-b-2 border-[#8080804e] border-solid pb-3
      
      
      "
      >
        {list &&
          list.map((e, i) => {
            console.log(activeDashboard);
            return (
              <li
                className={`flex items-center gap-x-4 text-xl my-3 
                cursor-pointer   px-2 rounded-lg py-1 hover:duration-75 hover:transition-all
                ${activeDashboard === activeNumber[i] ? `bg-[#80808028]` : ""}
                 ${
                   activeDashboard === activeNumber[i]
                     ? `hover:bg-[#8080804e]`
                     : "hover:bg-[#80808028]"
                 }
                `}
                key={i}
                onClick={(e) => {
                  // console.log(activeNumber[i]);
                  dispatch(updateActiveDashboard(activeNumber[i]));
                }}
                // value={1}
              >
                <span>{icons[i]}</span>
                <p className="font-semibold">{e}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
};
export default SidebarContent;
