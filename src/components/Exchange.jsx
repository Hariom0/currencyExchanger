import React from "react";
import { TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';

function Exchange({ amount, from, to, rate }) {
  return (
    <div className="flex m-6 text-white  px-3 py-4 rounded-lg shadow border border-gray-200 ">
      <div className=" w-1/2 ">
        <div className=" font-semibold">Exchange Rate</div>
        <motion.div
        key={Date.now()}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`text-2xl mt-2 font-bold text-clip`}
      >
        {(amount*rate).toFixed(2)}
      </motion.div>
        <div className=" font-semibold mt-1">{to}</div>
      </div>
      <div className="w-1/2">
        <div className="border w-fit px-3 py-1 border-gray-400 rounded-xl font-bold  shadow flex items-center gap-1">
          <span>
            <TrendingUp size={10} />
          </span>
          <span className="text-[12px]">
            1 {from} = {rate.toFixed(2)} {to}
          </span>
        </div>
      </div>

    </div>

  );
}

export default Exchange;
