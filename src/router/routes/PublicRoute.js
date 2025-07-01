import React from 'react';
import PublicLayout from '../../pages/Public/Layouts/PublicLayout';
import { Route, Routes } from 'react-router-dom';
// import Automobile from '../../pages/Public/Pages/Automobile/Automobile';
import ItTech from '../../pages/Public/Pages/ItTechno/ItTech';
//import Telecommunication from '../../pages/Public/Pages/Telecom/Telecommunication';
import Manufacturing from '../../pages/Public/Pages/Manufact/Manufact';
import Aerospace from '../../pages/Public/Pages/Aerospace/Aerospace';
import HomePublic from '../../pages/Public/Pages/Home/Home';
//import HomeAutomobile from '../../pages/Public/Pages/Home/HomePage/Home';
import Aboutus from '../../pages/Public/Pages/AboutUs/Aboutus';
import Contact from '../../pages/Public/Pages/ContactUS/Contact';
import Career from '../../pages/Public/Pages/Career/Career';
import AerospacePage from '../../pages/Public/Pages/Aerospace/AerospacePage/AerospacePage';
import ItTechnoPage from '../../pages/Public/Pages/ItTechno/ItTechnoPage/ItTechnoPage'
// import BlogServicesPage from '../../pages/Public/Pages/Telecom/Blog/BlogServicesPage'
import ManufactPage from '../../pages/Public/Pages/Manufact/ManufactPage/ManufactPage';
import HomeExp from '../../pages/Public/Pages/Home/HomeExplore/HomeExp';
import BlogServicesPage from '../../pages/Public/Pages/blog/BlogServicesPage';
import Company1 from '../../pages/Public/Pages/GroupOfCompany/Company1';
import Company2 from '../../pages/Public/Pages/GroupOfCompany/Company2';
import Home from '../../pages/Public/Pages/Home/HomePage/Home';
// import BlogServicesPage from '../../pages/Public/Pages/Telecom/Blog/BlogServicesPage';
import MainHome from '../../pages/Public/Pages/Home/HomePage/Home'
import Automobile from "../../pages/Public/Pages/Automobile/Automobile"
import AutomobilePage from '../../pages/Public/Pages/Automobile/AutomobilePage/AutomobilePage'
import ItPage from '../../pages/Public/Pages/Information Technology/IT Page/ItPage'
import IT from '../../pages/Public/Pages/Information Technology/IT'
import BlogDetail from '../../pages/Public/Pages/blog/BlogDetail';

const PublicRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<PublicLayout />}>
                    <Route index element={<HomePublic />} />
                    <Route path='/home' element={<MainHome />} />
                    <Route path='/homeexplore' element={<HomeExp />} />
                    <Route path="/ittech" element={<ItTech />} />
                    <Route path="/blog" element={<BlogServicesPage />} />
                    <Route path="/manufact" element={<Manufacturing />} />
                    <Route path='/aerospacepage' element={<AerospacePage />} />
                    <Route path="/industries/aerospace" element={<Aerospace />} />
                    <Route path='/automobilepage' element={<AutomobilePage />} />

                    <Route path='industries/informationtechnology' element={<ItPage />} />
                    <Route path='/informationtechnology' element={<IT />} />

                    <Route path='/industries/automobilepage' element={<Automobile />} />

                    {/* <Route path='/ittechnopage' element={<ItTechnoPage />} /> */}
                    {/* <Route path='/blogservicespage' element={<BlogServicesPage />} /> */}
                    {/* <Route path='/manufactpage' element={<ManufactPage />} /> */}
                    <Route path='/about' element={<Aboutus />} />
                    <Route path='/career' element={<Career />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/blogservicespage' element={<BlogServicesPage />} />
                    <Route path="/blogdetail/:slug" element={<BlogDetail />} />
                    <Route path='/ittech/company2' element={<Company2 />} />
                    <Route path='/ittech/company1' element={<Company1 />} />
                    <Route path='/home' element={<Home />} />

                </Route>

            </Routes>
        </>
    )
}

export default PublicRoutes;
