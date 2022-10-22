declare interface EntryStatusMap {
  disabled?: [() => boolean, string][]
  error?: [() => boolean, string][]
  success?: [() => boolean, string][]
  default?: [() => boolean, string][]
}
