import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";

export default function WaterTracker() {
  const dailyGoal = 16;
  const [glasses, setGlasses] = useState(0);

  const addGlass = () => {
    if (glasses < dailyGoal) setGlasses(glasses + 1);
  };

  const removeGlass = () => {
    if (glasses > 0) setGlasses(glasses - 1);
  };

  const reset = () => setGlasses(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-6">
      <Card className="w-full max-w-md text-center">
        <CardContent className="p-8">
          <h1 className="text-3xl font-bold mb-2">💧 Water Tracker</h1>
          <p className="text-gray-600 mb-6">Track your daily water intake</p>

          <div className="text-7xl font-extrabold text-blue-600 mb-2">{glasses}</div>
          <p className="mb-6 text-lg text-gray-700">Glasses of water (250ml each)</p>

          <div className="flex justify-center gap-4 mb-6">
            <Button onClick={addGlass} disabled={glasses >= dailyGoal}>+1 Glass</Button>
            <Button onClick={removeGlass} variant="outline">-1 Glass</Button>
          </div>

          <Button onClick={reset} variant="destructive" size="sm">Reset</Button>

          <p className="mt-6 text-sm text-gray-500">Goal: {dailyGoal} glasses / ~4 Liters</p>
        </CardContent>
      </Card>
    </div>
  );
}
