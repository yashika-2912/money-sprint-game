import { motion } from "framer-motion";
import { Trophy, Star, TrendingUp, RotateCcw, Target } from "lucide-react";

interface ResultScreenProps {
  finalBalance: number;
  correctAnswers: number;
  totalQuestions: number;
  onPlayAgain: () => void;
}

const ResultScreen = ({ finalBalance, correctAnswers, totalQuestions, onPlayAgain }: ResultScreenProps) => {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  const startingBalance = 1000;
  const profit = finalBalance - startingBalance;
  const isProfitable = profit > 0;

  const getGrade = () => {
    if (percentage >= 90) return { grade: "S", label: "Money Master!", color: "text-accent" };
    if (percentage >= 75) return { grade: "A", label: "Finance Pro!", color: "text-success" };
    if (percentage >= 60) return { grade: "B", label: "Good Saver!", color: "text-primary" };
    if (percentage >= 40) return { grade: "C", label: "Keep Learning!", color: "text-warning" };
    return { grade: "D", label: "Practice More!", color: "text-muted-foreground" };
  };

  const { grade, label, color } = getGrade();

  const stats = [
    {
      icon: Target,
      label: "Accuracy",
      value: `${percentage}%`,
      subtext: `${correctAnswers}/${totalQuestions} correct`
    },
    {
      icon: TrendingUp,
      label: "Profit/Loss",
      value: `${isProfitable ? "+" : ""}$${profit}`,
      subtext: isProfitable ? "Great decisions!" : "Room to grow"
    }
  ];

  return (
    <div className="min-h-screen hero-gradient flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card-game max-w-md w-full text-center"
      >
        {/* Trophy Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
          className="mb-6"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20">
            <Trophy className="w-10 h-10 text-accent" />
          </div>
        </motion.div>

        {/* Grade */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-2"
        >
          <div className={`text-6xl font-extrabold ${color} mb-1`}>{grade}</div>
          <p className="text-xl font-bold text-foreground">{label}</p>
        </motion.div>

        {/* Final Balance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="my-6"
        >
          <div className="wallet-display text-xl mx-auto">
            <span className="text-2xl">💰</span>
            <span>Final: ${finalBalance.toLocaleString()}</span>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 gap-4 mb-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="p-4 rounded-xl bg-secondary/50">
              <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
              <p className="text-lg font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.subtext}</p>
            </div>
          ))}
        </motion.div>

        {/* Stars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-1 mb-6"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.7 + i * 0.1, type: "spring" }}
            >
              <Star
                className={`w-8 h-8 ${
                  i < Math.ceil(correctAnswers / 2)
                    ? "text-accent fill-accent"
                    : "text-muted-foreground"
                }`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Play Again Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          onClick={onPlayAgain}
          className="btn-primary flex items-center gap-2 mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <RotateCcw className="w-5 h-5" />
          Play Again
        </motion.button>

        {/* Motivational Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-4 text-sm text-muted-foreground"
        >
          Every smart choice is a step towards financial freedom! 🚀
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ResultScreen;
