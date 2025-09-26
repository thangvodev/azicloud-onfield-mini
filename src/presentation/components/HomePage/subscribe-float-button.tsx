import React from "react";
import { Divider } from "antd";
import { formatCurrency } from "../../utils/helpers";
import { Button } from "../common/button";
import { QRPopup } from "./share-popup";

export const SubscribeFloatButton = () => {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 bg-white px-[13px] pb-[32px] pt-[12px]"
      style={{ boxShadow: "0px 8px 32px 0px #3C3C3C40" }}
    >
      <QRPopup>
        {({ open }) => (
          <Button
            text={
              <div className="text-base font-medium text-white">
                Đăng ký demo
              </div>
            }
            style={{ boxShadow: "0px 4px 24px 0px #7D6A6A14" }}
            className="flex h-[45px] w-full flex-none items-center justify-center rounded-[100px] bg-infor3 px-[14px]"
            onClick={open}
          />
        )}
      </QRPopup>
    </div>
  );
};
