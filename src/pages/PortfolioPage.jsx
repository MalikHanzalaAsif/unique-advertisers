import Banner from "@/components/Banner";
import Projects from "@/components/Projects";


const PortfolioPage = () => {
    return (
        <>
          <Banner title="Portfolio" />      
          <div className="pot_folio">
          <Projects/>
          </div>
        </>
    );
};

export default PortfolioPage;