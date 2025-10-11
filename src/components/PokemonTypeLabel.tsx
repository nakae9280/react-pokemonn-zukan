// ポケモンのタイプのラベル
import React from 'react';
import { pokemonTypesMap } from '../pokemonTypeMap.ts';

type PokemonTypeLabelProps = {
  type: string;
};

const PokemonTypeLabel: React.FC<PokemonTypeLabelProps> = ({ type }) => {
  const typeInfo = pokemonTypesMap.find((t: { type: string; jaType: string; color: string }) => t.jaType === type);
  return (
    <span 
      style={{
        backgroundColor: typeInfo?.color,
      }}
      key={type}
      className={`text-white px-3 py-1 rounded-full w-fit`}
    >
      {typeInfo?.jaType}
    </span>
  );
};

export default PokemonTypeLabel;