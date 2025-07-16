import CloudServices from "@/components/cloud-services";
import Wrapper from "@/layouts/wrapper";

export const metadata = {
  title: "Cloud Services"
};

const CloudServicePage = () => {
  return (
    <Wrapper>
      <CloudServices />
    </Wrapper>
  );
};

export default CloudServicePage;
