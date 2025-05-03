import React, { useEffect, useState } from "react";
import Exchange from "./Exchange";
import currency from "../assets/currency";
import Select from "react-select";
import customStyles from "./ui/customStyles";
import {
  ArrowLeftRight,
  TrendingUp,
  History,
  ChartColumn,
  MoveRight,
} from "lucide-react";
import useFetch from "../hooks/useFetch";
import Loader from "./Loader";


function Converter({setSavedData,savedData}) {
  // console.log("convertor runned")
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");


  function getDataAndTime() {
    const d = new Date();
    return `${d.getDate()}/${
      d.getMonth() + 1
    }/${d.getFullYear()} ${d.getHours()}:${d
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${d.getSeconds().toString().padStart(2, "0")}`;
  }
  function swapFromAndTo() {
    setFrom(to);
    setTo(from);
  }
  const options = currency.map((cur) => ({
    value: cur,
    label: cur.toUpperCase(),
  }));

  let {loading,data} = useFetch(from)




  return (
    <>
    {loading ?  < Loader />: ( <div>
      <div>
        <div className="flex flex-col p-8">
          <label htmlFor="ip" className="font-mono  text-md bg-testPink">
            Amount:
          </label>
          <input
            type="number"
            id="ip"
            className=" border-2 border-gray-300 outline-none p-1 rounded-md text-md font-semibold mt-2 px-3"
            defaultValue={amount}
            onChange={(e) => {
              setAmount(Number(e.target.value).toFixed(2))}}
          />
        </div>

        {/* --------------- From & To Section ----------- */}
        <div className="flex px-10 gap-2">
          {/* FROM Select Field */}
          <div className="flex flex-col w-4/9 ">
            <label htmlFor="from" className="font-semibold text-md mb-2">
              From
            </label>
            <Select
              inputId="from"
              options={options}
              value={options.find((opt) => opt.value === from)}
              onChange={(selected) => {setFrom(selected.value)}}
              styles={customStyles}
              menuPlacement="bottom"
            />
          </div>

          {/* Swap Icon */}
          <div className="flex w-fit items-end">
            <div
              className="p-1.5 rounded-md border border-gray-300 transition-transform duration-200 transform active:scale-90 cursor-pointer"
              onClick={() => swapFromAndTo()}
            >
              <ArrowLeftRight />
            </div>
          </div>

          {/* TO Select Field */}
          <div className="flex flex-col w-4/9">
            <label htmlFor="to" className="font-semibold text-md mb-2">
              To
            </label>
            <Select
              inputId="to"
              options={options}
              value={options.find((opt) => opt.value === to)}
              onChange={(selected) => {setTo(selected.value)}}
              styles={customStyles}
              menuPlacement="bottom"
            />
          </div>
        </div>
      </div>

      {/* ------------ Exchang Section -------------  */}
      <Exchange 
        amount={Number(amount)}
        from={from.toUpperCase()}
        to={to.toUpperCase()}
        rate={(data[to])}
      />
      
      {/* --------- Convert Button ------- */}

      <div
        className="text-black bg-slate-50 font-semibold rounded-md py-2 text-md flex justify-center gap-1 mx-10 items-center font-mono cursor-pointer active:scale-102"
        onClick={() => {
          let rate = data[to];
          let value = {amount,from,to,rate,"time" : getDataAndTime()}
          setSavedData([...savedData,value])
        }}
      >
        <span>{from.toUpperCase()}</span>
        <span className="">
          <MoveRight />
        </span>
        <span>{to.toUpperCase()}</span>
      </div>
    </div>)}
    </>
  );
}

export default Converter;
