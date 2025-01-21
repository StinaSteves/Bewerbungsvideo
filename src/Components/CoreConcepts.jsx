import './CoreConcepts.css';

export default function CoreConcept(props) {
    return (
        <div className="coreWrapper">
            <div className="coreImage">
                <img src={props.image} alt="" />
            </div>
            <div className="coreTitle">
            <div className='title'>
                <h3>{props.title}</h3>
                </div>
                {props.name}<br/>
                {props.date}
            </div>
        </div>
    );
}