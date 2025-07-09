import { useNavigate, useParams } from "react-router-dom";
import { CardDetailsComponent } from "../components/cardDetails";
import { CategoryComponent } from "../components/category";
import { CheckboxUI } from "../components/UIs/checkbox";
import { DefaultLayout } from "../layouts/default";
import { HeaderLayout } from "../layouts/header";
import { getData } from "../services/api/getData";
import type { CategoryContent } from "../utils/types";
import { DividerUI } from "../components/UIs/divider";
import { ButtonUI } from "../components/UIs/button";

export const paymenMethodPage = () => {
  const { contents } = getData();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

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

  const TransferBankContent: CategoryContent[] = [
    {
      element: (
        <div className="ml-1 flex w-full flex-row items-center justify-between gap-5">
          Pemasaran
          <CheckboxUI id="1" />
        </div>
      ),
      func: () => filter("pemasaran", "1"),
    },
    {
      element: (
        <div className="ml-1 flex w-full flex-row items-center justify-between gap-5">
          Digital & Teknologi
          <CheckboxUI id="2" />
        </div>
      ),
      func: () => filter("digital dan teknologi", "2"),
    },
    {
      element: (
        <div className="ml-1 flex w-full flex-row items-center justify-between gap-5">
          Pengembangan Diri
          <CheckboxUI id="3" />
        </div>
      ),
      func: () => filter("pengembangan diri", "3"),
    },
    {
      element: (
        <div className="ml-1 flex w-full flex-row items-center justify-between gap-5">
          Manajemen Bisnis
          <CheckboxUI id="4" />
        </div>
      ),
      func: () => filter("manajemen bisnis", "4"),
    },
  ];

  const eWalletContent: CategoryContent[] = [
    {
      element: (
        <div className="ml-1 flex w-full flex-row items-center justify-between gap-5">
          Pemasaran
          <CheckboxUI id="1" />
        </div>
      ),
      func: () => filter("pemasaran", "1"),
    },
    {
      element: (
        <div className="ml-1 flex w-full flex-row items-center justify-between gap-5">
          Digital & Teknologi
          <CheckboxUI id="2" />
        </div>
      ),
      func: () => filter("digital dan teknologi", "2"),
    },
    {
      element: (
        <div className="ml-1 flex w-full flex-row items-center justify-between gap-5">
          Pengembangan Diri
          <CheckboxUI id="3" />
        </div>
      ),
      func: () => filter("pengembangan diri", "3"),
    },
    {
      element: (
        <div className="ml-1 flex w-full flex-row items-center justify-between gap-5">
          Manajemen Bisnis
          <CheckboxUI id="4" />
        </div>
      ),
      func: () => filter("manajemen bisnis", "4"),
    },
  ];

  const kartuKreditDebitContent: CategoryContent[] = [
    {
      element: (
        <div className="ml-1 flex w-full flex-row items-center justify-between gap-5">
          Pemasaran
          <CheckboxUI id="1" />
        </div>
      ),
      func: () => filter("pemasaran", "1"),
    },
    {
      element: (
        <div className="ml-1 flex w-full flex-row items-center justify-between gap-5">
          Digital & Teknologi
          <CheckboxUI id="2" />
        </div>
      ),
      func: () => filter("digital dan teknologi", "2"),
    },
    {
      element: (
        <div className="ml-1 flex w-full flex-row items-center justify-between gap-5">
          Pengembangan Diri
          <CheckboxUI id="3" />
        </div>
      ),
      func: () => filter("pengembangan diri", "3"),
    },
    {
      element: (
        <div className="ml-1 flex w-full flex-row items-center justify-between gap-5">
          Manajemen Bisnis
          <CheckboxUI id="4" />
        </div>
      ),
      func: () => filter("manajemen bisnis", "4"),
    },
  ];
  return (
    <>
      <HeaderLayout />
      <div className="px-standard flex flex-col-reverse justify-between gap-16 py-14 lg:flex-row">
        <div className="flex flex-col gap-5">
          <DefaultLayout className="flex h-fit w-full flex-col gap-5 rounded-lg p-5">
            <h2 className="text-heading6 font-bold">Metode Pembayaran</h2>
            <div className="flex flex-col justify-between">
              <CategoryComponent
                forceShow={true}
                title={
                  <div className="flex flex-row items-center gap-3">
                    <h6 className="text-heading6 font-bold">Transfer Bank</h6>
                  </div>
                }
                content={TransferBankContent}
                contentClassName="text-[#3A3541AD] hover:text-[#3ECF4C] hover:text-decoration-none"
              />
            </div>
            <div className="flex flex-col justify-between">
              <CategoryComponent
                forceShow={true}
                title={
                  <div className="flex flex-row items-center gap-3">
                    <h6 className="text-heading6 font-bold">E-Wallet</h6>
                  </div>
                }
                content={eWalletContent}
                contentClassName="text-[#3A3541AD] hover:text-[#3ECF4C] hover:text-decoration-none"
              />
            </div>
            <div className="flex flex-col justify-between">
              <CategoryComponent
                forceShow={true}
                title={
                  <div className="flex flex-row items-center gap-3">
                    <h6 className="text-heading6 font-bold">Kartu Kredit/Debit</h6>
                  </div>
                }
                content={kartuKreditDebitContent}
                contentClassName="text-[#3A3541AD] hover:text-[#3ECF4C] hover:text-decoration-none"
              />
            </div>
          </DefaultLayout>
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
    </>
  );
};
