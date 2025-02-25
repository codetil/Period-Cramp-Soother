import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const exercises = [
  { name: "Mindfulness Meditation", duration: 10, audio: "/audio/mindfulness.mp3", video: "https://www.youtube.com/embed/w6T02g5hnT4" },
  { name: "Loving-Kindness Meditation", duration: 20, audio: "/audio/loving_kindness.mp3", video: "https://www.youtube.com/embed/3CpRIxVztw8" },
  { name: "Breath Awareness", duration: 5, audio: "/audio/breath_awareness.mp3", video: "https://www.youtube.com/embed/YFSc7Ck0Ao0" },
  { name: "Yoga", duration: 10, audio: "/audio/yoga.mp3", video: "https://www.youtube.com/embed/v7AYKMP6rOE" },
  { name: "Guided Relaxation", duration: 15, audio: "/audio/guided_relaxation.mp3", video: "https://www.youtube.com/embed/2ZBNcl9r6nM" },
];

export default function MeditationExercises() {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [timeLeft, setTimeLeft] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      if (audio) {
        audio.pause();
      }
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, audio]);

  const startMeditation = (exercise) => {
    setSelectedExercise(exercise);
    setTimeLeft(exercise.duration * 60);
    setIsRunning(true);
    const newAudio = new Audio(exercise.audio);
    setAudio(newAudio);
    newAudio.play();
  };

  const pauseTimer = () => {
    setIsRunning(!isRunning);
    if (audio) {
      isRunning ? audio.pause() : audio.play();
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
      <h1 className="text-2xl font-bold text-center mb-4">Meditation Exercises</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {exercises.map((exercise) => (
          <Card
            key={exercise.name}
            className="p-4 cursor-pointer hover:bg-gray-100"
            onClick={() => startMeditation(exercise)}
          >
            <CardContent>
              <p className="text-lg font-semibold">{exercise.name}</p>
              <p className="text-sm text-gray-500">{exercise.duration} min</p>
            </CardContent>
          </Card>
        ))}
      </div>
      {selectedExercise && (
        <div className="mt-6 text-center">
          <h2 className="text-xl font-semibold">{selectedExercise.name}</h2>
          <p className="text-lg text-gray-600">Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}</p>
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
          <Button className="mt-4" onClick={pauseTimer}>{isRunning ? "Pause" : "Resume"} Timer</Button>
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
