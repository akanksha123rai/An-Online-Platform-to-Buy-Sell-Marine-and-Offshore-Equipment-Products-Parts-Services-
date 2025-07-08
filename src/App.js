import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import Home from './pages/sprint_1/index'; 
import Register from "./pages/sprint_1/register";
import Login from "./pages/sprint_1/login";
import Question from "./pages/sprint_1/question";
import ForgetPassword from "./pages/sprint_1/forget-password";
import TwostepVerification from "./pages/sprint_1/twostep-verification";

import HomeNew from "./pages/sprint_1/index-new";
import Services from "./pages/sprint_1/services";
import Blogs from "./pages/sprint_1/blogs";

import MyWishlist from "./pages/sprint_1/my-wishlist";
import DealsPromotions from "./pages/sprint_1/deals";
import BuyForm from "./pages/sprint_1/buy-form";
import Experience from "./pages/sprint_1/experiance";

// import Home from "./pages/sprint_1";
import ContactUs from "./pages/sprint_1/contact-us";
import Planchoose from "./pages/sprint_1/plan-choose";
import RangeProduct from "./pages/sprint_1/range-product";

import Readmore from "./pages/sprint_1/read-more";
import TermsConditions from "./pages/sprint_1/terms- conditions";
import PrivacyPolicy from "./pages/sprint_1/privacy-policy";

import SubscriptionPlan from "./pages/sprint_1/subscription-plan";



function App() {
  return (
    <Router>
      <Routes>
      
        <Route path='/' exact element={<HomeNew/>} />  
        <Route path='/Register' exact element={<Register/>} />  
        <Route path='/Login' exact element={<Login/>} />  
        <Route path='/Question' exact element={<Question/>} />  
        <Route path='/ForgetPassword' exact element={<ForgetPassword/>} />  
        <Route path='/TwostepVerification' exact element={<TwostepVerification/>} /> 

        <Route path='/Services' exact element={<Services/>} /> 
        <Route path='/Blogs' exact element={<Blogs/>} /> 
        <Route path='/MyWishlist' exact element={<MyWishlist/>} /> 
        <Route path='/DealsPromotions' exact element={<DealsPromotions/>} /> 
        <Route path='/BuyForm' exact element={<BuyForm/>} />

        <Route path='/Experience' exact element={<Experience/>} />
        <Route path='/ContactUs' exact element={<ContactUs/>} />
        <Route path='/Planchoose' exact element={<Planchoose/>} />

        <Route path='/RangeProduct' exact element={<RangeProduct/>} /> 
        <Route path='/Readmore' exact element={<Readmore />} /> 
        <Route path='/TermsConditions' exact element={<TermsConditions />} /> 
        <Route path='/PrivacyPolicy' exact element={<PrivacyPolicy />} /> 
        <Route path='/SubscriptionPlan' exact element={<SubscriptionPlan />} /> 
     
      </Routes>
    </Router>
  );
}

export default App;
