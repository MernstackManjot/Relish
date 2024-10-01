import { BrowserRouter, Routes, Route } from "react-router-dom";
import { OutLet } from "./Layout/OutLet";
import { HomePage } from "./Pages/HomePage";
import { About } from "./Pages/About";
import { Service } from "./Pages/Service";
import { Marketing } from "./Components/Marketing";
import { ITSolution } from "./Components/ITSolution";
import { ExportImport } from "./Components/ExportImport";
import { Contact } from "./Pages/Contact";
import { ExportProduct } from "./Components/ExportProducts";
import { ImportProduct } from "./Components/ImportProducts";
import { ExportImportIEC } from "./Pages/Our Registration/ExportImport(IEC)";
import { TAN } from "./Pages/Our Registration/TAN";
import { Udyam } from "./Pages/Our Registration/Udyam";
import { WebDevelopment } from "./Pages/DigitalMarketingServices/WebDevelopment";
import { DigitalMarketingServices } from "./Components/DigitalMarketingServices";
import { GraphicDesign } from "./Pages/DigitalMarketingServices/GraphicDesign";
import { AnalyticsReporting } from "./Pages/DigitalMarketingServices/AnalyticsReporting";
import { ContentMarketing } from "./Pages/DigitalMarketingServices/ContentMarketing";
import { ConversionRate } from "./Pages/DigitalMarketingServices/ConversionRate";
import { EmailMarketing } from "./Pages/DigitalMarketingServices/EmailMarketing";
import { PayPerClick } from "./Pages/DigitalMarketingServices/Pay-Per-Click";
import { SearchEngine } from "./Pages/DigitalMarketingServices/SearchEngine";
import { SocialMedia } from "./Pages/DigitalMarketingServices/SocialMedia";
import { Textiles } from "./Pages/ExportProduct/Textiles";
import { Footwear } from "./Pages/ExportProduct/Footwear";
import { MobileAccessories } from "./Pages/ExportProduct/MobileAccessories";
import { Eyeglasses } from "./Pages/ExportProduct/Eyeglasses";
import { Handicrafts } from "./Pages/ExportProduct/Handicrafts";
import { Cosmetics } from "./Pages/ExportProduct/Cosmetics";
import { AgricultureProducts } from "./Pages/ExportProduct/AgricultureProducts";
import { BuildingConstructionMaterial } from "./Pages/ExportProduct/BuildingConstructionMaterial";
import { Machinery } from "./Pages/ExportProduct/Machinery";
import { FoodGrains } from "./Pages/ExportProduct/FoodGrains";
import { Spices } from "./Pages/ExportProduct/Spices";
import { Rice } from "./Pages/ExportProduct/Rice";
import { Tea } from "./Pages/ExportProduct/Tea";
import { Flour } from "./Pages/ExportProduct/Flour";
import { MineralWater } from "./Pages/ExportProduct/MineralWater";
import { FruitsandVegetables } from "./Pages/ExportProduct/FruitsandVegetables";
import { Chemicals } from "./Pages/ExportProduct/Chemicals";
import { SpareParts } from "./Pages/ExportProduct/SpareParts";
import { CrudeOil } from "./Pages/ImportProduct/CrudeOil";
import { GoldandPreciousMetals } from "./Pages/ImportProduct/GoldandPreciousMetals";
import { Electronics } from "./Pages/ImportProduct/Electronics";
import { OrganicChemicals } from "./Pages/ImportProduct/OrganicChemicals";
import { PearlsPrecious } from "./Pages/ImportProduct/PearlsPrecious";
import { CoalCokeandBriquettes } from "./Pages/ImportProduct/CoalCokeandBriquettes";
import { PlasticandPlasticArticles } from "./Pages/ImportProduct/PlasticandPlasticArticles";
import { IronandSteel } from "./Pages/ImportProduct/IronandSteel";
import { EdibleOils } from "./Pages/ImportProduct/EdibleOils";
import { Fertilizers } from "./Pages/ImportProduct/Fertilizers";
import { PharmaceuticalProducts } from "./Pages/ImportProduct/PharmaceuticalProducts";
import { MachineryHeavyImport } from "./Pages/ImportProduct/Machinery";
import { EducationConsultancy } from "./Components/EducationConsultancy";
import { EducationConsultancyPage } from "./Pages/EducationConsultancy/EducationConsultancyPage";
import { IELTS } from "./Pages/EducationConsultancy/IELTS";
import { OurBankPage } from "./Pages/Our Registration/OurBank's";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OutLet />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />


          </Route>

          <Route path="/marketing" element={<Marketing />} />
          <Route path="/digitalMarketing" element={<DigitalMarketingServices />} />
          <Route path="/digitalMarketing/web" element={<WebDevelopment />} />
          <Route path="/digitalMarketing/GraphicDesign" element={<GraphicDesign />} />
          <Route path="/digitalMarketing/AnalyticsReporting" element={<AnalyticsReporting />} />
          <Route path="/digitalMarketing/ContentMarketing" element={<ContentMarketing />} />
          <Route path="/digitalMarketing/ConversionRate" element={<ConversionRate />} />
          <Route path="/digitalMarketing/EmailMarketing" element={<EmailMarketing />} />
          <Route path="/digitalMarketing/PayPerClick" element={<PayPerClick />} />
          <Route path="/digitalMarketing/SearchEngine" element={<SearchEngine />} />
          <Route path="/digitalMarketing/SocialMedia" element={<SocialMedia />} />



          <Route path="/itSolution" element={<ITSolution />} />



          <Route path="/exportImport" element={<ExportImport />} />
          <Route path="/export" element={<ExportProduct />} />
          <Route path="/export/Textiles" element={<Textiles />} />
          <Route path="/export/Footwear" element={<Footwear />} />
          <Route path="/export/MobileAccessories" element={<MobileAccessories />} />
          <Route path="/export/Eyeglasses" element={<Eyeglasses />} />
          <Route path="/export/Handicrafts" element={<Handicrafts />} />
          <Route path="/export/Cosmetics" element={<Cosmetics />} />
          <Route path="/export/AgricultureProducts" element={<AgricultureProducts />} />
          <Route path="/export/BuildingConstructionMaterial" element={<BuildingConstructionMaterial />} />
          <Route path="/export/Machinery" element={<Machinery />} />
          <Route path="/export/FoodGrains" element={<FoodGrains />} />
          <Route path="/export/Spices" element={<Spices />} />
          <Route path="/export/Rice" element={<Rice />} />
          <Route path="/export/Tea" element={<Tea />} />
          <Route path="/export/Flour" element={<Flour />} />
          <Route path="/export/MineralWater" element={<MineralWater />} />
          <Route path="/export/Fruits&Vegetables" element={<FruitsandVegetables />} />
          <Route path="/export/Chemicals" element={<Chemicals />} />
          <Route path="/export/SpareParts" element={<SpareParts />} />


          <Route path="/import" element={<ImportProduct />} />
          <Route path="/import/Crude Oil and Petroleum Products" element={<CrudeOil />} />
          <Route path="/import/Gold and Precious Metals" element={<GoldandPreciousMetals />} />
          <Route path="/import/Electronics and Electrical Equipment" element={<Electronics />} />
          <Route path="/import/Machinery (Heavy and Industrial)" element={<MachineryHeavyImport />} />
          <Route path="/import/Organic Chemicals" element={<OrganicChemicals />} />
          <Route path="/import/Pearls, Precious and Semi-Precious Stones" element={<PearlsPrecious />} />
          <Route path="/import/Coal, Coke, and Briquettes" element={<CoalCokeandBriquettes />} />
          <Route path="/import/Plastic and Plastic ArticlesIron and Steel" element={<PlasticandPlasticArticles />} />
          <Route path="/import/Iron and Steel" element={<IronandSteel />} />
          <Route path="/import/Edible Oils" element={<EdibleOils />} />
          <Route path="/import/Fertilizers" element={<Fertilizers />} />
          <Route path="/import/Pharmaceutical Products (Active Ingredients)" element={<PharmaceuticalProducts />} />



          <Route path="/EducationConsultancy" element={<EducationConsultancy />} />
          <Route path="/EducationConsultancy/Education Consultancy Page" element={<EducationConsultancyPage />} />
          <Route path="/EducationConsultancy/IELTS" element={<IELTS />} />
          {/* <Route path="/EducationConsultancy/Standup Loan" element={<StandupLoan />} />
          <Route path="/EducationConsultancy/Home and Property Loan Guidance" element={<HomeandPropertyLoan />} />
          <Route path="/EducationConsultancy/Debt Restructuring and Refinancing" element={< DebtRestructuringandRefinancing />} />
          <Route path="/EducationConsultancy/Export Financing Advisory" element={< ExportFinancingAdvisory />} />
          <Route path="/EducationConsultancy/Business Loans" element={<BusinessLoans />} />
          <Route path="/EducationConsultancy/Cash Creadit Limit" element={< CashCreditLimit />} /> */}
          {/* <Route path="/finance/Builders & Construction Financing" element={< BuildersConstructionFinancing />} />
          <Route path="/finance/Mega Projects Financing" element={<MegaProjectsFinancing />} />
          <Route path="/finance/Export-Import Finance" element={<ExportImportFinance />} />
          <Route path="/finance/NPA Solutions & Finance" element={<NPASolutionsFinance />} />
          <Route path="/finance/CGTMSE Loans" element={<CGTMSELoans />} />
          <Route path="/finance/PMEGP Loan" element={<PMEGPLoan />} />
          <Route path="/finance/MUDRA Loans" element={<MUDRALoans />} />
          <Route path="/finance/Commercial Vehicle Loans" element={<CommercialVehicleLoans />} />
          <Route path="/finance/Startup Loans" element={<StartupLoans />} /> */}





          <Route path="/IEC" element={<ExportImportIEC />} />
          <Route path="/tan" element={<TAN />} />
          <Route path="/udyam" element={<Udyam />} />
   
          <Route path="/OurBank's" element={<OurBankPage />} />
        





        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
