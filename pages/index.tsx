import type { NextPage } from "next";
import Image from "next/image";

import { useRouter } from "next/router";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  const router = useRouter();
  const { token, userId }: any = router.query;

  return (
    <Layout>
      <div className="container">
        <div className="d-flex justify-content-between">
            <h3>Title</h3>
            <div className="d-flex y-center">
               <div className="flag-item mr-5">
                  <Image
                    src="/images/uk.png"
                    alt="uk logo"
                    width={40}
                    height={40}
                  />
               </div>
               <div className="flag-item">
                  <Image
                    src="/images/myanmar.png"
                    alt="my logo"
                    width={40}
                    height={40}
                  />
               </div>
            </div>
        </div>
        <div className="content">
            gdfgdgdgdgdhdh
        </div>
      </div>
    </Layout>
  );
};

export default Home;
