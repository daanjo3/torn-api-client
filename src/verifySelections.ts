import { SelectionVerifier } from "./@types/selections";

const verifySelection = (selections: string | string[] | undefined, isSelection: SelectionVerifier): void => {
    if (selections == null) {
        return;
    }
    if (Array.isArray(selections)) {
        selections.forEach(selection => {
            if (!isSelection(selection)) throw new Error(`${selection} is not a valid parameter, cancelling request`);
        })
    } else {
        if (!isSelection(selections)) throw new Error(`${selections} is not a valid parameter, cancelling request`);
    }
}

export default verifySelection;