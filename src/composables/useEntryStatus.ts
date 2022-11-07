/**
 * Get entry status from entry status map.
 *
 * @param statusMap - The entry status map to detrmine the hint and status type
 * of the entry state.
 * @returns Entry status hint and type.
 */
export default function useEntryStatus(statusMap: EntryStatusMap, value?: unknown) {
  for (const statusType of [
    'disabled',
    'error',
    'success',
    'default',
  ] as (keyof EntryStatusMap)[]) {
    for (const [condition, hint] of statusMap[statusType] ?? []) {
      if (typeof condition === 'function' && condition(value)) {
        return [statusType, hint]
      }
    }
  }

  return ['default', '']
}
