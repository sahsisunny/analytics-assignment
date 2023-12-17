import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { ChangeEvent } from "react";
import { useLoginMutation } from "@/services/api";

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { mutateAsync } = useLoginMutation();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await mutateAsync({ username, password });
    window.location.reload();
  };
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <dialog
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50"
      data-testid="login-modal"
    >
      <div
        ref={modalRef}
        className="bg-white p-8 rounded-md w-[430px] relative flex flex-col justify-center items-center border border-gray-500"
      >
        <h1 className="text-4xl font-bold text-center mb-6">Sign In</h1>
        <p className="text-center text-gray-500 mb-6">
          Sign in to access your account
        </p>
        <form action="" className="flex flex-col gap-4 w-full">
          <input
            type="text"
            className="py-4 px-6 w-full border"
            placeholder="Username"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
          />
          <input
            type="password"
            className="py-4 px-6 w-full"
            placeholder="Password"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <button
            className="bg-blue-500 text-white py-4 px-6 w-full"
            onClick={handleLogin}
          >
            Sign in
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default LoginModal;
