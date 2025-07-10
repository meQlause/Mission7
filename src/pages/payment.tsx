import { useNavigate, useParams } from "react-router-dom";
import { CardDetailsComponent } from "../components/cardDetails";
import { DefaultLayout } from "../layouts/default";
import { HeaderLayout } from "../layouts/header";
import { getData } from "../services/api/getData";
import { DividerUI } from "../components/UIs/divider";
import { ButtonUI } from "../components/UIs/button";
import { useEffect, useState } from "react";
import { FooterLayout } from "../layouts/footer";
import { usePaymentStepStore } from "../stores/usePaymentStepStore";

export const paymentPage = () => {
  const { contents } = getData();
  const { payment, id } = useParams<{ payment: string; id: string }>();
  const navigate = useNavigate();
  const { isActive, setActive, nextStep } = usePaymentStepStore();
  console.log(payment, id);
  useEffect(() => {
    if (!isActive) {
      setActive(!isActive);
    }
  }, []);

  const idNumber = Number(id);
  if (isNaN(idNumber)) {
    navigate("/");
  }

  if (!contents) return <>Error</>;
  const data = contents.getId(idNumber).data[0];

  const filter = (filter: string, id: string) => {
    console.log(filter);
    console.log(id);
  };

  const transfromToNumber = (price: string): string => {
    return parseInt(price.split(" ").at(-1)?.split("K")["0"].concat("000")!).toLocaleString(
      "id-ID"
    );
  };

  const add = (basevalue: string, value: number): string => {
    return (parseInt(transfromToNumber(basevalue).replace(/\./g, "")) + value).toLocaleString(
      "id-ID"
    );
  };

  return (
    <>
      <HeaderLayout />
      <img
        className="mx-auto mt-10 block w-full max-w-96 px-5 lg:hidden"
        src="/assets/payment-method-stepper-mobile.png"
      />
      <div className="px-standard flex flex-col-reverse justify-between gap-5 py-14 lg:flex-row lg:gap-16">
        <div className="flex flex-col gap-5">
          <DefaultLayout className="flex h-fit w-full flex-col gap-5 rounded-lg p-5">
            <div className="flex flex-col gap-3">
              <h2 className="text-heading6 font-bold">Ringkasan Pesanan</h2>
              <div className="flex flex-row justify-between gap-2">
                <p className="text-bodyMedium font-thin lg:pr-[10vh]">{data.description}</p>
                <p className="whitespace-nowrap text-right text-bodyLarge font-thin">
                  Rp. {transfromToNumber(data.price)}
                </p>
              </div>
              <div className="flex flex-row justify-between gap-2">
                <p className="text-bodyMedium font-thin">Biaya Admin</p>
                <p className="whitespace-nowrap text-bodyLarge font-thin">Rp 7.000</p>
              </div>
              <DividerUI />
              <div className="flex flex-row justify-between gap-2">
                <p className="text-bodyMedium font-bold">Total Pembayaran</p>
                <p className="whitespace-nowrap text-bodyLarge font-bold text-[#3ecf4c]">
                  Rp {add(data.price, 7000)}
                </p>
              </div>
            </div>
            <ButtonUI> Beli Sekarang</ButtonUI>
          </DefaultLayout>
        </div>
        <CardDetailsComponent data={data} />
      </div>
      <FooterLayout />
    </>
  );
};
