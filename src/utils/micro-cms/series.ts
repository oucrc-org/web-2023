import { Series, SERIES_LIST_FIELDS } from '@/types/micro-cms';
import { client } from './client';

export async function getAllSerieses() {
  return await client.getList<Series>({
    endpoint: 'series',
    queries: {
      limit: 100,
      fields: SERIES_LIST_FIELDS,
    },
  });
}

export async function getSeries(contentId: string) {
  return await client
    .get<Series>({
      endpoint: 'series',
      contentId,
      queries: {
        fields: SERIES_LIST_FIELDS,
      },
    })
    .catch(() => {
      return null;
    });
}
