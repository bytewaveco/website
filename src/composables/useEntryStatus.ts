/**
 * Get entry status from entry status map.
 *
 * @param statusMap - The entry status map to detrmine the hint and status type
 * of the entry state.
 * @returns Entry status hint and type.
 */
export default function useEntryStatus(statusMap: EntryStatusMap = {}) {
  const status = {
    isDisabled: false,
    isError: false,
    isSuccess: false,
    isDefault: false,
    hintText: '',
  }

  for (const statusType of ['disabled', 'error', 'success', 'default']) {
    let statusFound = false

    if (Array.isArray(statusMap[statusType])) {
      for (const [condition, hint] of statusMap[statusType]) {
        if (typeof condition === 'function' && condition()) {
          status.hintText = hint

          switch (statusType) {
            case 'disabled':
              status.isDisabled = true
              break
            case 'error':
              status.isError = true
              break
            case 'success':
              status.isSuccess = true
              break
            case 'default':
              status.isDefault = true
              break
          }

          statusFound = true
          break
        }
      }

      if (statusFound) {
        break
      }
    }
  }

  return status
}
