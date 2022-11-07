declare type EntryValidator = [(value) => boolean, string]

declare interface EntryStatusMap {
  disabled?: EntryValidator[]
  error?: EntryValidator[]
  success?: EntryValidator[]
  default?: EntryValidator[]
}
