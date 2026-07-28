"use client";

import { useState, useEffect, useRef } from "react";
import { MagnifyingGlass, X, CaretDown } from "@phosphor-icons/react";

interface FixturesFilterProps {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  selectedStage: string;
  setSelectedStage: (val: string) => void;
  selectedGroup: string;
  setSelectedGroup: (val: string) => void;
  groups: string[];
  stageTranslations: Record<string, string>;
  handleClearFilters: () => void;
}

export default function FixturesFilter({
  searchTerm,
  setSearchTerm,
  selectedStage,
  setSelectedStage,
  selectedGroup,
  setSelectedGroup,
  groups,
  stageTranslations,
  handleClearFilters,
}: FixturesFilterProps) {
  const hasActiveFilters = searchTerm !== "" || selectedStage !== "all" || selectedGroup !== "all";


  const [isOpenStage, setIsOpenStage] = useState(false);
  const [isOpenGroup, setIsOpenGroup] = useState(false);

  const stageRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (stageRef.current && !stageRef.current.contains(event.target as Node)) {
        setIsOpenStage(false);
      }
      if (groupRef.current && !groupRef.current.contains(event.target as Node)) {
        setIsOpenGroup(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const activeStageLabel = selectedStage === "all" ? "Todas as Fases" : stageTranslations[selectedStage] || selectedStage;
  const activeGroupLabel = selectedGroup === "all" ? "Todos os Grupos" : `Grupo ${selectedGroup}`;

  return (
    <div className="bg-transparent p-0 select-none">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">

        <div className="relative flex-grow">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-500">
            <MagnifyingGlass size={18} className="text-zinc-400" />
          </div>
          <input
            type="text"
            placeholder="Buscar por seleção, estádio ou cidade..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl bg-zinc-900/40 hover:bg-zinc-900/60 py-3.5 pl-12 pr-4 text-sm font-semibold text-zinc-100 placeholder-zinc-500 border-0 outline-none focus:bg-zinc-900/80 transition duration-200"
          />
        </div>


        <div className="flex flex-wrap gap-3 z-30">

          <div ref={stageRef} className="relative">
            <button
              onClick={() => {
                setIsOpenStage(!isOpenStage);
                setIsOpenGroup(false);
              }}
              className="flex items-center justify-between rounded-xl bg-zinc-900/40 hover:bg-zinc-900/60 pr-4 pl-4 py-3.5 text-xs font-black uppercase tracking-widest text-zinc-350 outline-none transition duration-200 min-w-[160px]"
            >
              <span className="truncate">{activeStageLabel}</span>
              <CaretDown size={14} weight="bold" className={`text-zinc-400 ml-2 transition-transform duration-200 ${isOpenStage ? "rotate-180" : ""}`} />
            </button>

            {isOpenStage && (
              <div className="absolute left-0 mt-2 w-56 rounded-xl bg-zinc-950 border border-zinc-900/80 shadow-2xl p-1.5 flex flex-col gap-0.5 animate-in fade-in slide-in-from-top-1 duration-150">
                <button
                  onClick={() => {
                    setSelectedStage("all");
                    setIsOpenStage(false);
                  }}
                  className={`w-full text-left rounded-lg px-3 py-2 text-xs font-bold transition duration-150 ${
                    selectedStage === "all" ? "bg-orange-600 text-white" : "text-zinc-400 hover:bg-zinc-900/60 hover:text-white"
                  }`}
                >
                  Todas as Fases
                </button>
                {Object.entries(stageTranslations).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedStage(key);
                      setIsOpenStage(false);
                    }}
                    className={`w-full text-left rounded-lg px-3 py-2 text-xs font-bold transition duration-150 ${
                      selectedStage === key ? "bg-orange-600 text-white" : "text-zinc-400 hover:bg-zinc-900/60 hover:text-white"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>


          <div ref={groupRef} className="relative">
            <button
              onClick={() => {
                setIsOpenGroup(!isOpenGroup);
                setIsOpenStage(false);
              }}
              className="flex items-center justify-between rounded-xl bg-zinc-900/40 hover:bg-zinc-900/60 pr-4 pl-4 py-3.5 text-xs font-black uppercase tracking-widest text-zinc-350 outline-none transition duration-200 min-w-[160px]"
            >
              <span className="truncate">{activeGroupLabel}</span>
              <CaretDown size={14} weight="bold" className={`text-zinc-400 ml-2 transition-transform duration-200 ${isOpenGroup ? "rotate-180" : ""}`} />
            </button>

            {isOpenGroup && (
              <div className="absolute left-0 mt-2 w-48 rounded-xl bg-zinc-950 border border-zinc-900/80 shadow-2xl p-1.5 flex flex-col gap-0.5 max-h-60 overflow-y-auto animate-in fade-in slide-in-from-top-1 duration-150 scrollbar-thin">
                <button
                  onClick={() => {
                    setSelectedGroup("all");
                    setIsOpenGroup(false);
                  }}
                  className={`w-full text-left rounded-lg px-3 py-2 text-xs font-bold transition duration-150 ${
                    selectedGroup === "all" ? "bg-orange-600 text-white" : "text-zinc-400 hover:bg-zinc-900/60 hover:text-white"
                  }`}
                >
                  Todos os Grupos
                </button>
                {groups.map((group) => (
                  <button
                    key={group}
                    onClick={() => {
                      setSelectedGroup(group);
                      setIsOpenGroup(false);
                    }}
                    className={`w-full text-left rounded-lg px-3 py-2 text-xs font-bold transition duration-150 ${
                      selectedGroup === group ? "bg-orange-600 text-white" : "text-zinc-400 hover:bg-zinc-900/60 hover:text-white"
                    }`}
                  >
                    Grupo {group}
                  </button>
                ))}
              </div>
            )}
          </div>


          {hasActiveFilters && (
            <button
              onClick={handleClearFilters}
              className="flex items-center gap-2 rounded-xl bg-zinc-900/20 px-5 py-3.5 text-xs font-black uppercase tracking-wider text-orange-500 border border-zinc-850 hover:bg-zinc-900/50 transition duration-200"
            >
              <X size={14} />
              Limpar Filtros
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
