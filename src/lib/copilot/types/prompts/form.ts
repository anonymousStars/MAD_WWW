export default `
enum FormType {
    Input = "Input",
    Select = "Select",
    checkbox = "checkbox",
}

interface Form {
    question: string;
    type: FormType;
    placeholder?: string;
    options?: string[];
}

// An array of Form objects
type Forms = Form[];`