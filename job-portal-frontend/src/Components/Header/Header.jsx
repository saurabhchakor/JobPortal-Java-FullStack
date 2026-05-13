// import { Avatar, Burger, Button, Drawer, Indicator } from "@mantine/core";
// import { IconAnchor, IconAsset, IconBell, IconSettings, IconX } from "@tabler/icons-react";
// import NavLinks from "./NavLinks";
// import ProfileMenu from "./ProfileMenu";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getProfile } from "../../Services/ProfileService";
// import { setProfile } from "../../Slices/ProfileSlice";
// import NotiMenu from "./NotiMenu";
// import { jwtDecode } from "jwt-decode";
// import { setUser } from "../../Slices/UserSlice";
// import { setupResponseInterceptor } from "../../Interceptor/AxiosInterceptor";
// import { useDisclosure, useMediaQuery } from "@mantine/hooks";
// import { hideOverlay, showOverlay } from "../../Slices/OverlaySlice";

// const links = [
//     { name: "Find Jobs", url: "find-jobs" },
//     { name: "Find Talent", url: "find-talent" },
//     { name: "Post Job", url: "post-job/0" },
//     { name: "Posted Jobs", url: "posted-jobs/0" },
//     { name: "Job History", url: "job-history" }
// ]

// const Header = () => {
//     const [opened, { open, close }] = useDisclosure(false);
//     const dispatch = useDispatch();
//     const user = useSelector((state) => state.user);
//     const token = useSelector((state) => state.jwt);
//     const location = useLocation();
//     const navigate = useNavigate();
//     useEffect(() => {
//         setupResponseInterceptor(navigate, dispatch);

//     }, [navigate])
//     const handleClick = (url) => {
//         navigate(url)
//         close();
//     }
//     useEffect(() => {
//         if (token) {
//             if (localStorage.getItem("token")) {
//                 const decoded = jwtDecode(localStorage.getItem("token") || "");
//                 dispatch(setUser({ ...decoded, email: decoded.sub }));
//             }
//         }
//         if (user?.profileId) {
//             // dispatch(showOverlay())
//             getProfile(user?.profileId).then((res) => {
//                 dispatch(setProfile(res));
//             }).catch((err) => console.log(err))
//             // .finally(()=>dispatch(hideOverlay()));
//         }
//     }, [token, navigate]);
//     return (location.pathname != "/signup" && location.pathname != "/login") ? <div data-aos="zoom-out" className="w-full bg-mine-shaft-950 px-6 text-white h-20 flex justify-between items-center font-['poppins']">
//         <div onClick={() => navigate("/")} className="flex gap-1 cursor-pointer items-center text-bright-sun-400">
//             <IconAnchor className="h-8 w-8" stroke={2.5} />
//             <div className=" xs-mx:hidden text-3xl font-semibold">ApnaJob</div>
//         </div>
//         {NavLinks()}
//         <div className="flex gap-3 items-center">

//             {user ? <ProfileMenu /> : <Link to="/login" className="text-mine-shaft-200 hover:text-bright-sun-400 "><Button color="brightSun.4" variant="subtle">Login</Button></Link>}
//             {/* <div className=" bg-mine-shaft-900 p-1.5 rounded-full">
//                 <IconSettings stroke={1.5} />
//             </div> */}
//             {user ? <NotiMenu /> : <></>}
//             {

//             }
//             <Burger className="bs:hidden" opened={opened} onClick={open} aria-label="Toggle navigation" />
//             <Drawer size="xs" overlayProps={{ backgroundOpacity: 0.5, blur: 4 }} position="right" opened={opened} onClose={close} closeButtonProps={{
//                 icon: <IconX size={30} />,
//             }} >
//                 <div className="flex flex-col gap-6 items-center">

//                     {
//                         links.map((link, index) => <div key={index} className=" h-full flex items-center">
//                             <div className="hover:text-bright-sun-400 text-xl " key={index} onClick={() => handleClick(link.url)} >{link.name}</div>
//                         </div>)
//                     }
//                 </div>
//             </Drawer>
//         </div>
//     </div> : <></>
// }
// export default Header;



// import { Burger, Button, Drawer } from "@mantine/core";
// import { IconAnchor, IconX } from "@tabler/icons-react";
// import NavLinks from "./NavLinks";
// import ProfileMenu from "./ProfileMenu";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getProfile } from "../../Services/ProfileService";
// import { setProfile } from "../../Slices/ProfileSlice";
// import NotiMenu from "./NotiMenu";
// import { jwtDecode } from "jwt-decode";
// import { setUser } from "../../Slices/UserSlice";
// import { setupResponseInterceptor } from "../../Interceptor/AxiosInterceptor";
// import { useDisclosure } from "@mantine/hooks";

// const links = [
//   { name: "Find Jobs", url: "find-jobs" },
//   { name: "Find Talent", url: "find-talent" },
//   { name: "Post Job", url: "post-job/0" },
//   { name: "Posted Jobs", url: "posted-jobs/0" },
//   { name: "Job History", url: "job-history" },
// ];

// const Header = () => {
//   const [opened, { open, close }] = useDisclosure(false);
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.user);
//   const token = useSelector((state) => state.jwt);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     setupResponseInterceptor(navigate, dispatch);
//   }, [navigate]);

//   const handleClick = (url) => {
//     navigate(url);
//     close();
//   };

//   useEffect(() => {
//     if (token && localStorage.getItem("token")) {
//       const decoded = jwtDecode(localStorage.getItem("token") || "");
//       dispatch(setUser({ ...decoded, email: decoded.sub }));
//     }

//     if (user?.profileId) {
//       getProfile(user.profileId)
//         .then((res) => dispatch(setProfile(res)))
//         .catch((err) => console.log(err));
//     }
//   }, [token, navigate]);

//   if (location.pathname === "/signup" || location.pathname === "/login") {
//     return null;
//   }

//   return (
//     <div
//       data-aos="fade-down"
//       className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-white/10 px-6 h-20 flex justify-between items-center"
//     >
//       {/* LOGO */}
//       <div
//         onClick={() => navigate("/")}
//         className="flex gap-2 cursor-pointer items-center text-yellow-400"
//       >
//         <IconAnchor className="h-8 w-8" stroke={2.5} />
//         <div className="hidden sm:block text-2xl font-bold tracking-wide">
//           MyJob
//         </div>
//       </div>

//       {/* ✅ FIXED NAV LINKS */}
//       <div className="hidden md:flex gap-6 items-center">
//         <NavLinks />
//       </div>

//       {/* RIGHT */}
//       <div className="flex gap-3 items-center">
//         {!user ? (
//           <Link to="/login">
//             <Button color="yellow" variant="light">
//               Login
//             </Button>
//           </Link>
//         ) : (
//           <ProfileMenu />
//         )}

//         {user && <NotiMenu />}

//         {/* ✅ FIXED BURGER */}
//         <Burger
//           className="md:hidden"
//           opened={opened}
//           onClick={open}
//         />

//         <Drawer
//           size="xs"
//           position="right"
//           opened={opened}
//           onClose={close}
//           overlayProps={{ backgroundOpacity: 0.6, blur: 6 }}
//           className="[&_div]:bg-black text-white"
//           closeButtonProps={{
//             icon: <IconX size={28} />,
//           }}
//         >
//           <div className="flex flex-col gap-6 mt-10 items-center">
//             {links.map((link, index) => (
//               <div
//                 key={index}
//                 onClick={() => handleClick(link.url)}
//                 className="text-lg hover:text-yellow-400 transition cursor-pointer"
//               >
//                 {link.name}
//               </div>
//             ))}
//           </div>
//         </Drawer>
//       </div>
//     </div>
//   );
// };

// export default Header;




//         new file 


import { Burger, Button, Drawer } from "@mantine/core";
import { IconBriefcase, IconX } from "@tabler/icons-react";
import NavLinks from "./NavLinks";
import ProfileMenu from "./ProfileMenu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "../../Services/ProfileService";
import { setProfile } from "../../Slices/ProfileSlice";
import NotiMenu from "./NotiMenu";
import { jwtDecode } from "jwt-decode";
import { setUser } from "../../Slices/UserSlice";
import { setupResponseInterceptor } from "../../Interceptor/AxiosInterceptor";
import { useDisclosure } from "@mantine/hooks";
//  import { ActionIcon } from '@mantine/core';
//  import { HeartIcon } from '@phosphor-icons/react';
//  import { virtualColor } from "@mantine/core";
// import { CloseButton, VisuallyHidden } from '@mantine/core';


const links = [
  { name: "Find Jobs", url: "find-jobs" },
  { name: "Find Talent", url: "find-talent" },
  { name: "Post Job", url: "post-job/0" },
  { name: "Posted Jobs", url: "posted-jobs/0" },
  { name: "Job History", url: "job-history" },
];

const Header = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.jwt);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setupResponseInterceptor(navigate, dispatch);
  }, [navigate]);

  const handleClick = (url) => {
    navigate(url);
    close();
  };

  useEffect(() => {
    if (token && localStorage.getItem("token")) {
      const decoded = jwtDecode(localStorage.getItem("token") || "");
      dispatch(setUser({ ...decoded, email: decoded.sub }));
    }

    if (user?.profileId) {
      getProfile(user.profileId)
        .then((res) => dispatch(setProfile(res)))
        .catch((err) => console.log(err));
    }
  }, [token, navigate]);

  if (location.pathname === "/signup" || location.pathname === "/login") {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-white/10 px-6 h-20 flex justify-between items-center">
      
      
      <div
        onClick={() => navigate("/")}
        className="flex gap-2 cursor-pointer items-center text-yellow-400"
      >
        <div className="bg-yellow-400 text-black p-2 rounded-lg shadow-md">
          <IconBriefcase className="h-6 w-6" />
        </div>

        <div className="hidden sm:block text-2xl font-bold tracking-wide text-white">
          MyJob
        </div>
      </div>

      
      <div className="hidden md:flex gap-6 items-center">
        <NavLinks />
      </div>
      
      {user?.role === "ADMIN" && (
  <div onClick={() => navigate("/admin")} className="cursor-pointer">
    Admin
  </div>
)}

      <div className="flex gap-3 items-center">
        {!user ? (
          <Link to="/login">
            <Button color="yellow" variant="light">
              Login
            </Button>
          </Link>
        ) : (
          <ProfileMenu />
        )}

        {user && <NotiMenu />}

        <Burger className="md:hidden" opened={opened} onClick={open} />

        <Drawer
          size="xs"
          position="right"
          opened={opened}
          onClose={close}
          overlayProps={{ backgroundOpacity: 0.6, blur: 6 }}
          className="[&_div]:bg-black text-white"
          closeButtonProps={{
            icon: <IconX size={28} />,
          }}
        >
          <div className="flex flex-col gap-6 mt-10 items-center">
            {links.map((link, index) => (
              <div
                key={index}
                onClick={() => handleClick(link.url)}
                className="text-lg hover:text-yellow-400 transition cursor-pointer"
              >
                {link.name}
              </div>
            ))}
          </div>
        </Drawer>

          {/* <ActionIcon
      variant="gradient"
      size="xl"
      aria-label="Gradient action icon"
      gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
    >
      <HeartIcon />
    </ActionIcon>  */}



      </div>
    </div>
  );
};

export default Header;