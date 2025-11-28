import "./style.css"
import icon_plus from "../../../assets/images/icon-plus.svg"
export const Component_line_question = ({question_props}) => {
    return(
        <div className="card_question">
            <p>{question_props}</p>
            <img src={icon_plus} alt="" />
        </div>
    )
}