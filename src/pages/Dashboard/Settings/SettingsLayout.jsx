import { ArrowLeft } from "lucide-react";

export default function CosplitzSettings() {
  return (
    <div className="min-h-screen py-3 h-screen overflow-y-auto">
      
      <div className="flex gap-2 justify-between items-center">
        <ArrowLeft/>
        <p className="font-semibold text-lg">Settings</p>
        <p></p>
      </div>

      <p className="mt-4 p-3 text-gray-700 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Libero natus quod earum est totam quasi perferendis a dolor!
        Facere, id nihil omnis inventore nesciunt laboriosam
        reprehenderit vero eaque optio repellendus!
      </p>

    </div>
  );
}
