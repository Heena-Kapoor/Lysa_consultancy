import About from "@/components/aboutNew.jsx";
import Wrapper from "@/layouts/wrapper";

export const metadata = {
  title: "About Us"
};

const AboutPage = () => {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  );
};

export default AboutPage;
