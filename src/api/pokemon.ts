

import { API_BASE_URL } from '../config.ts';
import type { Pokemon } from './pokemon.type.ts';

// ポケモンリストの各アイテムを表す型
export type PokemonListItem = {
  name: string;
  url: string;
};

// ポケモンリスト取得結果を表す型
export type PokemonListResult = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
};

// ポケモンリストを取得する関数
export const fetchPokemonList = async (
  offset: number = 0,
  limit: number = 20
): Promise<PokemonListResult> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/pokemon?offset=${offset}&limit=${limit}`
    );
    
    if (!response.ok) {
      throw new Error('ポケモンリストの取得に失敗しました');
    }
    
    const data: PokemonListResult = await response.json();
    return data;
  } catch (error) {
    console.error('ポケモンリストの取得エラー:', error);
    throw error;
  }
};

// 個別のポケモン詳細情報を取得する関数
export const fetchPokemon = async (idOrName: string | number): Promise<Pokemon> => {
  try {
    const response = await fetch(`${API_BASE_URL}/pokemon/${idOrName}`);
    
    if (!response.ok) {
      throw new Error('ポケモン情報の取得に失敗しました');
    }
    
    const data: Pokemon = await response.json();
    return data;
  } catch (error) {
    console.error('ポケモン情報の取得エラー:', error);
    throw error;
  }
};
