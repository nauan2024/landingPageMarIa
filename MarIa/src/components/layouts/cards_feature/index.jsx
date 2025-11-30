import "./style.css"

export const Cards_feature = ({iconcard, titlecard, subtitlecard, pcard}) => {
    return (
        <div className="doubleCard">
            <div className="upper_text_card">
                <img src={iconcard} alt="" />
                <h2>{titlecard}</h2>
            </div>
            <div className="bottom_content_card">
                <h3>{subtitlecard}</h3>
                    <p>{pcard}</p>
            </div>
        </div>
    )
}