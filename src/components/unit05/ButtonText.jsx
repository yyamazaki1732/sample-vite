import './ButtonText.css'

const ButtonText = (props) => {
    return  (
        <div className="ButtonWrapper">
            <h1 className="ButtonTitle">{props.title}</h1>
            <h2 className="ButtonContent">{props.content}</h2>
        </div>
    );
};

export default ButtonText;