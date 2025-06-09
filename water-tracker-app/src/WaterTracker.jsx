import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function WaterTracker() {
  const dailyGoal = 16; // 16 glasses = ~4L, adjustable
  const [glasses, setGlasses] = useState(0);

  const addGlass = () => {
    if (glasses < dailyGoal) setGlasses(glasses + 1);
  };

  const removeGlass = () => {
    if (glasses > 0) setGlasses(glasses - 1);
  };

  const reset = () => {
    setGlasses(0);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-4">
      <Card className="w-full max-w-sm text-center">
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold mb-2">💧 Water Tracker</h1>
          <p className="mb-4 text-gray-600">Track your daily water intake</p>

          <div className="text-6xl font-bold text-blue-600 mb-4">{glasses}</div>
          <p className="mb-4">Glasses of water (250ml each)</p>

          <div className="flex justify-center gap-3 mb-4">
            <Button onClick={addGlass} disabled={glasses >= dailyGoal}>+1 Glass</Button>
            <Button onClick={removeGlass} variant="outline">-1 Glass</Button>
          </div>

          <Button onClick={reset} variant="destructive" size="sm">Reset</Button>

          <p className="mt-4 text-sm text-gray-500">
            Goal: {dailyGoal} glasses / ~4 Liters
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
