import DatabaseService from "@/components/database-services";
import Wrapper from "@/layouts/wrapper";

export const metadata = {
  title: "Database Services Page"
};

const DatabaseServicePage = () => {
  return (
    <Wrapper>
      <DatabaseService />
    </Wrapper>
  );
};

export default DatabaseServicePage;
