import React,{ FC, useState } from "react";
// import './GenerateOutfit.css';
import { containerStyle, optionStyle, selectStyle } from "../../utils/styles";

interface GenerateOutfitProp {
    styles: Array<string>,
    color?: string,
    dresses?: Array<Object>,
    blouses?: Array<Object>,
    skirts?: Array<Object>,
    pants?: Array<Object>,
    text?: string,
    textColor?: string,
}

const GenerateOutfit: FC<GenerateOutfitProp> = ({styles, color='#FFF5EE', textColor = 'white', dresses, blouses, skirts, pants, text}) => {
    const [selectedStyle, setSelectedStyle] = useState('');
    const [selectedButon, setSelectedButton] = useState(Array(styles.length).fill(false));
    const [message, setMessage] = useState('');

    const handleStyleChange = (style: string) => {
        setSelectedStyle(style);
    };

    const handleButtonClick = () => {
        if (selectedStyle) {
            setMessage(`You chose ${selectedStyle}`);
        } else {
            setMessage('Please choose a style first');
        }
    };
    return (
        <div className="generateOutfit" style={containerStyle(color, textColor)} >
            <h1>{text?.length !== 0 && text}</h1>
            <div className="style-options" style={selectStyle()}> 
                {styles.map((style, index) => (
                    <button
                        style={optionStyle(selectedButon[index])}
                        key={index}
                        onClick={() => {handleStyleChange(style); setSelectedButton([...Array(index).fill(false), true, ...Array(selectedButon.length - index - 1).fill(false)])}}
                    >
                        {style}
                    </button>
                    )
                )}
            </div>
            <button className="choose-button" onClick={handleButtonClick}>
                Choose Style
            </button>
            <div className="message">
                {message && <p>{message}</p>}
            </div>
        </div>
    )
}
export default GenerateOutfit;