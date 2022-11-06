export default function usePasswordValidator() {
  return {
    validate: (password: string) => typeof password === 'string' && password.length >= 8,
  }
}
