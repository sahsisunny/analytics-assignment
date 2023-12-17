import React from "react";
import Link from "next/link";
import useAuthenticated from "@/hooks/useAuthenticated";
import { API_BASE_URL } from "@/constants";
import axios from "axios";
import LoginModal from "../modal/LoginModal";
import SignupModal from "../modal/SignupModal";
import { useState } from "react";

function Header() {
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showSignupModal, setShowSignupModal] = useState<boolean>(false);

  const { isLoggedIn, isLoading, userData } = useAuthenticated();

  const handleLogout = async () => {
    await axios.get(`${API_BASE_URL}/auth/logout`, {
      withCredentials: true,
    });
    window.location.reload();
  };
  return (
    <>
      <header className="bg-white border-b-2  py-4">
        <div className="max-w-6xl flex justify-between mx-auto px-6">
          <div className="flex gap-6 ">
            <Link href="/" className="font-bold text-blue-500 text-2xl">
              Analytics
            </Link>
          </div>
          {isLoading ? (
            <div className="flex items-center gap-4 text-sm text-slate-500 ">
              Loading...
            </div>
          ) : isLoggedIn ? (
            <nav className="flex items-center gap-4 text-sm text-slate-500 ">
              <p>@{userData?.user.username}</p>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
                onClick={handleLogout}
              >
                Logout
              </button>
            </nav>
          ) : (
            <nav className="flex items-center gap-4 text-sm text-slate-500 ">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
                onClick={() => setShowLoginModal(true)}
              >
                Sign in
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
                onClick={() => setShowSignupModal(true)}
              >
                Sign up
              </button>
            </nav>
          )}
        </div>
      </header>
      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} />
      )}
      {showSignupModal && (
        <SignupModal onClose={() => setShowSignupModal(false)} />
      )}
    </>
  );
}

export default Header;
