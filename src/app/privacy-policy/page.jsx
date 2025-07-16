import PrivacyPolicy from "@/components/privacy-policy";
import Wrapper from "@/layouts/wrapper";

export const metadata = {
  title: "Privacy Policy"
};

const PolicyPage = () => {
  return (
    <Wrapper>
      <PrivacyPolicy />
    </Wrapper>
  );
};

export default PolicyPage;
