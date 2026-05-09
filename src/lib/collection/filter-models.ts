import type { CollectionModel } from "@/types/site";

const ALL_AESTHETICS = "all";

/**
 * Returns models matching the selected aesthetic filter id.
 * When `selectedAestheticId` is `"all"`, returns a shallow copy of the input list.
 */
export function filterModelsByAesthetic(
  models: CollectionModel[],
  selectedAestheticId: string,
): CollectionModel[] {
  if (selectedAestheticId === ALL_AESTHETICS) {
    return models.slice();
  }
  return models.filter((model) => model.aestheticIds.includes(selectedAestheticId));
}
