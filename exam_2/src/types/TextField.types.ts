export interface ITextField{
    placeholder?: string
    value?: string
    handleChange?: (e:React.ChangeEvent<HTMLTextAreaElement>) => void
    handleKeyPress?: (e:React.KeyboardEvent<HTMLTextAreaElement>) => void
}