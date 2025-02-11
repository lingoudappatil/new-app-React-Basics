

const amount = "Shriii--    ";
const value = ()=>
{
    return `Printed By MahaDev ${amount}`;

}
const Comp = (props) =>
{
    return  (
    <p>this is example and practice component: {props.name},
   Total {amount}
   this message {value()}</p>
    );

}
export default Comp;