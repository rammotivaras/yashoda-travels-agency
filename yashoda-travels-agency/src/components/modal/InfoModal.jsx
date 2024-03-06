// import { useState } from 'react';
import { Modal, Button } from 'antd';

// eslint-disable-next-line react/prop-types
const InfoModal = ({ visible, closeModal }) => {
  return (
    <Modal
      title="About Yashoda Travels"
      visible={visible}
      onCancel={closeModal}
      footer={[
        <Button key="close" onClick={closeModal}>
          Close
        </Button>,
      ]}
    >
      <div className="text-lg mb-4 sm:text-base">I am the owner of Yashoda Travels Agency.</div>
      <div className="mb-2 sm:mb-4">Office Address: [Your Office Address]</div>
      <div className="mb-2 sm:mb-4">Contact Number: [Your Contact Number]</div>
      <div className="mb-2 sm:mb-4">We provide various types of vehicles for travel purposes including cars, buses, and vans.</div>
      <div className="sm:hidden">Feel free to contact us for any travel inquiries or bookings.</div>
    </Modal>
  );
};

export default InfoModal;
