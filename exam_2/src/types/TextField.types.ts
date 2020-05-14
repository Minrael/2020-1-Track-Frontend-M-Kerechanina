export interface ITextField{
    placeholder?: string
    value?: string
    handleChange?: (e:React.KeyboardEvent<HTMLTextAreaElement>) => void
    handleKeyPress?: (e:React.KeyboardEvent<HTMLTextAreaElement>) => void
}