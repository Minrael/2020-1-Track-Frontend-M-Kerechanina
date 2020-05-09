export interface ITextField{
    placeholder?: string
    value?: string
    handleChange?: (e:any) => void
    handleKeyPress?: (e:any) => void
}