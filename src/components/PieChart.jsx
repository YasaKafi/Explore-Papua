"use client";
import React, { useEffect } from "react";
import ApexCharts from "apexcharts";
import { Colors } from "chart.js";

export default function PieChart ({ data, content }) {
    useEffect(() => {
      if (document.getElementById("pie-chart") && typeof ApexCharts !== "undefined") {
        const chart = new ApexCharts(document.getElementById("pie-chart"), {
          series: data,
          colors: ["#1C64F2", "#16BDCA", "#9061F9", "#F22D4D"],
          chart: {
            height: 250,
            width: "100%",
            type: "pie",
          },
          stroke: {
            colors: ["white"],
            lineCap: "",
          },
          plotOptions: {
            pie: {
              labels: {
                show: true,
              },
              size: "100%",
              dataLabels: {
                offset: -25,
              },
            },
          },
          labels: ["Pertambangan dan penggalian", "Pertanian", "Kehutanan", "Kelautan"],
          dataLabels: {
            enabled: true,
            style: {
              fontFamily: "Inter, sans-serif",
            },
          },
          legend: {
            position: "bottom",
            fontFamily: "Inter, sans-serif",
          },
          yaxis: {
            labels: {
              formatter: function (value) {
                return value + "%";
              },
            },
          },
          xaxis: {
            labels: {
              formatter: function (value) {
                return value + "%";
              },
            },
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
          },
        });
  
        chart.render();
      }
    }, []);
  
    return (
    <div className="bg-white rounded-lg shadow p-4 md:p-6 mx-8  md:w-4/5 items-center">
    <h5 className="text-xl font-bold leading-none text-gray-900 mr-1 text-center">Kontribusi Sektor-Sektor Terhadap Ekonomi Papua</h5>
    <div className="cols-2 mt-2 ">
      <div className="flex flex-wrap mt-10 items-center ">
          <div className=" md:w-1/3 w-full" id="pie-chart"></div>
          <p className="text-black md:w-2/3 w-full px-5 text-lg mb-5 ">{content}</p>
      </div>

      <div className="grid mt-2 grid-cols-1 items-center border-gray-700 border-t justify-between">
        <div className="flex justify-between items-center pt-5"></div>
      </div>
    </div>
    </div>
)
      
  };
  
  