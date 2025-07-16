import DatabaseService from "@/components/database-services";
import Wrapper from "@/layouts/wrapper";

export const metadata = {
  title: "Database Services"
};

const DatabaseServicePage = () => {
  return (
    <Wrapper>
      <DatabaseService />
    </Wrapper>
  );
};

export default DatabaseServicePage;
