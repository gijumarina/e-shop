
export const containerStyle = (color: string, textColor: string) => {
    return ({
        backgroundColor: `${color}`,
        color: `${textColor}`,
        textShadow: `1px 1px 2px ${color}, 0 0 1em ${color}, 0 0 0.2em black`,
        padding: '1%',
        width: "fit-content"
    })
}

export const optionStyle = (selectedButton: boolean) => {
    return ({
        backgroundColor: `${!selectedButton ? "white": "pink"}`,
        borderStyle: 'none',
        padding: '2%',
        margin: '5%',
        boxShadow: `${!selectedButton ? '5px 5px 2px 1px rgb(255, 192, 203)' : ''}`
    })
}

export const selectStyle = () => {
    return ({
        display: "grid",
        width: '100%',
        gridTemplateColumns: "auto auto auto",
    })
}
