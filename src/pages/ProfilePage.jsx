import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header";

import Loader from "../components/layout/Loader";
import ProfileSideBar from "../components/profile/ProfileSidebar";
import ProfileContent from "../components/profile/ProfileContent";
import { useSelector } from "react-redux";

export default function ProfilePage() {
  const { loading } = useSelector((state) => state.user);
  const [active, setActive] = useState(1);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <div className="section flex bg-[#f5f5f5] py-10">
            <div className="w-[50px] 800px:w-[335px] sticky 800px:mt-0 mt-[18%]">
              <ProfileSideBar active={active} setActive={setActive} />
            </div>
            <ProfileContent active={active} />
          </div>
        </>
      )}
    </div>
  );
}
