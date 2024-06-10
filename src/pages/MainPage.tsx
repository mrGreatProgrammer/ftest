import React from "react";
import AdvBanner from "../components/ui/Cards/advsBanners/AdvBanner";
import BannerWithTimer from "../components/ui/Cards/advsBanners/BannerWithTimer/BannerWithTimer";
import MiniCardWithIcon from "../components/ui/Cards/MiniCardWithIcon";
import BalanceCard from "../components/ui/Cards/BalanceCard/BalanceCard";
import SheduleCard from "../components/ui/Cards/SheduleCard/SheduleCard";

const MainPage = () => {
  return (
    <div>
      <div
        className="grid gap-5"
        style={{
          gridTemplateColumns: "526px 344px 162px",
        }}
      >
        <div>
          <AdvBanner />
        </div>
        <div>
          <BannerWithTimer />
        </div>
        <div>
          <div className="mb-5">
            <MiniCardWithIcon
              bgColor="#D8ECFF"
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 9.99999V4.86392"
                    stroke="#323854"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.99995 15.1729C6.79296 15.0648 5.58041 15.3074 4.50795 15.8716C4.19869 16.0502 3.81793 16.0513 3.50764 15.8746C3.19734 15.6978 3.0041 15.3697 2.99995 15.0126V5.79393C2.99444 5.15562 3.29669 4.55372 3.81195 4.17693C6.34333 2.37748 9.80381 2.66783 12 4.86393C14.1961 2.66783 17.6566 2.37748 20.188 4.17693C20.7032 4.55372 21.0055 5.15562 21 5.79393V9.99993"
                    stroke="#323854"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 14.25V20.5C12 20.7761 12.2239 21 12.5 21H20.5C20.7761 21 21 20.7761 21 20.5V14.25"
                    stroke="#323854"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.95 21V17.5C17.95 17.2239 17.7261 17 17.45 17H15.45C15.1738 17 14.95 17.2239 14.95 17.5V21"
                    stroke="#323854"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22 15L16.8 11.1C16.6222 10.9667 16.3778 10.9667 16.2 11.1L11 15"
                    stroke="#323854"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
              title="Домашние задания"
            />
          </div>
          <MiniCardWithIcon
            bgColor="#E8CBFF"
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.0025 21.0037H5.99754C4.89251 21.0037 3.9967 20.1079 3.9967 19.0029V4.99708C3.9967 3.89205 4.89251 2.99625 5.99754 2.99625H18.0025C19.1076 2.99625 20.0034 3.89205 20.0034 4.99708V19.0029C20.0034 20.1079 19.1076 21.0037 18.0025 21.0037Z"
                  stroke="#323854"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.99829 7.99832H16.0016"
                  stroke="#323854"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.99829 16.0017H9.99912"
                  stroke="#323854"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.6129 15.5295L14.6671 17.4753L13.5006 16.3078"
                  stroke="#323854"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.99829 12H16.0016"
                  stroke="#323854"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            title="Отчеты от учителей"
          />
        </div>

        <div className="grid gap-5" style={{ gridTemplateColumns: "344px 708px" }}>
          <BalanceCard
            menu={[
              { count: 32, title: "Ментальная Арифметика" },
              { count: 0, title: "Программирование" },
              { count: 4, title: "Скорочтение" },
              { count: 4, title: "Скорочтение" },
              { count: 4, title: "Скорочтение" },
              { count: 4, title: "Скорочтение" },
            ]}
          />
          <SheduleCard
            menu={[
              {
                title: "Ментальная Арифметика",
                date: "2024-05-04",
                startTime: "14:00",
                endTime: "14:25",
                teacherName: "Белкина Инна",
              },
              {
                title: "Программирование",
                date: "2024-10-30",
                startTime: "11:00",
                endTime: "11:11",
                teacherName: "Животновская Оксана",
              },
              {
                title: "Скорочтение",
                date: "2024-11-16",
                startTime: "09:00",
                endTime: "09:45",
                teacherName: "Мин Елена",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
