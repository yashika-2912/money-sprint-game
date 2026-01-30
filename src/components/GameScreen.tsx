import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { scenarios } from "@/data/scenarios";
import ScenarioCard from "./ScenarioCard";
import ProgressBar from "./ProgressBar";
import WalletDisplay from "./WalletDisplay";

interface GameScreenProps {
  onGameEnd: (finalBalance: number, correctAnswers: number) => void;
}

const GameScreen = ({ onGameEnd }: GameScreenProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [balance, setBalance] = useState(1000);
  const [previousBalance, setPreviousBalance] = useState<number | undefined>(undefined);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [shuffledScenarios, setShuffledScenarios] = useState(scenarios);

  useEffect(() => {
    // Shuffle scenarios and their options on mount
    const shuffled = [...scenarios]
      .sort(() => Math.random() - 0.5)
      .map(scenario => ({
        ...scenario,
        options: [...scenario.options].sort(() => Math.random() - 0.5)
      }));
    setShuffledScenarios(shuffled);
  }, []);

  const handleAnswer = (impact: number, isCorrect: boolean) => {
    setPreviousBalance(balance);
    setBalance((prev) => prev + impact);
    
    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
    }

    setTimeout(() => {
      if (currentIndex + 1 >= shuffledScenarios.length) {
        onGameEnd(balance + impact, correctAnswers + (isCorrect ? 1 : 0));
      } else {
        setCurrentIndex((prev) => prev + 1);
        setPreviousBalance(undefined);
      }
    }, 500);
  };

  const currentScenario = shuffledScenarios[currentIndex];

  return (
    <div className="min-h-screen hero-gradient py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="text-3xl">💰</span>
            <span className="text-xl font-bold text-gradient">MoneySprint</span>
          </div>
          <WalletDisplay balance={balance} previousBalance={previousBalance} />
        </div>

        {/* Progress */}
        <div className="mb-8">
          <ProgressBar current={currentIndex + 1} total={shuffledScenarios.length} />
        </div>

        {/* Scenario Card */}
        <AnimatePresence mode="wait">
          <ScenarioCard
            key={currentScenario.id}
            scenario={currentScenario}
            onAnswer={handleAnswer}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GameScreen;
