import React, { FC } from "react";
import { Header, Page } from "zmp-ui";
import { HomePageContent } from "../components/HomePage";
import { Footer } from "../components/common/footer";
import Logo from "../static/images/logo.svg";

const HomePage: FC = () => {
  return (
    <Page
      className="page-content relative flex flex-1 flex-col"
      style={{
        background:
          "linear-gradient(180deg, #f6fbff 0%, #e5f5ff 60.58%, #e5f5ff 100%)",
      }}
    >
      <div className="flex-1 overflow-auto bg-white">
        <HomePageContent />
      </div>
    </Page>
  );
};

export default HomePage;
