"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Wind, CloudMoon, Dumbbell } from "lucide-react";

interface Exercise {
  name: string;
  duration: number;
  video: string;
  icon: React.ReactNode;
}

const exercises: Exercise[] = [
  { name: "Mindfulness Meditation", duration: 10, video: "https://www.youtube.com/embed/w6T02g5hnT4", icon: <Brain className="w-8 h-8 text-indigo-500" /> },
  { name: "Loving-Kindness Meditation", duration: 20, video: "https://www.youtube.com/embed/3CpRIxVztw8", icon: <Heart className="w-8 h-8 text-pink-500" /> },
  { name: "Breath Awareness", duration: 5, video: "https://www.youtube.com/embed/YFSc7Ck0Ao0", icon: <Wind className="w-8 h-8 text-blue-500" /> },
  { name: "Yoga", duration: 10, video: "https://www.youtube.com/embed/v7AYKMP6rOE", icon: <Dumbbell className="w-8 h-8 text-purple-500" /> },
  { name: "Guided Relaxation", duration: 15, video: "https://www.youtube.com/embed/2ZBNcl9r6nM", icon: <CloudMoon className="w-8 h-8 text-slate-500" /> },
];

const MeditationExercises = () => {
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isRunning, timeLeft]);

  const startMeditation = (exercise: Exercise) => {
    setSelectedExercise(exercise);
    setTimeLeft(exercise.duration * 60);
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning((prev) => !prev);
  }; 

  return (
    <div suppressHydrationWarning className="max-w-lg mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
      <h1 className="text-2xl font-bold text-center mb-4">Meditation Exercises</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {exercises.map((exercise) => (
          <Card
            key={exercise.name}
            className="p-4 cursor-pointer hover:bg-gray-950"
            onClick={() => startMeditation(exercise)}
          >
            <CardContent>
              <div className="mb-2">{exercise.icon}</div>
              <p className="text-lg font-semibold">{exercise.name}</p>
              <p className="text-sm text-gray-500">{exercise.duration} min</p>
            </CardContent>
          </Card>
        ))}
      </div>
      {selectedExercise && (
        <div className="mt-6 text-center">
          <h2 className="text-xl font-semibold flex items-center justify-center gap-2">
            {selectedExercise.icon}
            {selectedExercise.name}
          </h2>
          <p className="text-lg text-gray-600">Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}</p>
          <Button className="mt-4" onClick={pauseTimer}>{isRunning ? "Pause" : "Resume"} Timer</Button>
          <BreathingGuide />
          <div className="mt-4 flex justify-center">
            <iframe
              className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl"
              height="315"
              src={selectedExercise.video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

const BreathingGuide = () => (
  <motion.div
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className="w-24 h-24 bg-blue-400 rounded-full mx-auto mt-4"
  ></motion.div>
);

export default MeditationExercises;
