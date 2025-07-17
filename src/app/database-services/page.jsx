import DatabaseService from "@/components/database-services";
import Wrapper from "@/layouts/wrapper";

export const metadata = {
  title: "Best Database as a Service (DBaaS) Provider in 2025"
};

const DatabaseServicePage = () => {
  return (
    <Wrapper>
      <DatabaseService />
    </Wrapper>
  );
};

export default DatabaseServicePage;
