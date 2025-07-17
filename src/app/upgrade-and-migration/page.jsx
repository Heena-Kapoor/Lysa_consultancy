import Upgrade from "@/components/upgarde-migration";
import Wrapper from "@/layouts/wrapper";

export const metadata = {
  title: "Database Upgrade, Migration & Transformation Service"
};

const UpgradeMigration = () => {
  return (
    <Wrapper>
      <Upgrade />
    </Wrapper>
  );
};

export default UpgradeMigration;
