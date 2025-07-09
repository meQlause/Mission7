import { DefaultLayout } from "../layouts/default";
import { HeaderLayout } from "../layouts/header";

export const paymenMethodPage = () => {
  return (
    <>
      <HeaderLayout />
      <div className="px-standard flex flex-col gap-16 py-14">
        <DefaultLayout>
            test
        </DefaultLayout>
      </div>
    </>
  );
};
