// import './App.css';
// import { MantineProvider } from '@mantine/core';
// import '@mantine/core/styles.css';
// import '@mantine/tiptap/styles.css';
// import '@mantine/notifications/styles.css';
// import '@mantine/dates/styles.css';
// import '@mantine/carousel/styles.css';
// import HomePage from './Pages/Home';
// import { createTheme } from "@mantine/core";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Header from './Header/Header';
// import Footer from './LandingPage/Footer';
// import FindTalentPage from './Pages/FindTalentPage';
// import FindJobs from './Pages/FindJobs';
// import TalentProfilePage from './Pages/TalentProfilePage';
// import PostJobPage from './Pages/PostJobPage';
// import { Divider } from '@mantine/core';
// import JobDescPage from './Pages/JobDescPage';
// import ApplyJobPage from './Pages/ApplyJobPage';
// import CompanyPage from './Pages/CompanyPage';
// import PostedJobPage from './Pages/PostedJobPage';
// import JobHistoryPage from './Pages/JobHistoryPage';
// import SignUpPage from './Pages/SignUpPage';
// import ProfilePage from './Pages/ProfilePage';
// import { Notifications } from '@mantine/notifications';
// import { Provider } from "react-redux";
// import Store from './Store';
// import ApplicantProfile from './FindTalent/ApplicantProfile';
// import ApplicationDetails from "./FindTalent/ApplicationDetails";

// function App() {


//   const theme = createTheme({
//     fontFamily: 'Poppins, sans-serif',
//     focusRing : 'never',
//     primaryColor: 'brightSun',
//     primaryShade: 5,
//   colors: {
//     brightSun: [
//       '#fffdeb',
//       '#fff36c',
//       '#ffe588',
//       '#ffd149',
//       '#ffbd20',
//       '#f99b07',
//       '#dd7302',
//       '#b75006',
//       '#943c0c',
//       '#7a330d',
//       '#461902',
//     ],
//     mineShaft: [
//       '#f6f6f6',
//       '#e7e7e7',
//       '#d1d1d1',
//       '#b0b0b0',
//       '#888888',
//       '#6d6d6d',
//       '#5d5d5d',
//       '#4f4f4f',
//       '#454545',
//       '#3d3d3d',
//       '#2d2d2d',
//     ],
//   },
// });
//   return (
//     <Provider store={Store}>
//     <MantineProvider defaultColorScheme='dark' theme={theme}>
//       <Notifications position="top-center" zIndex={1000}/>
//       <BrowserRouter>
//       <Header />
//        <Divider size="xs" mx="md" />
//       <Routes>
//         <Route path="*" element={<HomePage />} />
//         <Route path="/find-jobs" element={<FindJobs />} />
//         <Route path="/jobs/:id" element={<JobDescPage />} />
//         {/* <Route path="/apply-job" element={<ApplyJobPage />} /> */}
//         <Route path="/apply-job/:id" element={<ApplyJobPage />} />
//         <Route path="/find-talent" element={<FindTalentPage />} />
//         <Route path="/talent-profile" element={<TalentProfilePage />} />
//         <Route path="/post-job" element={<PostJobPage />} />
//         <Route path="/job-history" element={<JobHistoryPage />} />
//         <Route path="/company" element={<CompanyPage />} />
//         <Route path="/posted-jobs" element={<PostedJobPage />} />
//         <Route path="/signup" element={<SignUpPage />} />
//         <Route path="/login" element={<SignUpPage />} />
//         <Route path="/profile" element={<ProfilePage />} />
//         <Route path="/find-talent/:id" element={<FindTalentPage />} />
       
//        <Route path="/talent-profile/:id" element={<ApplicantProfile />} />
//        <Route path="/application/:id" element={<ApplicationDetails />} />
      
//       </Routes>
//        <Footer/>

      
//       </BrowserRouter>
//     </MantineProvider>
//     </Provider>
//   );
// }

// export default App;




import './App.css';
import {createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications';
import { Provider } from 'react-redux';
import Store from './Store';
import AppRoutes from './Pages/AppRoutes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
    AOS.init({
      offset: 0,
      duration:800,
      easing:'ease-out'
    });
    AOS.refresh();
  }, []);

  const theme = createTheme({
    focusRing: "never",
    fontFamily: 'Poppins, sans-serif',
    primaryColor: 'brightSun',
    primaryShade: 4,
    colors: {
      'brightSun': ['#fffbeb', '#fff3c6', '#ffe588', '#ffd149', '#ffbd20', '#f99b07', '#dd7302', '#b75006', '#943c0c', '#7a330d', '#461902'
      ],
      'mineShaft': ['#f6f6f6', '#e7e7e7', '#d1d1d1', '#b0b0b0', '#888888', '#6d6d6d', '#5d5d5d', '#4f4f4f', '#454545', '#3d3d3d', '#2d2d2d',]
    }
  })
  return (
    <Provider store={Store}>
    <MantineProvider defaultColorScheme="dark" theme={theme} >
       <Notifications  position="top-center" zIndex={2001} />
      <AppRoutes/>
    </MantineProvider>
    </Provider>
  );
}

export default App;
