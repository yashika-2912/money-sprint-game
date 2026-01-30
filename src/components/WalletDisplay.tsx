import { motion, AnimatePresence } from "framer-motion";

interface WalletDisplayProps {
  balance: number;
  previousBalance?: number;
}

const WalletDisplay = ({ balance, previousBalance }: WalletDisplayProps) => {
  const difference = previousBalance !== undefined ? balance - previousBalance : 0;
  const isPositive = difference > 0;
  const isNegative = difference < 0;

  return (
    <div className="relative">
      <motion.div
        className="wallet-display pulse-glow"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 0.3 }}
        key={balance}
      >
        <span className="text-2xl">💰</span>
        <span className="text-xl">${balance.toLocaleString()}</span>
      </motion.div>

      <AnimatePresence>
        {difference !== 0 && (
          <motion.div
            initial={{ opacity: 0, y: 0, x: "-50%" }}
            animate={{ opacity: 1, y: -30 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className={`absolute left-1/2 top-0 font-bold text-lg ${
              isPositive ? "text-success" : "text-destructive"
            }`}
          >
            {isPositive ? "+" : ""}{difference}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WalletDisplay;
