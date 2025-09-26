import React, { FC, useState } from "react";
import { Modal } from "zmp-ui";
import { createPortal } from "react-dom";
import { Button } from "../common/button";
import { CloseOutlined } from "@ant-design/icons";
import QRPopupHeadIcon from "../../static/icons/modal-qr-icon.png";
import DownloadIcon from "../../static/icons/download.svg";
import QRImg from "../../static/images/qr.png";

export const QRPopup: FC<Props> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleShare = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {children({ open: () => setIsModalOpen(true) })}
      {createPortal(
        <Modal
          visible={isModalOpen}
          title={
            (
              <>
                <div className="flex flex-col gap-[21px]">
                  <div className="text-2xl font-medium">Quét mã QR</div>
                  <div className="text-base font-normal">
                    Quét mã QR này để đăng ký ứng dụng
                  </div>
                </div>
                <div
                  className="absolute -top-[50px] right-0"
                  onClick={handleCancel}
                >
                  <CloseOutlined className="text-[14px] text-[#FFFFFF]" />
                </div>
              </>
            ) as unknown as string
          }
          onClose={() => {
            setIsModalOpen(false);
          }}
          modalStyle={{
            overflow: "visible",
            padding: "48px 24px 24px",
            borderRadius: "12px",
          }}
        >
          <>
            <img
              src={QRPopupHeadIcon}
              className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
            />
            <div className="flex flex-col items-center gap-[21px] pt-[24px]">
              <img src={QRImg} alt="" className="w-[220px]" />
              <div className="flex items-center gap-[12px]">
                <Button
                  text={
                    <div className="flex items-center justify-center gap-[10px]">
                      <img src={DownloadIcon} />
                      <span className="text-xs font-medium text-secondary4">
                        Tải QR
                      </span>
                    </div>
                  }
                  className="flex h-[46px] items-center justify-center rounded-[8px] border border-secondary4 bg-white px-[12px]"
                  onClick={handleShare}
                  style={{ boxShadow: "0px 4px 18px 0px #5655552B" }}
                />
              </div>
            </div>
          </>
        </Modal>,
        document.body,
      )}
    </>
  );
};

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};
