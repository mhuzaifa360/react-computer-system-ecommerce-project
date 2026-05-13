import React from "react";

const UserProfile = () => {

  // GET USER DATA
  const userData = JSON.parse(
    localStorage.getItem("userData")
  );

  // INITIALS
  const initials = `${userData?.firstName?.charAt(0) || ""}
  ${userData?.lastName?.charAt(0) || ""}`;

  return (
    <div className="flex items-center gap-3">


      {/* USER INFO */}
      <div className="flex flex-col items-end">
        <h2 className="font-semibold text-gray-800">
          {userData?.firstName} {userData?.lastName}
        </h2>

        <p className="text-sm text-gray-500">
          {userData?.role}
        </p>
      </div>
      {/* AVATAR */}
      <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg uppercase">
        {initials}
      </div>

      

    </div>
  );
};

export default UserProfile;