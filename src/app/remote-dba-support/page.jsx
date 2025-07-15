import RemoteDBAsupport from "@/components/remote-dba";
import Wrapper from "@/layouts/wrapper";

export const metadata = {
  title: "REMOTE DBA SUPPORT PAGE"
};

const RemoteDbaPage = () => {
  return (
    <Wrapper>
      <RemoteDBAsupport />
    </Wrapper>
  );
};

export default RemoteDbaPage;
