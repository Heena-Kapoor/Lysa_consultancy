import ManagedCloud from "@/components/managedCloud";
import Upgrade from "@/components/upgarde-migration";
import Wrapper from "@/layouts/wrapper";

export const metadata = {
  title: "Managed Cloud Database Service"
};

const ManagedCoudDB = () => {
  return (
    <Wrapper>
      <ManagedCloud />
    </Wrapper>
  );
};

export default ManagedCoudDB;
