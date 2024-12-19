import Banner from "@/components/Banner";
import Testimonials from "@/components/Testimonials";

const TestimonialsPage = () => {
    return (
        <>
        <Banner title="Testimonials" />
        <div className="test_momials pt-[80px] bg-black">
        <Testimonials className="pt-[20px]" />
        </div>
        </>
    );
};

export default TestimonialsPage;