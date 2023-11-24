export default function Button(props){

    return(
        <Button 
        className={'btn ${props.disabled ? "disable": ""}'} 
        onClick={props.onClick} 
        disabled={props.disabled}
        >

            {props.text}
        </Button>
    );
}