import { useSelector } from "react-redux";

const SidebarContent = (props) => {
  const { heading, list, icons, activeDashboard } = props;
  console.log(activeDashboard);
  const activeNumber = useSelector((store) => {
    return store.activeDashboard.activeDashboard;
  });

  console.log(activeNumber);
  return (
    <>
      {heading ? <h1 className="font-bold">{heading}</h1> : null}

      <ul
        className="border-b-2 border-[#8080804e] border-solid pb-3
      
      
      "
      >
        {list &&
          list.map((e, i) => {
            return (
              <li
                className={`flex items-center gap-x-4 text-xl my-3 
                cursor-pointer 
                
                hover:bg-[${
                  activeNumber === activeDashboard[i] ? "yellow" : "#80808028"
                }]
                   px-2 rounded-lg py-1 hover:duration-75 hover:transition-all bg-[${
                     activeNumber === activeDashboard[i] ? `skyblue` : ""
                   }] text-[${
                  activeNumber === activeDashboard[i] ? `skyblue` : ""
                }] 
                `}
                key={i}
                onClick={(e) => {
                  console.log(e.target);
                  console.log("This active");
                  console.log(activeDashboard[i]);
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
