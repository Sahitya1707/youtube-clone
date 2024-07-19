import { useSelector, useDispatch } from "react-redux";
import { updateActiveDashboard } from "../utils/reduxSlices/activeDashboard";
import { Link } from "react-router-dom";

const SidebarContent = (props) => {
  const { heading, list, icons, activeNumber, link } = props;

  const activeDashboard = useSelector((store) => {
    return store.activeDashboard.activeDashboard;
  });

  const dispatch = useDispatch();

  return (
    <>
      {heading ? (
        <h1 className="font-bold xl:text-xl lg:text-md text-sm">{heading}</h1>
      ) : null}

      <ul
        className="border-b-2 border-[#8080804e] border-solid pb-3
     
      
      "
      >
        {list &&
          list.map((e, i) => {
            return (
              <Link to={`/${link[i]}`} key={i}>
                <li
                  className={`flex items-center gap-x-2 sm:gap-x-4 text-xl sm:my-3 my-1 
                cursor-pointer   px-2 rounded-lg py-1 hover:duration-75 hover:transition-all  
                ${activeDashboard === activeNumber[i] ? `bg-[#80808028]` : ""}
                 ${
                   activeDashboard === activeNumber[i]
                     ? `hover:bg-[#8080804e]`
                     : "hover:bg-[#80808028]"
                 }
                `}
                  onClick={(e) => {
                    // console.log(activeNumber[i]);
                    dispatch(updateActiveDashboard(activeNumber[i]));
                  }}
                  // value={1}
                >
                  <span className="xl:text-xl text-[14px] sm:text-sm lg:text-md">
                    {icons[i]}
                  </span>
                  <p className="font-semibold xl:text-xl lg:text-md sm:text-sm text-[12px]">
                    {e}
                  </p>
                </li>
              </Link>
            );
          })}
      </ul>
    </>
  );
};
export default SidebarContent;
