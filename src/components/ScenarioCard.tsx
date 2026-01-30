import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scenario } from "@/data/scenarios";
import { CheckCircle2, XCircle, Lightbulb } from "lucide-react";

interface ScenarioCardProps {
  scenario: Scenario;
  onAnswer: (impact: number, isCorrect: boolean) => void;
}

const ScenarioCard = ({ scenario, onAnswer }: ScenarioCardProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (index: number) => {
    if (selectedIndex !== null) return;
    
    setSelectedIndex(index);
    setShowResult(true);

    setTimeout(() => {
      const option = scenario.options[index];
      onAnswer(option.impact, option.isCorrect);
      setSelectedIndex(null);
      setShowResult(false);
    }, 2500);
  };

  const selectedOption = selectedIndex !== null ? scenario.options[selectedIndex] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="card-game max-w-2xl mx-auto"
    >
      {/* Situation Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          {scenario.situation}
        </h2>
        <p className="text-lg text-muted-foreground">
          {scenario.context}
        </p>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {scenario.options.map((option, index) => {
          const isSelected = selectedIndex === index;
          const showCorrect = showResult && option.isCorrect;
          const showIncorrect = showResult && isSelected && !option.isCorrect;

          return (
            <motion.button
              key={index}
              onClick={() => handleSelect(index)}
              disabled={selectedIndex !== null}
              className={`answer-option ${showCorrect ? "correct" : ""} ${showIncorrect ? "incorrect" : ""}`}
              whileHover={selectedIndex === null ? { scale: 1.02 } : {}}
              whileTap={selectedIndex === null ? { scale: 0.98 } : {}}
            >
              <div className="flex items-center justify-between">
                <span>{option.text}</span>
                {showCorrect && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-success" />
                  </motion.div>
                )}
                {showIncorrect && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    <XCircle className="w-6 h-6 text-destructive" />
                  </motion.div>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Tip Display */}
      <AnimatePresence>
        {showResult && selectedOption && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 overflow-hidden"
          >
            <div className={`p-4 rounded-xl flex gap-3 items-start ${
              selectedOption.isCorrect 
                ? "bg-success/10 border border-success/30" 
                : "bg-warning/10 border border-warning/30"
            }`}>
              <Lightbulb className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                selectedOption.isCorrect ? "text-success" : "text-warning"
              }`} />
              <p className={`text-sm font-medium ${
                selectedOption.isCorrect ? "text-success" : "text-warning-foreground"
              }`}>
                {selectedOption.tip}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ScenarioCard;
