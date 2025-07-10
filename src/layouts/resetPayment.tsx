import { useEffect } from "react";
import { usePaymentStepStore } from "../stores/usePaymentStepStore";
import { Outlet } from "react-router-dom";

export const ResetPaymentLayout = () => {
  const { setActive, isActive } = usePaymentStepStore();
  useEffect(() => {
    if (isActive) {
      setActive(!isActive);
    }
  });

  return <Outlet />;
};
