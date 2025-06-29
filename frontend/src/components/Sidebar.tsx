import { navItems } from "@/constants";
import { cn } from "@/lib/utils";
import  { useContext } from "react";
import { useLocation } from "react-router-dom";
import { RootContext } from "./RootContext";

const Sidebar = () => {
  const pathName = useLocation().pathname;
  const {logout} = useContext<any>(RootContext);

  return (
    <div className="w-[245px] h-screen bg-[#1A1C22] px-4 py-10 flex flex-col gap-6 max-lg:hidden">
      {/* Logo */}
      <div className="flex items-center justify-center mb-10">
        <img src="Logo.png" alt="Logo" className="w-[140px] h-[30px]" />
      </div>

      <div className="flex flex-col gap-8 px-5">
        {/* Navigation Items */}
        {navItems.map((item) => {
          const isActive = pathName === item.route;

          const map: any = {
            dashboard: (
              <i
                className={cn("fa-brands fa-windows text-slate-400 text-2xl", {
                  "text-green-400": isActive,
                })}
              ></i>
            ),
            transactions: (
              <i
                className={cn(
                  "fa-solid fa-money-bill text-slate-400 text-2xl",
                  { "text-green-400": isActive }
                )}
              ></i>
            ),
            wallet: (
              <i
                className={cn("fa-solid fa-wallet text-slate-400 text-2xl", {
                  "text-green-400": isActive,
                })}
              ></i>
            ),
            analytics: (
              <i
                className={cn(
                  "fa-solid fa-chart-simple text-slate-400 text-2xl",
                  { "text-green-400": isActive }
                )}
              ></i>
            ),
            personal: (
              <i
                className={cn("fa-solid fa-user text-slate-400 text-2xl", {
                  "text-green-400": isActive,
                })}
              ></i>
            ),
            messages: (
              <i
                className={cn("fa-solid fa-message text-slate-400 text-2xl", {
                  "text-green-400": isActive,
                })}
              ></i>
            ),
            settings: (
              <i
                className={cn("fa-solid fa-gear text-slate-400 text-2xl", {
                  "text-green-400": isActive,
                })}
              ></i>
            ),
          };

          return (
            <a href={item.route} key={item.name}>
              <div className="flex items-center relative">
                {map[item.iconUrl]}
                <span
                  className={cn("text-slate-400 text-lg ml-4", {
                    "text-green-400": isActive,
                  })}
                >
                  {item.name}
                </span>

                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute right-0 top-1 h-[90%] w-[8px] bg-yellow-400 rounded-l-lg"></div>
                )}
              </div>
            </a>
          );
        })}
      </div>

      <div className="mt-auto flex items-center gap-4 text-slate-400 text-lg px-5 cursor-pointer ml-4" onClick={logout}>
        <h1>Logout <i className="fa-solid fa-right-from-bracket"></i></h1>
      </div>
    </div>
  );
};

export default Sidebar;
