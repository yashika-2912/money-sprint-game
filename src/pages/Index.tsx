import { useState } from "react";
import StartScreen from "@/components/StartScreen";
import GameScreen from "@/components/GameScreen";
import ResultScreen from "@/components/ResultScreen";

type GameState = "start" | "playing" | "result";

interface GameResult {
  finalBalance: number;
  correctAnswers: number;
}

const Index = () => {
  const [gameState, setGameState] = useState<GameState>("start");
  const [result, setResult] = useState<GameResult>({ finalBalance: 0, correctAnswers: 0 });

  const handleStart = () => {
    setGameState("playing");
  };

  const handleGameEnd = (finalBalance: number, correctAnswers: number) => {
    setResult({ finalBalance, correctAnswers });
    setGameState("result");
  };

  const handlePlayAgain = () => {
    setGameState("start");
  };

  return (
    <>
      {gameState === "start" && <StartScreen onStart={handleStart} />}
      {gameState === "playing" && <GameScreen onGameEnd={handleGameEnd} />}
      {gameState === "result" && (
        <ResultScreen
          finalBalance={result.finalBalance}
          correctAnswers={result.correctAnswers}
          totalQuestions={8}
          onPlayAgain={handlePlayAgain}
        />
      )}
    </>
  );
};

export default Index;
