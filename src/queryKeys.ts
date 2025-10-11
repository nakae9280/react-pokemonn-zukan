// src/queryKeys.ts

export const apiQueryKeys = {
  pokemon: {
    list: () => ['pokemon', 'list'] as const,
    detail: (id: string | number) => ['pokemon', 'detail', id] as const,
    species: (id: string | number) => ['pokemon', 'species', id] as const,
  },
};
