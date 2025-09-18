import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Plus, Moon } from "lucide-react";

export default function TaskApp() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "bg-black text-white min-h-screen p-6" : "bg-white text-black min-h-screen p-6"}>
      <div className="max-w-md mx-auto space-y-4">
        {/* Card principal */}
        <Card className={dark ? "bg-neutral-900 text-white" : "bg-neutral-100 text-black"}>
          <CardContent className="p-6 space-y-4">
            <h1 className="text-xl font-bold flex items-center gap-2">
              🗒 Minhas Tarefas
            </h1>

            {/* Botão de adicionar tarefa */}
            <motion.div whileTap={{ scale: 0.95 }}>
              <button
                className={
                  dark
                    ? "w-full bg-neutral-800 text-white py-2 px-4 rounded-2xl hover:bg-neutral-700 transition"
                    : "w-full bg-neutral-200 text-black py-2 px-4 rounded-2xl hover:bg-neutral-300 transition"
                }
              >
                <Plus className="mr-2 h-4 w-4 inline" />
                Adicionar Tarefa
              </button>
            </motion.div>

            {/* Botão de alterar tema */}
            <motion.div whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => setDark(!dark)}
                className={
                  dark
                    ? "w-full bg-neutral-800 text-white py-2 px-4 rounded-2xl hover:bg-neutral-700 transition"
                    : "w-full bg-neutral-200 text-black py-2 px-4 rounded-2xl hover:bg-neutral-300 transition"
                }
              >
                <Moon className="mr-2 h-4 w-4 inline" />
                Alterar Tema
              </button>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}