export default function useEmailValidator() {
  return {
    validate: (maybeEmail: string) =>
      typeof maybeEmail === 'string' &&
      /* eslint-disable-next-line max-len */
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        maybeEmail.toLowerCase()
      ),
  }
}
