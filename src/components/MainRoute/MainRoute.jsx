import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Singup from "../../Pages/Sign/Singup";
import Error from "../../Pages/ErrorPage/Error";
import Login from "../../Pages/Login/Login";
import Construction from "../../Pages/CoporateServices/ConstructionManagement/Construction";
import PropertyMarketing from "../../Pages/CoporateServices/PropertyMarkiting/PropertyMarketing";
import Buy from "../../Pages/buy/Buy";
import Acquisition from "../../Pages/CoporateServices/Acquisition/Acquisition";
import Partner from "../../Pages/CoporateServices/PartnerWithUs/Partner";
import MarketResearch from "../../Pages/CoporateServices/MarketResearch/MarketResearch";
import PortfolioPlaning from "../../Pages/CoporateServices/Pertfolio/PortfolioPlaning";
import UsaRealState from "../../Pages/CoporateServices/UsaRealstate/UsaRealState";
import Contact from "../../Pages/Contact/Contact";
// import Sell from '../../Pages/Sell/Sell'
import PurchaseTerm from "../../Pages/Footer/HelpCenter/PerchaseTerm/PurchaseTerm";
import UserTerm from "../../Pages/Footer/HelpCenter/UserTerm/UserTerm";
import Privacy from "../../Pages/Footer/HelpCenter/Privacy/Privacy";
import Disclaimer from "../../Pages/Footer/HelpCenter/Disclaimer/Disclaimer";
import UserDetail from "../../Pages/UserDetail/UserDetail";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellForm from "../../Pages/PropertyPostForm/SellForm";
import SingleProductDetailPage from "../../Pages/ProductDetailPage/SinglePage";
import ResidentialRent from "../../Pages/ProductPage/Residential/ResidentialRent";
import ResidentialBuy from "../../Pages/ProductPage/Residential/ResidentialBuy";
import CommercialBuy from "../../Pages/ProductPage/Commercial/CommercialBuy";
import CommercialLease from "../../Pages/ProductPage/Commercial/CommercialLease";
import Wishlist from "../../Pages/Wishlist/Wishlist";
import VisitedPage from "../../Pages/VisitedPage/VisitedPage";
import Listings from "../../Pages/UserListings/Listings";
import EditingForm from "../../Pages/UserListings/EditingForm";
import WithStyles from "../../Pages/Home/Page1/Query/WithStyles";
import QueryPage from "../../Pages/QueryPage/QueryPage";
import MyLeads from "../../Pages/MyLeads/MyLeads";
// import ConsultingPage from '../../Pages/CoporateServices/Consulting/consulting'

const MainRoute = () => {
  return (
    <div>
      <Routes>
        {/* home */}
        <Route path="/" element={<Home />} />
        {/* sell */}
        {/* <Route path='/sell' element={<Sell />} /> */}
        {/* about */}
        <Route path="/about" element={<About />} />
        {/* contact Page */}
        <Route path="/contact" element={<Contact />} />
        {/* signin Page */}
        <Route path="/signup" element={<Singup />} />
        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Product Page */}
        <Route path="/residential_rent" element={<ResidentialRent />} />
        <Route path="/residential_buy" element={<ResidentialBuy />} />
        <Route path="/commercial_rent" element={<CommercialLease />} />
        <Route path="/commercial_buy" element={<CommercialBuy />} />

        {/* Product Page */}
        <Route
          path="/residential_rent/:id"
          element={<SingleProductDetailPage />}
        />
        <Route
          path="/residential_buy/:id"
          element={<SingleProductDetailPage />}
        />
        <Route
          path="/commercial_rent/:id"
          element={<SingleProductDetailPage />}
        />
        <Route
          path="/commercial_buy/:id"
          element={<SingleProductDetailPage />}
        />

        {/* wishlist */}
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />
        <Route path="/wishlist/:id" element={<SingleProductDetailPage />} />

        {/* Recently Visited */}
        <Route path="/recently_visited" element={<VisitedPage />} />
        <Route
          path="/recently_visited/:id"
          element={<SingleProductDetailPage />}
        />

        {/* buy rent sale */}
        <Route path="/buy" element={<Buy />} />

        {/* Website detail Pages */}
        <Route path="/Construction_Management" element={<Construction />} />
        <Route path="/Property_Marketing" element={<PropertyMarketing />} />
        <Route path="/partner" element={<Partner />} />
        <Route
          path="/acquisitions_and_dispositions"
          element={<Acquisition />}
        />
        {/* <Route path='/consulting' element={<ConsultingPage />} />  */}
        <Route path="/market_research" element={<MarketResearch />} />
        <Route path="/portfolio_planning" element={<PortfolioPlaning />} />
        <Route path="/usa_real_state" element={<UsaRealState />} />

        <Route
          path="/listing"
          element={
            <PrivateRoute>
              <Listings />
            </PrivateRoute>
          }
        />
        <Route
          path="/listing/:productID"
          element={
            <PrivateRoute>
              <EditingForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/listingdetail/:id"
          element={
            <PrivateRoute>
              <SingleProductDetailPage />
            </PrivateRoute>
          }
        />

        {/* Property Detail Page */}
        <Route
          path="/product_detail"
          element={
            <PrivateRoute>
              <SingleProductDetailPage />
            </PrivateRoute>
          }
        />

        {/* footer ==> Help Center  */}
        <Route path="/Purchase_term_Condition" element={<PurchaseTerm />} />
        <Route path="/user_term_condition" element={<UserTerm />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />

        {/* after login Details Route */}
        <Route path="/profile" element={<UserDetail />} />
        <Route
          path="/post"
          element={
            <PrivateRoute>
              <SellForm />
            </PrivateRoute>
          }
        />

        <Route path="/query" element={<QueryPage />} />

        {/* All My Query */}  
        <Route path="/my_leads" element={<MyLeads />} /> 

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default MainRoute;
