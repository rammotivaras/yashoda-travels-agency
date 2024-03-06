/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import carPng from "../../assets/carPng1.jpg";
import { useContext, useState } from "react";
import { AOSContext } from "../context/AOSProvider";
import { Modal, Button } from "antd";

const About = ({ theme }) => {
  const [modalVisible, setModalVisible] = useState(false); // State for managing modal visibility
  const aos = useContext(AOSContext);

  // Function to open the modal
  const showModal = () => {
    setModalVisible(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div
      id="about"
      className="dark:bg-dark bg-slate-100 dark:text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center"
    >
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={carPng}
              alt=""
              className="sm:scale-105 sm:translate-x-11 max-h-[300px] rounded-md"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About Us
              </h1>
              {/* Button to open the modal */}
              <Button
                onClick={showModal}
                data-aos="fade-up"
                className={`rounded-md border-2 border-fuchsia-600 ${
                  theme === "dark" ? "hover:text-white " : " hover:text-black"
                }  text-fuchsia-600 hover:bg-fuchsia-400  duration-500 p-12 py-1 px-8 tracking-wider cursor-pointer font-semibold hover:border-none `}
              >
                Information
              </Button>
              <p data-aos="fade-up" className="text-xl font-serif">
                Explore Devbhumi Dwarka's wonders with Yashoda Travels Agency –
                your trusted guide to spiritual adventures.
              </p>
              <p className="text-xl lg:text-2xl font-serif" data-aos="fade-up">
                Yashoda Travels: Discover Devbhumi Dwarka's spiritual essence
                with us
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Modal to display agency information */}
      <Modal
        title="Yashoda Travels Agency"
        visible={modalVisible}
        onCancel={closeModal}
        footer={[
          <Button key="close" onClick={closeModal}>
            Close
          </Button>,
        ]}
      >
        <p>Owner: Punit Kareliya</p>
        <p>Contact: +91 9898313650</p>
        <p>Office Address: Near Govind Studio, Dwarka</p>
        <p>
          We provide various types of vehicles for travel purposes including
          cars, buses, and vans.
        </p>
        <p>Feel free to contact us for any travel inquiries or bookings.</p>
      </Modal>
    </div>
  );
};

export default About;
